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

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.15-2.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppMiniIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32">
      <path
        d="M16.04 2.67c-7.36 0-13.35 5.98-13.35 13.34 0 2.35.62 4.65 1.79 6.67l-1.9 6.65 6.82-1.79a13.3 13.3 0 0 0 6.64 1.69h.01c7.36 0 13.35-5.98 13.35-13.34 0-3.56-1.39-6.91-3.91-9.43a13.25 13.25 0 0 0-9.45-3.79Zm0 24.3h-.01a11.08 11.08 0 0 1-5.65-1.55l-.41-.24-4.05 1.06L7 22.29l-.27-.41a11.06 11.06 0 0 1-1.69-5.87c0-6.12 4.98-11.1 11.11-11.1 2.97 0 5.75 1.16 7.85 3.25a11.02 11.02 0 0 1 3.25 7.84c0 6.12-4.98 11.1-11.11 11.1Zm6.09-8.32c-.33-.17-1.98-.98-2.29-1.09-.31-.11-.53-.17-.76.17-.22.33-.87 1.09-1.07 1.31-.2.22-.39.25-.72.08-.33-.17-1.41-.52-2.68-1.65-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.56.11-.22.06-.42-.03-.58-.08-.17-.76-1.84-1.04-2.52-.27-.66-.55-.57-.76-.58h-.65c-.22 0-.58.08-.89.42-.31.33-1.17 1.14-1.17 2.79s1.2 3.24 1.37 3.46c.17.22 2.36 3.6 5.71 5.05.8.34 1.42.55 1.9.7.8.25 1.53.22 2.11.13.64-.1 1.98-.81 2.26-1.59.28-.78.28-1.45.2-1.59-.08-.14-.31-.22-.64-.39Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
          <div className="footer-legal__links">
            <a
              aria-label="Visit Kasel Digital Solutions on Instagram"
              className="footer-social"
              href="https://www.instagram.com/kasel.digital/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              aria-label="Chat with Kasel Digital Solutions on WhatsApp"
              className="footer-social"
              href={WHATSAPP_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppMiniIcon />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
