"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import KaselMark from "./KaselMark";

const links = [
  ["Services", "/#services"],
  ["Work", "/work"],
  ["Process", "/#process"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
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
      <Link
        aria-label="KASEL Digital Solutions home"
        className="site-header__brand"
        href="/"
        onClick={() => setOpen(false)}
      >
        <KaselMark />
      </Link>

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
          <Link href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>

      <Link className="site-header__action" href="/#contact">
        Start a project
      </Link>
    </header>
  );
}
