import React from "react";
import { Reveal } from "./Reveal";
import { DOCS } from "@/lib/docs";
import { appPath } from "@/lib/app-url";

export const Boarding = () => (
  <section className="boarding" id="boarding">
    <div className="boarding__grid" aria-hidden />
    <div className="container">
      <Reveal as="h2">
        The venue is live
        <br />
        <em>on Arbitrum.</em>
      </Reveal>
      <Reveal as="p">
        PrigeeX is live on Arbitrum One. Connect a wallet, route a trade, provide liquidity, or stake PGX to share in protocol fees.
      </Reveal>
      <Reveal as="div" className="cta-row">
        <a className="btn btn--warm" href={appPath("/swap")}>
          Launch App
          <svg viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a className="btn btn--ghost" href={DOCS.root} target="_blank" rel="noopener noreferrer">
          Read the docs
        </a>
      </Reveal>
    </div>
  </section>
);
