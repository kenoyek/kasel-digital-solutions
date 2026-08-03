import Link from "next/link";
import KaselMark from "./KaselMark";
import { WHATSAPP_URL } from "./WhatsAppButton";

const currentYear = new Date().getFullYear();

export default function SiteFooter() {
  return (
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
              <Link className="button button--primary" href="/#project-enquiry">
                Start a project
              </Link>
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
          <Link aria-label="KASEL Digital Solutions home" href="/">
            <KaselMark />
          </Link>
          <p>
            We design and build digital products that help businesses work
            better, serve customers and grow with confidence.
          </p>
          <span>Precision in Motion</span>
        </div>

        <nav aria-label="Explore footer navigation" className="footer-group">
          <h2>Explore</h2>
          <Link href="/#services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <nav aria-label="Services footer navigation" className="footer-group footer-group--services">
          <h2>Services</h2>
          <Link href="/#services">Web and mobile development</Link>
          <Link href="/#services">UI/UX and brand design</Link>
          <Link href="/#services">AI and workflow automation</Link>
          <Link href="/#services">Cloud, data and analytics</Link>
          <Link href="/#services">Digital strategy</Link>
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
  );
}
