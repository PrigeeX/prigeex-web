"use client";

import React from "react";
import Link from "next/link";
import { appPath } from "@/lib/app-url";
import { Icon } from "./icons";

type NavLink = { href: string; label: string; soon?: boolean };

// These all resolve to the dApp (app.prigeex.com) - the marketing site has
// no routes of its own besides "/".
const LINKS: NavLink[] = [
  { href: "/swap", label: "Swap" },
  { href: "/pool", label: "Liquidity" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/stake", label: "Staking" },
  { href: "/analytics", label: "Analytics" },
  { href: "/perpetuals", label: "Perpetuals", soon: true },
];

const LINK_ICONS: Record<string, React.ReactNode> = {
  "/swap": <Icon.Swap size={16} />,
  "/pool": <Icon.Plus size={16} />,
  "/portfolio": <Icon.Wallet size={16} />,
  "/stake": <Icon.Lock size={16} />,
  "/analytics": <Icon.Chart size={16} />,
  "/perpetuals": <Icon.Chart size={16} />,
};

export const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      {/* Outside-click catcher. Lives outside .navwrap: its transform would
          re-anchor position: fixed descendants. */}
      {menuOpen && <div className="nav-menu-backdrop" onClick={() => setMenuOpen(false)} />}
      <div className="navwrap">
        <nav className="nav-pill" aria-label="Primary">
          <Link className="brand" href="/" aria-label="PrigeeX home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo brand-logo--dark" src="/brand/logo-horizontal.svg" alt="PrigeeX" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-logo brand-logo--light" src="/brand/logo-horizontal-light.svg" alt="" aria-hidden="true" />
          </Link>

          <div className="nav-links">
            {LINKS.map((l) =>
              l.soon ? (
                <span key={l.href} className="link is-soon" aria-disabled>
                  {l.label}
                  <span className="soon-tag">Soon</span>
                </span>
              ) : (
                <a key={l.href} href={appPath(l.href)} className="link">
                  {l.label}
                </a>
              ),
            )}
          </div>

          <a className="cta" href={appPath("/swap")}>
            Launch App
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <button
            className="nav-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <Icon.Close size={16} /> : <Icon.Menu size={18} />}
          </button>
        </nav>

        {menuOpen && (
          <nav className="nav-menu" aria-label="Pages">
            {LINKS.map((l) =>
              l.soon ? (
                <span key={l.href} className="menu-link is-soon" aria-disabled>
                  <span className="menu-link__icon">{LINK_ICONS[l.href]}</span>
                  {l.label}
                  <span className="soon-tag">Soon</span>
                </span>
              ) : (
                <a key={l.href} href={appPath(l.href)} className="menu-link" onClick={() => setMenuOpen(false)}>
                  <span className="menu-link__icon">{LINK_ICONS[l.href]}</span>
                  {l.label}
                </a>
              ),
            )}
          </nav>
        )}
      </div>
    </>
  );
};
