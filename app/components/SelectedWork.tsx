import Link from "next/link";
import { caseStudies } from "../data/case-studies";
import CaseStudyVisual from "./CaseStudyVisual";
import ProjectTagList from "./ProjectTagList";

export default function SelectedWork({ showHeaderLink = true }: { showHeaderLink?: boolean }) {
  const featuredProjects = caseStudies.slice(0, 2);
  const supportingProjects = caseStudies.slice(2);

  return (
    <section aria-labelledby="selected-work-heading" className="section selected-work" id="selected-work">
      <div className="section__header section__header--split">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 id="selected-work-heading">Real challenges.
            Purposeful digital products.</h2>
        </div>
        {showHeaderLink && (
          <p>
            From learning platforms to better access to care. Explore the products
            we’ve helped teams bring to life.
          </p>
        )}
      </div>

      <div className="selected-work__layout">
        {featuredProjects.map((caseStudy, index) => (
          <article
            className={index === 1 ? "work-feature work-feature--reverse" : "work-feature"}
            key={caseStudy.slug}
          >
            <div className="work-feature__content">
              <p className="case-kicker">{caseStudy.category}</p>
              <h3>{caseStudy.name}</h3>

              <p>{caseStudy.summary}</p>
              <ProjectTagList
                items={caseStudy.services.slice(0, 4)}
                label={`${caseStudy.name} services`}
                variant="service"
              />
              <div className="case-actions">
                <Link className="button button--primary" href={`/work/${caseStudy.slug}`}>
                  View case study
                </Link>
                {caseStudy.websiteLinks?.[0] && (
                  <a
                    className="case-link"
                    href={caseStudy.websiteLinks[0].url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {caseStudy.websiteLinks[0].label}
                  </a>
                )}
              </div>
            </div>
            <CaseStudyVisual caseStudy={caseStudy} />
          </article>
        ))}

        <div className="work-supporting">
          {supportingProjects.map((caseStudy) => (
            <article className="work-card" key={caseStudy.slug}>
              <CaseStudyVisual caseStudy={caseStudy} compact />
              <div className="work-card__body">
                <p className="case-kicker">{caseStudy.category}</p>
                <h3>{caseStudy.name}</h3>

                <p>{caseStudy.summary}</p>
                <ProjectTagList
                  items={caseStudy.services.slice(0, 3)}
                  label={`${caseStudy.name} services`}
                  variant="service"
                />
                <div className="case-actions">
                  <Link className="button button--secondary" href={`/work/${caseStudy.slug}`}>
                    View case study
                  </Link>
                  {caseStudy.websiteLinks?.[0] && (
                    <a
                      className="case-link"
                      href={caseStudy.websiteLinks[0].url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {caseStudy.websiteLinks[0].label}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {showHeaderLink && <Link className="text-link selected-work__all" href="/work">Explore all projects <span aria-hidden="true" className="arrow-icon" /></Link>}
    </section>
  );
}
