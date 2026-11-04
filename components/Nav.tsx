"use client";

import { useEffect, useRef, useState } from "react";
import { DOCS } from "@/lib/docs";

const LINKS = [
  ["#about", "About"],
  ["#flight-plan", "Aviation"],
  ["#ecosystem", "Ecosystem"],
  ["#pgx", "PGX"],
  ["#security", "Security"],
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="site-header__inner">
        <a className="site-brand" href="#top" aria-label="PrigeeX home" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/logo-horizontal.svg" alt="PrigeeX" width="220" height="48" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          {LINKS.map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="docs-link" href={DOCS.root}>Documentation <span aria-hidden="true">↗</span></a>
        <button className="menu-toggle" ref={menuButton} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile">
        {LINKS.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>}
    </header>
  );
};
