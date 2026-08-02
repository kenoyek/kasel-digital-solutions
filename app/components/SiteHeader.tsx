"use client";

import { useEffect, useState } from "react";
import KaselMark from "./KaselMark";

const links = [
  ["Services", "#services"],
  ["Capabilities", "#capabilities"],
  ["About", "#about"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <a
        aria-label="KASEL Digital Solutions home"
        className="site-header__brand"
        href="#top"
        onClick={() => setOpen(false)}
      >
        <KaselMark />
      </a>

      <button
        aria-controls="primary-navigation"
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="site-header__toggle"
        onClick={() => setOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span />
        <span />
      </button>

      <nav
        aria-label="Primary navigation"
        className={open ? "site-header__nav is-open" : "site-header__nav"}
        id="primary-navigation"
      >
        {links.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <a className="site-header__action" href="#contact">
        Start a project
      </a>
    </header>
  );
}
