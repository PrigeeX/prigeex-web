import { Nav } from "@/components/Nav";
import { Hero } from "./Hero";
import { Manifest } from "./Manifest";
import { FlightPlan } from "./FlightPlan";
import { Engineering } from "./Engineering";
import { Boarding } from "./Boarding";
import { Footer } from "./Footer";
import "./landing.css";

export const Landing = () => (
  <div className="landing-root" id="top">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Nav />
    <main id="main-content">
      <Hero />
      <Manifest />
      <FlightPlan />
      <Engineering />
      <Boarding />
    </main>
    <Footer />
  </div>
);
