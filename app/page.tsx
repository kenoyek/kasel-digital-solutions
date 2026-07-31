import Image from "next/image";
import { professionalServiceJsonLd, websiteJsonLd } from "./seo";

const services = [
  [
    "01",
    "Web & Mobile Development",
    "Websites, React and Node.js applications, Flutter mobile apps and digital platforms built to perform.",
  ],
  [
    "02",
    "UI/UX & Brand Design",
    "Product experiences, visual identities and design systems that are clear, useful and memorable.",
  ],
  [
    "03",
    "Video & Digital Content",
    "Brand videos, motion graphics and digital campaigns designed to capture attention and inspire action.",
  ],
  [
    "04",
    "Digital Transformation",
    "Automation, platform modernisation, AI integration and technical consulting that unlock growth.",
  ],
];

const steps = [
  ["01", "Discover", "We clarify the opportunity, audience and goal."],
  ["02", "Define", "We shape a focused strategy and delivery plan."],
  ["03", "Design & Build", "We create, test and refine the right solution."],
  ["04", "Launch & Grow", "We deploy, measure and support what comes next."],
];

const jsonLd = [websiteJsonLd, professionalServiceJsonLd];

const Mark = () => (
  <span className="mark">
    <b>KASEL</b>
    <small>Digital Solutions Ltd</small>
  </span>
);

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header>
        <a aria-label="KASEL Digital Solutions home" href="#top">
          <Mark />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="talk" href="#contact">
          Let&apos;s talk ↗
        </a>
      </header>

      <section className="hero" id="top">
        <div className="grid" />
        <div className="copy">
          <p className="tag">— Strategy · Design · Technology</p>
          <h1>
            Build smarter.
            <br />
            Move faster.
            <br />
            <em>Stand out.</em>
          </h1>
          <p>
            We create high-performing websites and mobile apps, intuitive brand
            experiences, compelling digital content, and practical technology
            solutions that help businesses grow.
          </p>
          <div className="buttons">
            <a className="btn green" href="#contact">
              Book a consultation ↗
            </a>
            <a className="btn outline" href="#services">
              Our capabilities ↓
            </a>
          </div>
        </div>
        <div className="art">
          <div />
          <Image
            alt="KASEL Digital Solutions orb logo"
            height={650}
            priority
            src="/kasel-logo.png"
            width={650}
          />
        </div>
      </section>

      <section className="section services" id="services">
        <div className="intro">
          <p className="tag">— What we do</p>
          <h2>
            End-to-end digital expertise.
            <br />
            <em>One focused partner.</em>
          </h2>
          <p>
            From the first idea to launch and beyond, we combine strategy,
            creativity and engineering to deliver work that performs.
          </p>
        </div>
        <div className="cards">
          {services.map((service) => (
            <article key={service[0]}>
              <div>
                <span>{service[0]}</span>
                <i>↗</i>
              </div>
              <h3>{service[1]}</h3>
              <p>{service[2]}</p>
              <a href="#contact">
                Discuss {service[1]} <b>→</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div>
          <p className="tag">— About Kasel</p>
          <h2>
            Technology should move your business <em>forward.</em>
          </h2>
          <p className="lead">
            Kasel Digital Solutions Ltd is a multidisciplinary digital company
            helping ambitious organisations turn ideas into useful, beautiful
            and scalable solutions.
          </p>
          <p>
            We work at the intersection of business strategy, technology and
            creative communication. That means fewer hand-offs, clearer thinking
            and solutions designed around the full picture.
          </p>
          <a className="link" href="#contact">
            Build something with us ↗
          </a>
        </div>
        <aside>
          <small>OUR STANDARD</small>
          <blockquote>
            Clear thinking.
            <br />
            Excellent execution.
            <br />
            <em>Measurable impact.</em>
          </blockquote>
          {[
            ["01", "Clarity first"],
            ["02", "Built with purpose"],
            ["03", "Ready to grow"],
          ].map((value) => (
            <p className="value" key={value[0]}>
              <span>{value[0]}</span>
              <b>{value[1]}</b>
            </p>
          ))}
        </aside>
      </section>

      <section className="section process" id="process">
        <p className="tag">— How we work</p>
        <h2>
          A clear path from
          <br />
          <em>ambition to impact.</em>
        </h2>
        <div className="steps">
          {steps.map((step) => (
            <article key={step[0]}>
              <span>{step[0]}</span>
              <h3>{step[1]}</h3>
              <p>{step[2]}</p>
              <i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="tag">— Start a conversation</p>
        <h2>
          Have an idea worth
          <br />
          <em>building?</em>
        </h2>
        <p>
          Tell us what you are working on. We&apos;ll help you find the clearest
          path from idea to launch.
        </p>
        <a
          className="btn green"
          href="mailto:hello@kasel.digital?subject=Project%20Enquiry"
        >
          Start your project ↗
        </a>
        <small>
          Prefer email? <a href="mailto:hello@kasel.digital">hello@kasel.digital</a>{" "}
          · Call <a href="tel:+2347075042166">+234 707 504 2166</a>
        </small>
      </section>

      <footer>
        <Mark />
        <p>Digital products, experiences and content built to move businesses forward.</p>
        <div>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <small>© 2026 Kasel Digital Solutions Ltd. All rights reserved.</small>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
