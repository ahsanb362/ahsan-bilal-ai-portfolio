import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  CloudCog,
  Database,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  type: string;
  summary: string;
  tags: string[];
  tone: string;
  problem: string;
  thinking: string;
  architecture: string;
  outcome: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Enterprise Financial / IR & ESG AI Platform",
    type: "Enterprise intelligence",
    summary: "Turning fragmented disclosures, filings, and sustainability data into answers that investment teams can trust.",
    tags: ["RAG", "Evaluation", "Azure AI"],
    tone: "sage",
    problem: "Analysts were losing hours to repetitive search across long, inconsistent documents.",
    thinking: "Treat retrieval, evidence, and confidence as first-class product experiences — not invisible plumbing.",
    architecture: "Document ingestion → structure-aware chunking → hybrid retrieval → grounded generation → evaluation harness.",
    outcome: "A production-minded research surface designed around traceability and decision velocity.",
  },
  {
    number: "02",
    title: "Insurance AI Assistant",
    type: "Applied AI product",
    summary: "A grounded assistant that helps teams navigate policy language without hiding the fine print.",
    tags: ["Agents", "Guardrails", "NLP"],
    tone: "ink",
    problem: "Customer and operations teams needed faster answers while keeping policy interpretation defensible.",
    thinking: "Start with the domain's failure modes: ambiguity, outdated sources, and answers that sound right but are not.",
    architecture: "Intent routing → policy-aware retrieval → tool calls → citation layer → human escalation.",
    outcome: "A safer conversational workflow with a clear boundary between assistance and decision-making.",
  },
  {
    number: "03",
    title: "Enterprise AI Recruitment System",
    type: "Workflow automation",
    summary: "Bringing structure to the noisy middle of hiring: matching, screening, and candidate context.",
    tags: ["Embeddings", "FastAPI", "Product"],
    tone: "lavender",
    problem: "Recruiters were making high-stakes decisions across disconnected CVs, notes, and role requirements.",
    thinking: "Design for recruiter judgment — augment pattern recognition, never replace the human context layer.",
    architecture: "Profile extraction → skill ontology → semantic matching → recruiter workspace → feedback loop.",
    outcome: "A workflow that makes signal visible and lets teams spend more time on people.",
  },
  {
    number: "04",
    title: "Plant Disease Computer Vision System",
    type: "Computer vision",
    summary: "Helping growers spot crop stress earlier through practical, field-aware vision models.",
    tags: ["CV", "Deep Learning", "MLOps"],
    tone: "lime",
    problem: "Image quality, lighting, and field conditions made textbook accuracy meaningless in practice.",
    thinking: "Model the environment as carefully as the disease: capture, annotation, drift, and feedback all matter.",
    architecture: "Image capture → augmentation → transfer learning → confidence thresholds → field feedback.",
    outcome: "A vision workflow grounded in deployment reality instead of benchmark theatre.",
  },
  {
    number: "05",
    title: "Enterprise Security Analytics",
    type: "Systems + analytics",
    summary: "Connecting operational signals into a more legible picture of risk, anomalies, and response.",
    tags: ["Anomaly detection", "Data", "Security"],
    tone: "sand",
    problem: "Security signals were abundant, but the path from detection to understanding was fragmented.",
    thinking: "Reduce cognitive load first: coherent entities, explainable signals, and workflows people can actually follow.",
    architecture: "Event streams → feature layer → detection models → analyst views → response playbooks.",
    outcome: "A systems perspective on security that makes the next action clearer.",
  },
  {
    number: "06",
    title: "Hireflow — AI Job Search & CV Copilot",
    type: "Independent product",
    summary: "A practical copilot for making job search less repetitive and more intentional.",
    tags: ["LLMs", "UX", "Automation"],
    tone: "peach",
    problem: "Good candidates were spending too much effort translating experience into every new application.",
    thinking: "Respect the candidate's voice while using automation to remove the parts that feel like admin.",
    architecture: "Profile model → role analysis → tailored narrative → application tracker → learning loop.",
    outcome: "A product experiment at the intersection of career context, language, and action.",
  },
  {
    number: "07",
    title: "StartupMate — Multi-Agent Startup Workflow",
    type: "Builder / entrepreneur",
    summary: "A multi-agent workspace for moving from fuzzy idea to a sharper first operating plan.",
    tags: ["Multi-agent", "Systems", "Strategy"],
    tone: "blue",
    problem: "Early founders jump between research, positioning, planning, and execution with no shared thread.",
    thinking: "Make each agent accountable to an artifact, a decision, and the context that came before it.",
    architecture: "Brief → specialist agents → shared memory → critique pass → founder-ready operating brief.",
    outcome: "A thinking tool for turning momentum into a sequence of deliberate bets.",
  },
];

