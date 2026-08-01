import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const signals = [
  "Your category is crowded, but your point of view is hard to find.",
  "Buyers compare you with names that appear more established than you are.",
  "Your team is producing insight, yet it is not compounding into trust.",
];

const steps = [
  ["01", "Map the gap", "We look at how your company is understood today: proof, narrative, and the places buyers look for confidence."],
  ["02", "Prioritize the opportunity", "You get a grounded view of which authority signals are worth building next—and which can wait."],
  ["03", "Choose your next move", "Leave with a clear conversation about fit, scope, and the right authority-building path for your team."],
];

function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="AuthorityScale AI home">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>AuthorityScale<span className="brand-ai"> AI</span></span>
        </a>
        <div className="nav-links">
          <a href="#approach">Approach</a>
          <a href="#fit">Who it’s for</a>
          <a href="#assessment" className="nav-cta">Request an assessment <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Authority intelligence for ambitious teams</p>
          <h1>Be the name<br /><em>buyers trust.</em></h1>
          <p className="hero-lede">AuthorityScale helps companies see where credibility is being won—and where opportunity is being missed.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#assessment">Explore your authority gap <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#approach">How it works <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-note">A thoughtful first step, not a sales pitch.</p>
        </div>
        <div className="hero-art" aria-label="Abstract concentric rings representing compounding authority" role="img">
          <div className="orbit orbit-outer"><div className="orbit orbit-mid"><div className="orbit orbit-inner"><div className="core">A<span>S</span></div></div></div></div>
          <span className="orbit-label label-top">signal</span><span className="orbit-label label-right">proof</span><span className="orbit-label label-bottom">trust</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Common authority gaps">
        <div className="section-wrap signal-grid">
          <p className="signal-intro">The quiet cost<br /><strong>of being overlooked.</strong></p>
          {signals.map((signal, i) => <div className="signal" key={signal}><span>0{i + 1}</span><p>{signal}</p></div>)}
        </div>
      </section>

      <section id="approach" className="section-wrap approach section-padding">
        <div className="section-kicker">01 <span>Our approach</span></div>
        <div className="approach-grid"><h2>Trust isn’t a tagline.<br /><em>It’s infrastructure.</em></h2><div><p className="body-large">The strongest companies don’t leave credibility to chance. They build a visible, coherent body of proof that makes the right decision feel easier.</p><p className="body-copy">Trust-as-a-Service™ is our way of helping you do that—with a clear-eyed assessment first, then the authority-building work that fits your stage and ambition.</p></div></div>
        <div className="steps-grid">{steps.map(([num, title, copy]) => <article className="step" key={num}><span className="step-number">{num}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section id="fit" className="fit-section"><div className="section-wrap fit-grid"><div><div className="section-kicker light">02 <span>Built for the next stage</span></div><h2>For teams with<br /><em>something to say.</em></h2><p className="light-copy">AuthorityScale is for companies whose expertise is real—but whose market presence hasn’t caught up yet.</p></div><ul className="fit-list"><li><span>↗</span><div><strong>Category creators</strong><p>Making a market, not just competing in one.</p></div></li><li><span>↗</span><div><strong>Expert-led firms</strong><p>Turning hard-won knowledge into a durable advantage.</p></div></li><li><span>↗</span><div><strong>Growth-stage teams</strong><p>Ready for reputation to support the next chapter.</p></div></li></ul></div></section>

      <section id="assessment" className="assessment section-wrap section-padding"><div className="assessment-card"><div className="section-kicker">03 <span>The first conversation</span></div><h2>Find your <em>authority opportunity.</em></h2><p>In a focused Authority Opportunity Assessment, we’ll look at your current signals, your growth context, and where a stronger authority system could make a difference.</p><div className="qualify"><div><span className="qualify-label">A good fit if</span><p>You have a clear offer, meaningful expertise, and a genuine desire to be more legible to the people you want to reach.</p></div><div><span className="qualify-label">What to expect</span><p>A candid working conversation—not a commitment, not a pre-filled funnel, and no pressure to proceed.</p></div></div><a className="button button-dark" href="mailto:hello@authorityscale.ai?subject=Authority%20Opportunity%20Assessment">Draft an assessment email <span aria-hidden="true">↗</span></a><p className="contact-note">This opens your email client with a draft. Nothing is submitted or stored on this site.</p></div></section>

      <footer className="footer section-wrap"><a href="#top" className="brand"><span className="brand-mark" aria-hidden="true"><span /></span><span>AuthorityScale<span className="brand-ai"> AI</span></span></a><p>Trust, made visible.</p><span>© {new Date().getFullYear()} AuthorityScale AI</span></footer>
    </main>
  );
}
