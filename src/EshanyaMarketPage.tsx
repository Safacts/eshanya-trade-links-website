"use client";

import "./eshanya.css";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Globe2, Handshake, MapPin, MessageCircle, PackageCheck, Phone, Send, ShieldCheck, Sparkles, Truck } from "lucide-react";
const serviceCards = [
  { number: "01", icon: Globe2, title: "UPVC windows", text: "Thoughtful window solutions for homes, offices, and spaces that deserve more light and comfort." },
  { number: "02", icon: ShieldCheck, title: "UPVC doors", text: "Strong everyday entry points designed to feel secure, easy to live with, and right for the space." },
  { number: "03", icon: Truck, title: "Project guidance", text: "A direct conversation from first requirement to the next practical step—without catalogue confusion." },
];

const promiseCards = [
  ["01", "A brand with a backbone", "Luftung is the focused UPVC brand from Eshanya Trade Links - built on dependable relationships."],
  ["02", "Comfort you can feel", "Thoughtful windows and doors can change how a room feels: brighter, calmer, and better connected."],
  ["03", "Clarity before commitment", "We begin with your space, your priorities, and the next practical step."],
  ["04", "Made for the long view", "Good installations should continue to look and work right long after the first conversation."],
];

export default function EshanyaMarketPage() {
  const brand = "Luftung";
  const phone = "9655091414";
  const email = "nitish.fce@gmail.com";
  const address = "28, KV Nagar, Villankurichi, Coimbatore-641035";
  const proprietor = "Nitishkrishna";
  const logo = "/luftung-logo.jpg";
  const whatsapp = phone.replace(/\D/g, "");
  const whatsappNumber = whatsapp.length === 10 ? `91${whatsapp}` : whatsapp;
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });
  const [sent, setSent] = useState(false);

  const enquire = (event: FormEvent) => {
    event.preventDefault();
    if (!form.phone || !whatsappNumber) return;
    const message = encodeURIComponent(`Hello ${proprietor}, I visited the Luftung website.\n\nName: ${form.name || "Not provided"}\nPhone: ${form.phone}\nRequirement: ${form.requirement || "I would like to discuss UPVC windows or doors."}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="eshanya-root">
      <div className="eshanya-grain" />
      <header className="eshanya-header">
        <a className="eshanya-brand" href="#top" aria-label={`${brand} home`}>
          {logo ? <img src={logo} alt={`${brand} logo`} /> : <span className="eshanya-mark">ET</span>}
          <span><strong>LUFTUNG</strong><small>UPVC WINDOWS &amp; DOORS</small></span>
        </a>
        <nav className={menuOpen ? "eshanya-nav open" : "eshanya-nav"} aria-label="Main navigation">
          <a href="#approach" onClick={() => setMenuOpen(false)}>The collection</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Why Luftung</a>
          <a href="#promise" onClick={() => setMenuOpen(false)}>The difference</a>
          <a href="#contact" className="eshanya-nav-cta" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowRight size={15} /></a>
        </nav>
        <button className="eshanya-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /></button>
      </header>

      <main id="top">
        <section className="eshanya-hero">
          <div className="eshanya-hero-copy">
            <div className="eshanya-eyebrow"><span /> A focused UPVC brand by Eshanya Trade Links</div>
            <h1>A better frame<br /><em>for everyday living.</em></h1>
            <p className="eshanya-lede">Luftung is Eshanya Trade Links' focused UPVC brand - bringing a clearer, more considered approach to windows, doors, and the spaces they open up.</p>
            <div className="eshanya-actions">
              <a className="eshanya-button primary" href="#contact">Explore the Luftung range <ArrowRight size={17} /></a>
              <a className="eshanya-button quiet" href="#services">Talk to a specialist</a>
            </div>
            <div className="eshanya-proof-row"><div><strong>01</strong><span>Direct project<br />conversation</span></div><div><strong>360 deg</strong><span>UPVC for<br />modern spaces</span></div><div><strong>∞</strong><span>Built for the<br />long view</span></div></div>
          </div>
          <div className="eshanya-network" aria-hidden="true">
            <div className="network-orbit orbit-one" /><div className="network-orbit orbit-two" /><div className="network-orbit orbit-three" />
            <div className="network-core"><span>ET</span><small>TRADE<br />LINKS</small></div>
            <i className="node node-a" /><i className="node node-b" /><i className="node node-c" /><i className="node node-d" />
            <svg viewBox="0 0 600 600" role="presentation"><path d="M80 410 C175 110 420 100 535 280" /><path d="M78 410 C215 510 410 515 535 280" /><path d="M80 410 C225 360 330 155 535 280" /></svg>
            <p>REQUIREMENT<br /><b>-&gt;</b> RELATIONSHIP</p>
          </div>
        </section>

        <section className="eshanya-intro" id="approach"><div className="eshanya-section-label">The brand behind the frame <span>01</span></div><div className="eshanya-intro-grid"><h2>Not just an opening.<br /><em>A change in feeling.</em></h2><div><p>Windows and doors do more than divide inside from outside. They shape light, airflow, privacy, security, and the way a space welcomes you home.</p><p className="muted">Luftung brings that thinking into a straightforward UPVC experience, supported by Eshanya Trade Links in Coimbatore.</p><a className="text-link" href="#contact">Start with your space <ArrowRight size={16} /></a></div></div></section>

        <section className="eshanya-services" id="services"><div className="eshanya-section-label">Designed around your space <span>02</span></div><div className="eshanya-services-head"><h2>The right way<br /><em>through.</em></h2><p>Begin with the outcome you want. We help turn it into a practical UPVC direction for your home, workplace, or project.</p></div><div className="eshanya-service-grid">{serviceCards.map(({ number, icon: Icon, title, text }) => <article key={number}><div className="service-top"><span>{number}</span><Icon size={23} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Discuss ${title}`}>Discuss this <ArrowRight size={15} /></a></article>)}</div></section>

        <section className="eshanya-promise" id="promise"><div className="promise-visual"><div className="promise-stamp"><Sparkles size={17} /><span>OPEN TO<br />BETTER</span><b>EVERY DAY</b></div><div className="promise-lines" /></div><div className="promise-copy"><div className="eshanya-section-label">The Luftung difference <span>03</span></div><h2>Details that<br /><em>stay with you.</em></h2><div className="promise-grid">{promiseCards.map(([number, title, text]) => <div key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>

        <section className="eshanya-contact" id="contact"><div className="contact-copy"><div className="eshanya-section-label">Make an opening <span>04</span></div><h2>Let’s find the<br /><em>right fit.</em></h2><p>Tell us about the space, the project, or the change you have in mind. A Luftung conversation starts with listening.</p><div className="contact-details"><a href={phone ? `tel:${phone}` : undefined}><Phone size={16} /> {phone || "Phone number to be confirmed"}</a><span><MapPin size={16} /> {address}</span><a href={email ? `mailto:${email}` : undefined}><MessageCircle size={16} /> {email || "Email to be confirmed"}</a></div></div><div className="contact-form-wrap"><form onSubmit={enquire}><h3>Start a conversation</h3><label>Your name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" /></label><label>Phone number<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91" /></label><label>What are you looking for?<textarea value={form.requirement} onChange={(e) => setForm({ ...form, requirement: e.target.value })} placeholder="Windows, doors, or a project discussion" rows={4} /></label><button type="submit">Send via WhatsApp <Send size={16} /></button>{sent && <p className="sent-note"><Check size={15} /> WhatsApp opened with your enquiry.</p>}</form></div></section>
      </main>
      <footer className="eshanya-footer"><div><a className="eshanya-brand footer-brand" href="#top"><img src="/luftung-logo.jpg" alt="Luftung logo" /><span><strong>LUFTUNG</strong><small>UPVC WINDOWS &amp; DOORS</small></span></a><p>Your window to the world.</p></div><div><span>Parent brand</span><a href="https://app.vitharn.com/eshanya_trade_links/home">Eshanya Trade Links <ArrowRight size={14} /></a></div><div><span>Based in</span><strong>Coimbatore, India</strong></div></footer>
    </div>
  );
}

