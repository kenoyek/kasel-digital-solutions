import ClientLogoCarousel from "./components/ClientLogoCarousel";
import PrecisionOrb from "./components/PrecisionOrb";
import ProjectForm from "./components/ProjectForm";
import SelectedWork from "./components/SelectedWork";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { WHATSAPP_URL } from "./components/WhatsAppButton";
import {
  organizationJsonLd,
  professionalServiceJsonLd,
  serviceCatalogJsonLd,
  websiteJsonLd,
} from "./seo";

const capabilities = [
  {
    name: "Product Engineering",
    services: "Web applications, mobile applications, cloud solutions",
    problem:
      "Teams need dependable digital products that work across devices, scale with demand and remain maintainable after launch.",
    deliverables:
      "Kasel plans, designs and builds responsive web platforms, mobile apps and cloud-backed systems with clear technical foundations.",
  },
  {
    name: "Experience and Brand",
    services: "UI/UX design, brand design, video and digital content",
    problem:
      "Customers judge trust and quality quickly. Weak interfaces, unclear journeys and inconsistent visuals make that trust harder to earn.",
    deliverables:
      "Kasel creates product interfaces, identity systems and digital content that make offers easier to understand, use and remember.",
  },
  {
    name: "Automation and Intelligence",
    services: "AI systems, workflow automation, data and analytics",
    problem:
      "Manual work, scattered tools and unclear reporting slow teams down and hide the signals leaders need to act.",
    deliverables:
      "Kasel connects workflows, introduces practical AI support and turns operational data into usable reporting and decision tools.",
  },
  {
    name: "Digital Strategy",
    services: "Digital transformation, IT strategy and consulting",
    problem:
      "Growing organisations need a practical technology direction before they invest in platforms, teams or new operating models.",
    deliverables:
      "Kasel clarifies priorities, maps systems and defines delivery plans that connect business goals to technical execution.",
  },
];

const process = [
  ["Discover", "Clarify the business goal, users, constraints and success conditions before any production work begins."],
  ["Define", "Turn the opportunity into a scoped plan, delivery sequence, technical direction and measurable priorities."],
  ["Design", "Shape the product experience, interface system and content so the solution is clear before it is built."],
  ["Build", "Develop, test and integrate the product with maintainable architecture and regular review points."],
  ["Launch and improve", "Release the work, support adoption and refine it with performance, feedback and operational learning."],
];

const standards = [
  "Responsive product development",
  "Accessibility-minded interfaces",
  "Performance-focused implementation",
  "Maintainable architecture",
  "Security-conscious delivery",
  "Clear communication",
  "Post-launch support",
];

const jsonLd = [
  websiteJsonLd,
  organizationJsonLd,
  professionalServiceJsonLd,
  serviceCatalogJsonLd,
];

export default function Home() {
  return (
    <main id="top">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <a className="skip-link" href="#hero-heading">Skip to content</a>
      <SiteHeader />

      <section aria-labelledby="hero-heading" className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">Strategy. Design. Engineering.</p>
          <h1 id="hero-heading">Precision<br /><span>in Motion.</span></h1>
          <p className="hero__lead">
            From the first idea to the next chapter. We bring design, engineering
            and practical intelligence together to move your business forward.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#project-enquiry">
              Start a project <span aria-hidden="true" className="arrow-icon" />
            </a>
            <a className="button button--secondary" href="#selected-work">
              Explore our work <span aria-hidden="true" className="arrow-icon" />
            </a>
          </div>
        <p className="hero__note">Built for people. Engineered for what’s next.</p>
        </div>
        <div className="hero__orb">
          <span className="hero__orbit-label">IDEAS INTO IMPACT</span>
          <PrecisionOrb />
          <div className="hero__disciplines"><span>Design with purpose</span><span>Build with precision</span></div>
        </div>
      </section>

      <ClientLogoCarousel />

      <section aria-labelledby="services-heading" className="section services" id="services">
        <div className="section__header">
          <p className="eyebrow">Services</p>
          <h2 id="services-heading">Good ideas deserve<br />great execution.</h2>
          <p>
            One partner for the full picture. We connect business thinking with
            thoughtful design and dependable technology.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.name}>
              <div className="capability__intro">
                <h3>{capability.name}</h3>
                <p>{capability.services}</p>
              </div>
              <p className="capability__description">{capability.deliverables}</p>
              <details className="capability__details">
                <summary>When we can help <span aria-hidden="true">+</span></summary>
                <p>{capability.problem}</p>
              </details>
              <a className="text-link" href="#project-enquiry">Let’s talk <span aria-hidden="true" className="arrow-icon" /></a>
            </article>
          ))}
        </div>
      </section>

      <SelectedWork />

      <section aria-labelledby="process-heading" className="section process" id="process">
        <div className="section__header">
          <p className="eyebrow">Process</p>
          <h2 id="process-heading">Clarity at every step.</h2>
        </div>
        <ol className="process-list">
          {process.map(([name, description]) => (
            <li key={name}>
              <span>{name}</span>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="contact-heading" className="section contact" id="contact">
        <div className="contact__intro">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-heading">Have a product to build or a process to improve?</h2>
          <p>
            Share the shape of the work. Kasel will respond with the clearest
            next step for your product, workflow or digital operation.
          </p>
          <div className="contact__actions">
            <a className="button button--primary" href="mailto:hello@kasel.digital?subject=Project%20enquiry%20for%20KASEL%20Digital%20Solutions">
              Email Kasel
            </a>
            <a className="button button--secondary" href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <ProjectForm />
      </section>

      <section aria-labelledby="about-heading" className="section about" id="about">
        <div className="about__content">
          <p className="eyebrow">About Kasel</p>
          <h2 id="about-heading">Thoughtful by design.<br />Practical by nature.</h2>
          <p className="lead">
            KASEL DIGITAL SOLUTIONS LTD helps startups, growing companies and
            established organisations turn practical needs into useful digital
            systems.
          </p>
          <p>
            The work sits where strategy, product design and implementation meet:
            clearer customer experiences, stronger operational tools and
            technology decisions that can be explained.
          </p>
        </div>
        <aside className="standards" aria-labelledby="standards-heading">
          <p className="eyebrow">Trust and standards</p>
          <h3 id="standards-heading">How the work is held.</h3>
          <ul>
            {standards.map((standard) => (
              <li key={standard}>{standard}</li>
            ))}
          </ul>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
