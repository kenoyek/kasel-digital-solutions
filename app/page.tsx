import KaselMark from "./components/KaselMark";
import ClientLogoCarousel from "./components/ClientLogoCarousel";
import PrecisionOrb from "./components/PrecisionOrb";
import ProjectForm from "./components/ProjectForm";
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

const builds = [
  "Customer portals and booking platforms",
  "Internal workflow and approval tools",
  "Mobile apps for service delivery",
  "Brand systems and product interfaces",
  "Automation dashboards and AI-assisted operations",
  "Cloud-ready data and reporting layers",
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

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <main id="top">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <SiteHeader />

      <section aria-labelledby="hero-heading" className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">KASEL DIGITAL SOLUTIONS LTD</p>
          <h1 id="hero-heading">Precision in Motion.</h1>
          <p className="hero__lead">
            We design and build digital products that help businesses work
            better, serve customers and grow with confidence.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Start a project
            </a>
            <a className="button button--secondary" href="#services">
              Explore our services
            </a>
          </div>
        </div>
        <div className="hero__orb">
          <PrecisionOrb />
        </div>
      </section>

      <section aria-labelledby="services-heading" className="section services" id="services">
        <div className="section__header">
          <p className="eyebrow">Services</p>
          <h2 id="services-heading">Practical digital capability, grouped around business outcomes.</h2>
          <p>
            Kasel combines engineering, design, automation and strategy so each
            engagement can move from idea to implementation without losing the
            business context.
          </p>
        </div>

        <div className="capability-list">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.name}>
              <div>
                <p>{capability.services}</p>
                <h3>{capability.name}</h3>
              </div>
              <dl>
                <div>
                  <dt>Problem</dt>
                  <dd>{capability.problem}</dd>
                </div>
                <div>
                  <dt>Client receives</dt>
                  <dd>{capability.deliverables}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="capabilities-heading"
        className="section capability-builds"
        id="capabilities"
      >
        <div className="section__header section__header--split">
          <div>
            <p className="eyebrow">Selected capabilities</p>
            <h2 id="capabilities-heading">What we can build with you.</h2>
          </div>
          <p>
            No publishable case studies were present in the repository, so this
            section avoids fictional client work and focuses on buildable,
            relevant outcomes.
          </p>
        </div>
        <ul className="build-grid">
          {builds.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="about-heading" className="section about" id="about">
        <div className="about__content">
          <p className="eyebrow">About Kasel</p>
          <h2 id="about-heading">Digital products should improve how the business actually works.</h2>
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

      <section aria-labelledby="process-heading" className="section process" id="process">
        <div className="section__header">
          <p className="eyebrow">Process</p>
          <h2 id="process-heading">A clear path from discovery to improvement.</h2>
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

      <ClientLogoCarousel />

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

      <footer className="site-footer">
        <section aria-labelledby="footer-cta-heading" className="footer-cta">
          <div className="footer-cta__inner">
            <div>
              <p className="eyebrow">LET&apos;S BUILD WITH PRECISION</p>
              <h2 id="footer-cta-heading">Have a product to build or a process to improve?</h2>
            </div>
            <div className="footer-cta__content">
              <p>
                Tell us what you&apos;re working on. We&apos;ll help you define
                the right digital solution and the clearest path forward.
              </p>
              <div className="footer-cta__actions">
                <a className="button button--primary" href="#project-enquiry">
                  Start a project
                </a>
                <a className="button button--secondary" href={WHATSAPP_URL} rel="noopener noreferrer" target="_blank">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <svg aria-hidden="true" className="footer-cta__arc" viewBox="0 0 520 220">
              <path d="M22 174C128 24 360 8 498 146" />
            </svg>
          </div>
        </section>

        <div className="footer-main">
          <div className="footer-brand">
            <a aria-label="KASEL Digital Solutions home" href="#top">
              <KaselMark />
            </a>
            <p>
              We design and build digital products that help businesses work
              better, serve customers and grow with confidence.
            </p>
            <span>Precision in Motion</span>
          </div>

          <nav aria-label="Explore footer navigation" className="footer-group">
            <h2>Explore</h2>
            <a href="#services">Services</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>

          <nav aria-label="Services footer navigation" className="footer-group footer-group--services">
            <h2>Services</h2>
            <a href="#services">Web and mobile development</a>
            <a href="#services">UI/UX and brand design</a>
            <a href="#services">AI and workflow automation</a>
            <a href="#services">Cloud, data and analytics</a>
            <a href="#services">Digital strategy</a>
          </nav>

          <address className="footer-group footer-contact">
            <h2>Contact</h2>
            <p>
              <span>Email</span>
              <a href="mailto:hello@kasel.digital">hello@kasel.digital</a>
            </p>
            <p>
              <span>Call us</span>
              <a href="tel:+2347075042166">
                +2347075042166
              </a>
            </p>
            <p>
              <span>Instagram</span>
              <a href="https://www.instagram.com/kasel.digital/" rel="noopener noreferrer" target="_blank">
                @kasel.digital
              </a>
            </p>
          </address>
        </div>

        <div className="footer-legal">
          <small>© {currentYear} KASEL DIGITAL SOLUTIONS LTD. All rights reserved.</small>
        </div>
      </footer>
    </main>
  );
}
