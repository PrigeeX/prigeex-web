const WORKFLOW = ["Purchase order", "Invoice", "Approval", "Payment confirmation", "Transaction record"];

export const FlightPlan = () => (
  <section className="aviation-section" id="flight-plan" aria-labelledby="aviation-title">
    <div className="container">
      <div className="aviation-heading">
        <p className="section-label">Flight plan / Phase 1</p>
        <span className="status-label">Planned direction</span>
      </div>
      <div className="aviation-intro">
        <h2 id="aviation-title">Aviation Settlement<br /><em>Infrastructure</em></h2>
        <div><p>Exploring how aviation parts suppliers, airlines and maintenance organisations can reconcile invoices and confirm payments with a clearer shared record.</p><p className="muted-note">Discovery comes first. The workflow and technical approach will be validated before a pilot is proposed.</p></div>
      </div>
      <div className="aviation-definitions">
        <article><span className="item-number">01</span><h3>Parts suppliers</h3><p>Businesses supplying the components needed to maintain and repair aircraft.</p></article>
        <article><span className="item-number">02</span><h3>What is MRO?</h3><p>Maintenance, repair and overhaul: the work that keeps aircraft and their components serviceable.</p></article>
        <article><span className="item-number">03</span><h3>Settlement & reconciliation</h3><p>Completing a payment and matching it to the right order and invoice.</p></article>
      </div>
      <div className="workflow">
        <p className="section-label">The workflow under review</p>
        <ol>{WORKFLOW.map((step, index) => <li key={step}><span className="workflow__number">0{index + 1}</span><span>{step}</span></li>)}</ol>
      </div>
    </div>
  </section>
);
