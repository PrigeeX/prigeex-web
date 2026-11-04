import Image from "next/image";
import { DOCS } from "@/lib/docs";

export const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="container hero__layout">
      <div className="hero__copy">
        <p className="section-label">PrigeeX / Liquidity & settlement</p>
        <h1 id="hero-title">A clearer path<br />to <em>settlement.</em></h1>
        <p className="hero__sub">On-chain exchange infrastructure, with a focused direction: settlement between aviation parts suppliers and buyers.</p>
        <div className="actions">
          <a className="landing-button" href="#flight-plan">Explore aviation <span aria-hidden="true">↗</span></a>
          <a className="text-link" href={DOCS.root}>Read the documentation <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figure className="hero__image">
        <Image src="/assets/aviation-poster.jpg" alt="Aircraft above clouds with a trail behind it" fill priority sizes="(max-width: 760px) 100vw, 42vw" />
        <figcaption>Aviation supplier settlement <span>In planning</span></figcaption>
      </figure>
    </div>
    <div className="hero__index container"><span>Exchange infrastructure</span><span>Aviation supplier workflows</span><a href="#about">Explore PrigeeX <span aria-hidden="true">↓</span></a></div>
  </section>
);
