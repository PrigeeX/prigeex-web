import React from "react";
import { DOCS } from "@/lib/docs";
import { appPath } from "@/lib/app-url";

// PGX token on Arbitrum One (release 1.0.0).
const PGX_EXPLORER_URL = "https://arbiscan.io/token/0xccaCF9B9Ad6522B96FbE9a7f8EEaEAeDafC7C45c";

export const Footer = () => (
  <footer className="foot">
    <div className="foot__inner">
      <div className="foot__grid">
        <div className="foot__brand">
          <div className="mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="foot-logo" src="/brand/logo-horizontal.svg" alt="PrigeeX" />
          </div>
          <p>An institutional venue for on-chain markets. Engineered on Arbitrum.</p>
        </div>
        <div className="foot__col">
          <h4>Protocol</h4>
          <ul>
            <li><a href={appPath("/swap")}>Swap</a></li>
            <li><a href={appPath("/pool")}>Liquidity</a></li>
            <li><a href={appPath("/stake")}>Staking</a></li>
          </ul>
        </div>
        <div className="foot__col">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href={DOCS.root} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </li>
            <li>
              <a href={DOCS.reference.contracts} target="_blank" rel="noopener noreferrer">
                Contracts
              </a>
            </li>
            <li>
              <a href={PGX_EXPLORER_URL} target="_blank" rel="noopener noreferrer">
                PGX on Arbiscan
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot__bottom">
        <div className="L">
          <span>PRIGEEX</span>
          <span className="sep">·</span>
          <span>© 2026</span>
        </div>
        <div className="R">
          <span>ARBITRUM</span>
        </div>
      </div>
    </div>
  </footer>
);
