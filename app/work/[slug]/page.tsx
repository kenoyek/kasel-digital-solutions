import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudyVisual from "../../components/CaseStudyVisual";
import ProjectTagList from "../../components/ProjectTagList";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import {
  absoluteUrl,
  caseStudies,
  caseStudyMetadata,
  getCaseStudy,
  getRelatedCaseStudies,
  socialImageUrl,
} from "../../data/case-studies";
import { SITE_NAME } from "../../seo";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    return {};
  }

  const pageMetadata = caseStudyMetadata[caseStudy.slug];

  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    alternates: {
      canonical: pageMetadata.path,
    },
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      url: absoluteUrl(pageMetadata.path),
      siteName: SITE_NAME,
      type: "article",
      images: [
        {
          url: socialImageUrl(),
          width: 1200,
          height: 630,
          alt: `${caseStudy.name} case study by Kasel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [socialImageUrl()],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedProjects = getRelatedCaseStudies(caseStudy.slug);
  const pageUrl = absoluteUrl(`/work/${caseStudy.slug}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Work",
          item: absoluteUrl("/work"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: caseStudy.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: `${caseStudy.name} case study`,
      headline: `${caseStudy.name} case study`,
      about: caseStudy.category,
      description: caseStudy.summary,
      url: pageUrl,
      image: socialImageUrl(),
      creator: {
        "@type": "Organization",
        name: "KASEL DIGITAL SOLUTIONS LTD",
        url: absoluteUrl("/"),
      },
    },
  ];

  return (
    <main id="top">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <SiteHeader />

      <article>
        <section aria-labelledby="case-study-heading" className="case-hero">
          <div className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/work">Work</Link>
            <span aria-hidden="true">/</span>
            <span>{caseStudy.name}</span>
          </div>
          <div className="case-hero__layout">
            <div>
              <p className="eyebrow">{caseStudy.heroEyebrow ?? "Case Study"}</p>
              <h1 id="case-study-heading">{caseStudy.heroHeading ?? caseStudy.name}</h1>
              <p>{caseStudy.heroSummary ?? caseStudy.summary}</p>
              <div className="case-hero__actions">
                {caseStudy.websiteLinks?.map((link, index) => (
                  <a
                    className={index === 0 ? "button button--primary" : "button button--secondary"}
                    href={link.url}
                    key={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
                <Link className="button button--secondary" href="/#project-enquiry">
                  Start a project
                </Link>
              </div>
            </div>
            <CaseStudyVisual caseStudy={caseStudy} />
          </div>
        </section>

        <section aria-labelledby="project-context-heading" className="section case-context">
          <div className="case-facts" aria-label={`${caseStudy.name} project details`}>
            <div>
              <span>Client/Product</span>
              <strong>{caseStudy.client}</strong>
            </div>
            <div>
              <span>Industry</span>
              <strong>{caseStudy.category}</strong>
            </div>
            <div>
              <span>Kasel role</span>
              <strong>{caseStudy.services.join(", ")}</strong>
            </div>
          </div>

          <div className="case-narrative">
            <div>
              <p className="eyebrow">Overview</p>
              <h2 id="project-context-heading">A product system shaped around everyday operational work.</h2>
              <p>{caseStudy.summary}</p>
            </div>
            <div>
              <h3>The challenge</h3>
              <p>{caseStudy.challenge}</p>
            </div>
            <div>
              <h3>The solution</h3>
              <p>{caseStudy.solution}</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="capabilities-heading" className="section case-detail">
          <div className="section__header section__header--split">
            <div>
              <p className="eyebrow">Core Platform Capabilities</p>
              <h2 id="capabilities-heading">What the platform enables.</h2>
            </div>
            <p>
              The capabilities below reflect the confirmed scope for this
              project.
            </p>
          </div>
          <ul className="capability-matrix">
            {caseStudy.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="technology-heading" className="section case-architecture">
          <div>
            <p className="eyebrow">Technology and Architecture</p>
            <h2 id="technology-heading">A practical stack for product delivery and operations.</h2>
            <p>
              Kasel used the technologies referenced for this project to support
              interface delivery, secure data access, user roles, integrations
              and ongoing product maintenance.
            </p>
          </div>
          <ProjectTagList
            items={caseStudy.technologies}
            label={`${caseStudy.name} technology stack`}
            variant="technology"
          />
        </section>

        {caseStudy.focusAreas && (
          <section aria-labelledby="focus-areas-heading" className="section case-focus">
            <div className="section__header section__header--split">
              <div>
                <p className="eyebrow">Project Focus</p>
                <h2 id="focus-areas-heading">How the work connects across the platform.</h2>
              </div>
              <p>
                These focus areas describe the verified product and integration
                work handled for this case study.
              </p>
            </div>
            <div className="focus-grid">
              {caseStudy.focusAreas.map((focusArea) => (
                <article className="focus-card" key={focusArea.title}>
                  <h3>{focusArea.title}</h3>
                  <p>{focusArea.description}</p>
                  {focusArea.items && (
                    <ul>
                      {focusArea.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="gallery-heading" className="section case-gallery">
          <div className="section__header">
            <p className="eyebrow">Product Gallery</p>
            <h2 id="gallery-heading">Interface areas across the product.</h2>
            <p>
              These previews organise the product areas described in the
              confirmed project scope.
            </p>
          </div>
          <div className="gallery-grid">
            <CaseStudyVisual caseStudy={caseStudy} compact />
            <div className="gallery-panel">
              <h3>Operational areas</h3>
              <ul>
                {caseStudy.capabilities.slice(0, 5).map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
            <div className="gallery-panel">
              <h3>Kasel services</h3>
              <ul>
                {caseStudy.services.slice(0, 5).map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="business-value-heading" className="section case-value">
          <div>
            <p className="eyebrow">Business Value</p>
            <h2 id="business-value-heading">What the product brings together.</h2>
          </div>
          <p>{caseStudy.outcome}</p>
        </section>

        <section aria-labelledby="related-project-heading" className="section related-project">
          <div>
            <p className="eyebrow">Related Projects</p>
            <h2 id="related-project-heading">More verified Kasel work.</h2>
            <p>
              Continue exploring projects with similar product, platform or
              mobile delivery considerations.
            </p>
          </div>
          <div className="related-project__cards">
            {relatedProjects.map((related) => (
              <article className="related-card" key={related.slug}>
                <CaseStudyVisual caseStudy={related} compact />
                <div>
                  <h3>{related.name}</h3>
                  <p>{related.summary}</p>
                  <Link className="button button--secondary" href={`/work/${related.slug}`}>
                    View related case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="case-enquiry-heading" className="section work-cta">
          <p className="eyebrow">Project Enquiry</p>
          <h2 id="case-enquiry-heading">Planning a digital product with similar moving parts?</h2>
          <p>
            Share the customer journey, operational workflow or platform idea
            you want to improve.
          </p>
          <Link className="button button--primary" href="/#project-enquiry">
            Start a project
          </Link>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
