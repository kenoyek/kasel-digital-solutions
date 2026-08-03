import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyVisual from "../components/CaseStudyVisual";
import ProjectTagList from "../components/ProjectTagList";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import {
  absoluteUrl,
  caseStudies,
  socialImageUrl,
  workMetadata,
} from "../data/case-studies";
import { SITE_NAME } from "../seo";

export const metadata: Metadata = {
  title: workMetadata.title,
  description: workMetadata.description,
  alternates: {
    canonical: workMetadata.path,
  },
  openGraph: {
    title: workMetadata.title,
    description: workMetadata.description,
    url: absoluteUrl(workMetadata.path),
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: socialImageUrl(),
        width: 1200,
        height: 630,
        alt: "KASEL Digital Solutions selected work preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: workMetadata.title,
    description: workMetadata.description,
    images: [socialImageUrl()],
  },
};

const workJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Selected digital products built by Kasel",
  url: absoluteUrl("/work"),
  itemListElement: caseStudies.map((caseStudy, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: `${caseStudy.name} case study`,
      about: caseStudy.category,
      url: absoluteUrl(`/work/${caseStudy.slug}`),
      creator: {
        "@type": "Organization",
        name: "KASEL DIGITAL SOLUTIONS LTD",
      },
    },
  })),
};

export default function WorkPage() {
  return (
    <main id="top">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }}
        type="application/ld+json"
      />
      <SiteHeader />

      <section aria-labelledby="work-heading" className="work-hero">
        <div className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Work</span>
        </div>
        <p className="eyebrow">Selected Work</p>
        <h1 id="work-heading">Digital products built around real operational needs.</h1>
        <p>
          Kasel works across product strategy, UX/UI design, full-stack
          development, cloud infrastructure and automation. These case studies
          focus on verified project scope and practical platform value.
        </p>
      </section>

      <section aria-labelledby="work-list-heading" className="section work-index">
        <div className="section__header section__header--split">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2 id="work-list-heading">Project experience across product, operations and customer service.</h2>
          </div>
          <p>
            Each project is described with confirmed information and measured
            language, focused on what Kasel built and what each platform enables.
          </p>
        </div>

        <div className="work-index__list">
          {caseStudies.map((caseStudy, index) => (
            <article className="work-index-card" key={caseStudy.slug}>
              <CaseStudyVisual caseStudy={caseStudy} compact={index !== 0} />
              <div className="work-index-card__content">
                <p className="case-kicker">{caseStudy.category}</p>
                <h3>{caseStudy.name}</h3>
                <p className="case-meta">Client/Product: {caseStudy.client}</p>
                <p>{caseStudy.summary}</p>
                <ProjectTagList
                  items={caseStudy.services.slice(0, 5)}
                  label={`${caseStudy.name} services`}
                  variant="service"
                />
                <ProjectTagList
                  items={caseStudy.technologies.slice(0, 5)}
                  label={`${caseStudy.name} technologies`}
                  variant="technology"
                />
                <div className="case-actions">
                  <Link className="button button--primary" href={`/work/${caseStudy.slug}`}>
                    View case study
                  </Link>
                  {caseStudy.websiteLinks?.map((link) => (
                    <a
                      className="case-link"
                      href={link.url}
                      key={link.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="work-cta-heading" className="section work-cta">
        <p className="eyebrow">Start a conversation</p>
        <h2 id="work-cta-heading">Have a product with similar operational complexity?</h2>
        <p>
          Share the product, workflow or service journey you want to improve.
          Kasel will help define the next practical step.
        </p>
        <Link className="button button--primary" href="/#project-enquiry">
          Start a project
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
