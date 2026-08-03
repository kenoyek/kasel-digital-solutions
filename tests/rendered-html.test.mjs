import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
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
  const sitemapXml = await sitemap.text();
  assert.match(sitemapXml, /<loc>https:\/\/www\.kasel\.digital<\/loc>/);
  assert.match(sitemapXml, /<loc>https:\/\/www\.kasel\.digital\/work<\/loc>/);
  assert.match(sitemapXml, /<loc>https:\/\/www\.kasel\.digital\/work\/reframe<\/loc>/);

  const missing = await fetchFromWorker("/missing-page");
  assert.equal(missing.status, 404);
  assert.match(await missing.text(), /<h1>Page not found\.<\/h1>/i);
});

test("renders approved client logo carousel accessibly", async () => {
  const response = await fetchFromWorker("/");
  const html = await response.text();

  assert.match(html, /data-client-logo-section="enabled"/);
  assert.match(html, /Trusted by teams we(?:&#x27;|')ve helped move forward/);
  assert.match(html, /alt="Asele logo"/);
  assert.match(html, /alt="LearnEasy Academy logo"/);
  assert.match(html, /alt="Reframe logo"/);
  assert.match(html, /alt="Varifarms logo"/);
  assert.match(html, /href="\/work\/teacheasy-lms"/);
  assert.match(html, /href="\/work\/1vet"/);
  assert.match(html, /href="\/work\/asele"/);
  assert.match(html, /href="\/work\/reframe"/);
  assert.match(
    html,
    /<div aria-hidden="true" class="client-logo-carousel__set">/,
  );
  assert.match(html, /data-client-logo-carousel/);
});

test("client carousel data and styles stay intentional", async () => {
  const dataSource = await readFile(
    new URL("../app/data/clients.ts", import.meta.url),
    "utf8",
  );
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(dataSource, /export type Client = \{/);
  assert.match(dataSource, /CLIENT_LOGO_CAROUSEL_ENABLED = true/);
  for (const logo of [
    "/clients/asele.png",
    "/clients/learneasy-academy.png",
    "/clients/reframe-wordmark.png",
    "/clients/varifarms.svg",
  ]) {
    assert.match(dataSource, new RegExp(`logo: "${logo}"`));
  }
  assert.match(dataSource, /caseStudyHref: "\/work\/1vet"/);
  assert.match(dataSource, /caseStudyHref: "\/work\/reframe"/);

  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.client-logo-carousel:hover \.client-logo-carousel__track/);
  assert.match(css, /\.client-logo-carousel:focus-within \.client-logo-carousel__track/);
  assert.match(css, /overflow-x: hidden/);
});

test("renders the premium footer with working links", async () => {
  const response = await fetchFromWorker("/");
  const html = await response.text();
  const normalizedHtml = html.replace(/<!-- -->/g, "");
  const year = new Date().getFullYear();

  assert.match(html, /<footer class="site-footer">/);
  assert.match(html, /LET(?:&apos;|&#x27;|'|’)S BUILD WITH PRECISION/);
  assert.match(html, /Have a product to build or a process to improve\?/);
  assert.match(html, /href="\/#project-enquiry"/);
  assert.match(html, /id="project-enquiry"/);
  assert.match(
    html,
    /href="https:\/\/wa\.me\/2347075042166\?text=Hello%20Kasel%20Digital%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project\."/,
  );
  assert.match(html, /Explore footer navigation/);
  assert.match(html, /Services footer navigation/);
  assert.match(html, /Web and mobile development/);
  assert.match(html, /UI\/UX and brand design/);
  assert.match(html, /AI and workflow automation/);
  assert.match(html, /Cloud, data and analytics/);
  assert.match(html, /Digital strategy/);
  assert.match(html, /Call us/);
  assert.match(html, /href="tel:\+2347075042166"/);
  assert.match(html, /Precision in Motion/);
  assert.match(
    normalizedHtml,
    new RegExp(`© ${year} KASEL DIGITAL SOLUTIONS LTD\\. All rights reserved\\.`),
  );
  assert.doesNotMatch(html, /footer-social/);
  assert.doesNotMatch(html, /footer-legal__links/);
  assert.doesNotMatch(html, />www\.kasel\.digital<\/a>/);
  assert.doesNotMatch(html, /Privacy Policy/);
  assert.doesNotMatch(html, /Terms of Use/);
});

test("renders selected work and case study pages without placeholder commentary", async () => {
  const home = await (await fetchFromWorker("/")).text();
  assert.match(home, /Selected Work/);
  assert.match(home, /TeachEasy LMS/);
  assert.match(home, /1Vet/);
  assert.match(home, /Asele/);
  assert.match(home, /Reframe/);
  assert.match(home, /href="\/work\/teacheasy-lms"/);
  assert.match(home, /href="\/work\/reframe"/);
  assert.doesNotMatch(home, /No publishable case studies/i);
  assert.doesNotMatch(home, /repository/i);

  const work = await (await fetchFromWorker("/work")).text();
  assert.match(work, /Digital Products Built by Kasel/);
  assert.match(work, /href="https:\/\/teacheasylms\.com"/);
  assert.match(work, /href="https:\/\/1vet\.store"/);
  assert.match(work, /href="https:\/\/www\.asele\.health"/);
  assert.match(work, /href="https:\/\/reframe\.network"/);
  assert.match(work, /href="https:\/\/community\.reframe\.network"/);
  assert.match(work, /CreativeWork/);

  for (const [path, title] of [
    ["/work/teacheasy-lms", "TeachEasy LMS Case Study"],
    ["/work/1vet", "1Vet Case Study"],
    ["/work/asele", "Asele Case Study"],
    ["/work/reframe", "Reframe Case Study"],
  ]) {
    const response = await fetchFromWorker(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(title));
    assert.match(html, /BreadcrumbList/);
    assert.match(html, /CreativeWork/);
    assert.match(html, /Start a project/);
    assert.match(html, /Related Projects/);
    assert.doesNotMatch(html, /reduced administrative work by 70%/i);
  }

  const reframe = await (await fetchFromWorker("/work/reframe")).text();
  assert.match(reframe, /Bringing Reframe(?:&#x27;|')s community platform to mobile/);
  assert.match(reframe, /API and platform integration/);
  assert.match(reframe, /Authentication and deep-link work/);
  assert.match(reframe, /Application branding and icon system/);
  assert.match(reframe, /Explore the Reframe Community/);
  assert.doesNotMatch(reframe, /App Store availability/i);
  assert.doesNotMatch(reframe, /Google Play availability/i);
});
