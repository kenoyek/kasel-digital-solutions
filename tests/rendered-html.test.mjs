import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function fetchFromWorker(pathname, accept = "text/html") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const response = await fetchFromWorker("/");
  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("renders homepage SEO metadata server-side", async () => {
  const response = await fetchFromWorker("/");
  const html = await response.text();

  assert.match(html, /<html lang="en"/i);
  assert.match(html, /<title>KASEL Digital Solutions \| Precision in Motion<\/title>/i);
  assert.match(
    html,
    /<meta(?=[^>]*\bname="description")(?=[^>]*\bcontent="KASEL Digital Solutions designs and builds practical digital products, automation systems and customer experiences for businesses ready to work better\.")[^>]*>/i,
  );
  assert.match(html, /<link(?=[^>]*\brel="canonical")(?=[^>]*\bhref="https:\/\/www\.kasel\.digital\/?")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="https:\/\/www\.kasel\.digital\/kasel-social-preview\.png")[^>]*>/i);
  assert.match(html, /<meta(?=[^>]*\bname="twitter:card")(?=[^>]*\bcontent="summary_large_image")[^>]*>/i);
  assert.doesNotMatch(html, /<meta(?=[^>]*\bname="robots")(?=[^>]*\bcontent="[^"]*noindex)/i);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((html.match(/<img\b(?![^>]*\salt=)/g) ?? []).length, 0);

  const jsonLdMatch = html.match(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
  );
  assert.ok(jsonLdMatch, "Expected JSON-LD script in rendered HTML");
  const jsonLd = JSON.parse(jsonLdMatch[1]);
  assert.deepEqual(
    jsonLd.map((entry) => entry["@type"]),
    ["WebSite", "Organization", "ProfessionalService", "ItemList"],
  );
});

test("serves crawl files and custom 404", async () => {
  const robots = await fetchFromWorker("/robots.txt", "*/*");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/www\.kasel\.digital\/sitemap\.xml/);

  const sitemap = await fetchFromWorker("/sitemap.xml", "*/*");
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /<loc>https:\/\/www\.kasel\.digital<\/loc>/);

  const missing = await fetchFromWorker("/missing-page");
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /<h1>Page not found\.<\/h1>/i);
});