const skillGroups = [
  {
    label: "01 / AI + ML",
    icon: BrainCircuit,
    items: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "Fine-tuning", "LoRA / QLoRA", "RAG", "Agentic AI", "Evaluation", "Guardrails"],
  },
  {
    label: "02 / Data",
    icon: Database,
    items: ["Python", "Pandas", "NumPy", "SciPy", "SQL", "PostgreSQL", "ETL", "Feature Engineering", "Statistics", "Airflow"],
  },
  {
    label: "03 / Engineering",
    icon: Layers3,
    items: ["FastAPI", "APIs", "Docker", "CI/CD", "Testing", "System Design", "Product Thinking"],
  },
  {
    label: "04 / Cloud + AI Infra",
    icon: CloudCog,
    items: ["Azure", "Azure AI Foundry", "Azure ML", "Azure Cognitive Search", "Blob Storage", "Private / On-Prem AI"],
  },
];

const navItems = [
  ["Work", "work"],
  ["Thinking", "thinking"],
  ["Journey", "journey"],
  ["Writing", "writing"],
  ["About", "about"],
  ["Contact", "contact"],
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Ahsan Bilal Khan home">
          <span className="wordmark-mark">ABK</span>
          <span className="wordmark-name">Ahsan Bilal Khan</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>
        <a className="nav-availability" href="#contact"><span /> Available for select builds</a>
        <button className="mobile-menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {mobileOpen && (
        <div className="mobile-menu">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setMobileOpen(false)}>{label}<ArrowUpRight size={16} /></a>
          ))}
        </div>
      )}

      <section className="hero" id="top">
        <div className="hero-grid-line hero-grid-line--one" />
        <div className="hero-grid-line hero-grid-line--two" />
        <div className="container hero-inner">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="eyebrow-dot" /> Senior AI Engineer <span className="eyebrow-divider">/</span> Systems Builder</p>
            <h1>I build AI systems from the <em>first conversation</em> to production.</h1>
            <p className="hero-intro">The work sits somewhere between machine learning, product thinking, and the unglamorous details that make systems earn trust.</p>
            <div className="hero-actions">
              <a className="button button--dark" href="#work">Explore the work <ArrowDownRight size={16} /></a>
              <a className="text-link" href="#about">A little more about me <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="hero-visual reveal-up reveal-delay-2">
            <div className="hero-orbit hero-orbit--outer" />
            <div className="hero-orbit hero-orbit--inner" />
            <div className="portrait-card">
              <div className="portrait-card-top"><span>01 / portrait</span><span>ISB · PK</span></div>
              <div className="portrait-placeholder portrait-placeholder--photo">
                <img src="/manus-storage/ahsan-corporate-headshot_f123746c.png" alt="Ahsan Bilal Khan, Senior AI Engineer" />
                <span className="portrait-note">Senior AI Engineer<br /><small>AI systems, thoughtfully built</small></span>
              </div>
              <div className="portrait-card-bottom"><span>Builder, researcher<br />and product thinker</span><ArrowUpRight size={18} /></div>
            </div>
            <div className="hero-float-card hero-float-card--top"><Sparkles size={15} /><span>from ambiguity</span></div>
            <div className="hero-float-card hero-float-card--bottom"><span>to systems that hold</span><Check size={15} /></div>
          </div>
        </div>
        <div className="hero-foot container">
          <span>Scroll to read the story</span>
          <div className="hero-foot-line"><span /></div>
          <span>01 — 07</span>
        </div>
      </section>

      <section className="statement-strip" aria-label="Core capabilities">
        <div className="marquee-track">
          {["AI SYSTEMS", "EVALUATION", "DATA + MLOPS", "PRODUCT THINKING", "ARCHITECTURE", "AI SYSTEMS", "EVALUATION", "DATA + MLOPS", "PRODUCT THINKING", "ARCHITECTURE"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<b>✳</b></span>
          ))}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="section-kicker"><span>About me</span><span>02 / 07</span></div>
          <div className="about-content">
            <h2>Beyond the demo. <em>Into the system.</em></h2>
            <div className="about-columns">
              <p>I&apos;m an AI/ML engineer who grew from machine learning, computer vision, statistics, and data engineering into modern enterprise AI.</p>
              <p>That means I enjoy the whole arc: understanding a messy problem, naming the constraints, designing the architecture, building the product, evaluating what actually works, and getting it ready for production.</p>
            </div>
            <div className="capability-notes">
              <div><span>01</span><strong>See the whole board</strong><p>Business context, user behavior, data, infrastructure, risk.</p></div>
              <div><span>02</span><strong>Build the connective tissue</strong><p>Models are only useful when software and workflows make them real.</p></div>
              <div><span>03</span><strong>Stay curious after launch</strong><p>Measure, learn, secure, iterate. The first version is a beginning.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-heading-row">
            <div className="section-kicker"><span>Selected work</span><span>03 / 07</span></div>
            <p className="section-note">A few systems, products, and experiments — told through the decisions behind them.</p>
          </div>
          <div className="work-feature">
            <div className="project-visual project-visual--sage">
              <div className="visual-grid" />
              <div className="visual-signal visual-signal--one" />
              <div className="visual-signal visual-signal--two" />
              <div className="visual-annotation"><span>evidence</span><span>confidence</span><span>context</span></div>
              <div className="visual-window"><div className="window-dots"><i /><i /><i /></div><div className="window-row"><span>Q3 sustainability report</span><b>0.94</b></div><div className="window-bar"><span /></div><div className="window-row window-row--muted"><span>Source-backed answer</span><b>verified</b></div></div>
              <span className="visual-index">01</span>
            </div>
            <div className="feature-copy">
              <p className="project-type">Enterprise intelligence <span>↗</span></p>
              <h3>Enterprise Financial / IR &amp; ESG AI Platform</h3>
              <p>Making long-form corporate information more useful — with retrieval, evidence, and trust designed into the experience.</p>
              <div className="project-tags">{projects[0].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <button className="case-link" onClick={() => setSelectedProject(projects[0])}>Read the case study <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="project-list">
            {projects.slice(1).map((project) => (
              <button className={`project-row project-row--${project.tone}`} key={project.number} onClick={() => setSelectedProject(project)}>
                <span className="project-number">{project.number}</span>
                <span className="project-row-main"><small>{project.type}</small><strong>{project.title}</strong><span>{project.summary}</span></span>
                <span className="project-row-tags">{project.tags.map(tag => <i key={tag}>{tag}</i>)}</span>
                <span className="project-row-arrow"><ArrowUpRight size={18} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="thinking-section" id="thinking">
        <div className="container thinking-grid">
          <div className="thinking-intro">
            <div className="section-kicker section-kicker--light"><span>Thinking in systems</span><span>04 / 07</span></div>
            <h2>Good AI work is less about the <em>flash</em> and more about the frame.</h2>
            <p>The hard part is rarely making something talk. It is deciding what it should know, what it should never guess, and how a team can live with it six months later.</p>
            <a href="#contact" className="button button--light">Start a conversation <ArrowRight size={16} /></a>
          </div>
          <div className="thinking-steps">
            {["Find the real problem", "Name the constraints", "Build for the feedback loop", "Make trust visible"].map((step, index) => (
              <div className="thinking-step" key={step}><span>0{index + 1}</span><strong>{step}</strong><Plus size={17} /></div>
            ))}
            <div className="system-diagram"><span>question</span><i /><span>context</span><i /><span>system</span><i /><span>learning</span></div>
          </div>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="container journey-grid">
          <div>
            <div className="section-kicker"><span>The journey</span><span>05 / 07</span></div>
            <h2>From foundations<br /><em>to frontier.</em></h2>
            <p className="journey-lead">The thread through the work has stayed consistent: get close to the problem, then build enough of the system to make a difference.</p>
            <div className="photo-stack">
              <div className="journey-photo journey-photo--main journey-photo--certificate"><img src="/manus-storage/ahsan-startup-pitch_df425231.jpeg" alt="Ahsan presenting his startup pitch to evaluators and teammates" /><div className="photo-overlay"><span>Builder story</span><small>Startup pitch / AGfow</small></div></div>
              <div className="journey-photo journey-photo--small journey-photo--certificate"><img src="/manus-storage/ahsan-certificate-award_13983691.jpeg" alt="Ahsan receiving a certificate of appreciation from his university" /><div className="photo-overlay"><span>University distinction</span><small>Certificate of appreciation</small></div></div>
              <div className="journey-photo journey-photo--graduation"><img src="/manus-storage/ahsan-graduation_81b43b75.jpeg" alt="Ahsan in his graduation ceremony attire" /><div className="photo-overlay"><span>Career journey</span><small>Graduation day</small></div></div>
              <span className="photo-caption">Personal archive / milestones</span>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-item timeline-item--active"><span className="timeline-year">Now</span><div><h3>Enterprise AI + systems</h3><p>Designing production-minded AI across retrieval, agents, evaluation, data, cloud, and software.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">Next</span><div><h3>Deeper research, clearer products</h3><p>Exploring explainability, system design, and the practical edge of AI/ML research.</p></div></div>
            <div className="timeline-item"><span className="timeline-year">Before</span><div><h3>ML, CV, statistics, data</h3><p>Learning to respect the data-generating process, the model, and the world it has to work in.</p></div></div>
            <div className="journey-certificate"><div className="certificate-mark">A<span>+</span></div><div><small>University certificate / distinction</small><strong>Make the fundamentals<br />carry the ambition.</strong></div><ArrowUpRight size={18} /></div>
          </div>
        </div>
      </section>

      <section className="now-section" id="writing">
        <div className="container now-grid">
          <div className="section-kicker"><span>Now</span><span>06 / 07</span></div>
          <div className="now-content"><p className="now-label">A living shortlist</p><h2>What I&apos;m <em>thinking about</em> lately.</h2><div className="now-list">{["System design that makes AI legible", "LLM evaluation beyond a single score", "Enterprise AI architecture with a long memory", "Explainable AI for people who need to act", "Deeper AI/ML research, with both feet on the ground"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><ChevronRight size={16} /></div>)}</div><a className="text-link text-link--dark" href="#contact">Have a question about one of these? <ArrowRight size={15} /></a></div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <div className="section-heading-row"><div className="section-kicker"><span>Working vocabulary</span><span>Toolkit</span></div><p className="section-note">Tools are useful. The judgement about when to use them is the craft.</p></div>
          <div className="skills-grid">{skillGroups.map(({ label, icon: Icon, items }) => <div className="skill-card" key={label}><div className="skill-card-heading"><Icon size={20} /><span>{label}</span></div><div className="skill-pills">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container testimonial-grid">
          <div className="section-kicker"><span>In good company</span><span>Coming soon</span></div>
          <div className="testimonial-copy"><div className="quote-mark">“</div><h2>The best work leaves people with <em>more clarity</em> than they started with.</h2><div className="testimonial-placeholder"><Search size={16} /><span>Real testimonials will live here.<br /><small>Placeholder until the right words arrive.</small></span></div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy"><div className="section-kicker section-kicker--light"><span>Let&apos;s talk</span><span>07 / 07</span></div><h2>Have a hard AI problem? <em>Let&apos;s talk.</em></h2><p>If the brief is fuzzy, the constraints are real, or the first idea needs a thoughtful sparring partner — send it over.</p><div className="contact-details"><a href="mailto:hello@ahsanbilalkhan.com"><Mail size={16} /> hello@ahsanbilalkhan.com</a><span><MapPin size={16} /> Islamabad, Pakistan <i>·</i> working globally</span></div></div>
          <form className="contact-form" onSubmit={handleSubmit}>{submitted ? <div className="form-success"><div className="success-icon"><Check size={22} /></div><h3>Message received.</h3><p>This is a polished front-end placeholder for now. Connect the form endpoint when you&apos;re ready to make it live.</p><button type="button" className="button button--light" onClick={() => setSubmitted(false)}>Send another <ArrowRight size={16} /></button></div> : <><label><span>Your name</span><input required name="name" placeholder="A curious human" /></label><label><span>Email</span><input required type="email" name="email" placeholder="you@company.com" /></label><label><span>What are you working on?</span><textarea required name="challenge" placeholder="A few lines about the problem, the ambition, or the mess..." rows={4} /></label><button type="submit" className="button button--lime">Send the brief <ArrowUpRight size={17} /></button><small className="form-note">No pitch deck required. Context beats polish.</small></>}</form>
        </div>
      </section>

      <footer className="site-footer"><div className="container footer-top"><a className="wordmark wordmark--footer" href="#top"><span className="wordmark-mark">ABK</span><span className="wordmark-name">Ahsan Bilal Khan</span></a><p>AI systems, thoughtfully built.</p><div className="footer-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <ExternalLink size={13} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Ahsan Bilal Khan</span><span>Built with curiosity <Sparkles size={13} /></span><a href="#top">Back to top <ArrowUpRight size={13} /></a></div></footer>

      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close case study"><X size={19} /></button><p className="project-type">{selectedProject.number} / {selectedProject.type}</p><h2 id="case-title">{selectedProject.title}</h2><p className="modal-summary">{selectedProject.summary}</p><div className="case-grid"><div><small>Problem</small><p>{selectedProject.problem}</p></div><div><small>Thinking</small><p>{selectedProject.thinking}</p></div><div><small>Architecture</small><p>{selectedProject.architecture}</p></div><div><small>Outcome</small><p>{selectedProject.outcome}</p></div></div><div className="project-tags">{selectedProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></div>}
    </main>
  );
}
