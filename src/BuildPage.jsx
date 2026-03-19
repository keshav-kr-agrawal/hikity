import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';
import './BuildPage.css';

const BuildPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [visibleSections, setVisibleSections] = useState({});
    const sectionsRef = useRef([]);

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll reveal observer
    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.15 }
        );

        const currentRefs = sectionsRef.current;
        currentRefs.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            currentRefs.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    const features = [
        {
            num: "01",
            title: "Identity & Branding",
            desc: "A distinct, premium brand system engineered to position you as an industry leader from day one."
        },
        {
            num: "02",
            title: "Web & Mobile Ecosystems",
            desc: "Custom-architected applications built for scale, speed, and a flawless user experience."
        },
        {
            num: "03",
            title: "Autonomous AI Agents",
            desc: "Custom-trained intelligence to automate your operations and scale your team without the overhead."
        },
        {
            num: "04",
            title: "Global E-Commerce",
            desc: "Frictionless checkout flows, multi-currency support, and international infrastructure for worldly scale."
        },
        {
            num: "05",
            title: "High-ROAS Ad Systems",
            desc: "Integrated tracking and pixel architecture designed to acquire high-intent users efficiently."
        },
        {
            num: "06",
            title: "SEO & Content Authority",
            desc: "Strategic search engine dominance ensuring your product is found by those actively looking for it."
        }
    ];

    const processSteps = [
        {
            num: "1",
            title: "The Vision",
            desc: "We sit down (virtually or in-person) to dissect your idea, validate the market potential, and map out the entire technical scope."
        },
        {
            num: "2",
            title: "The Architecture",
            desc: "Our engineers and designers construct the blueprints. We define the user journeys, wireframes, and the database infrastructure."
        },
        {
            num: "3",
            title: "The Build",
            desc: "We execute. From front-end aesthetics to back-end logic and AI integrations, we build your product to enterprise standards."
        },
        {
            num: "4",
            title: "The Empire",
            desc: "Launch day. We deploy the systems, initialize the marketing pipelines, and hand you the keys to your new digital empire."
        }
    ];

    return (
        <div className="build-page">
            {/* ── NAVIGATION ── */}
            <nav className={`b-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="b-nav-logo">
                    <div className="b-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY</span>
                </Link>
                <div className="b-nav-links">
                    <Link to="/" className="b-nav-link">Home</Link>
                    <a href="/#contact" className="b-nav-cta">Pitch Us</a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="b-hero">
                <div className="b-hero-bg" />
                <div className="b-hero-content">
                    <span className="b-hero-tag">A HIKITY PARTNERSHIP</span>
                    <h1 className="b-hero-title">
                        You Have The Vision.<br />
                        <span className="b-hero-title-accent">We Build The Empire.</span>
                    </h1>
                    <p className="b-hero-subtitle">
                        Exclusive to innovators, founders, and visionaries. You bring the idea and the drive; we provide the elite engineering, design, and growth systems to bring it to life.
                    </p>
                    <div className="b-hero-actions">
                        <a href="/#contact" className="b-btn-primary">
                            Pitch Your Product
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </header>

            {/* ── PARTNERSHIP MODEL ── */}
            <section
                id="partnership"
                className={`b-section ${visibleSections['partnership'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="b-container">
                    <div className="b-section-header">
                        <span className="b-section-tag">THE AGREEMENT</span>
                        <h2 className="b-section-title">How We Partner</h2>
                        <p className="b-section-subtitle">
                            We don't just act as an agency; we act as your technical co-founder. We offer two distinct pathways to turn your concept into reality.
                        </p>
                    </div>

                    <div className="b-model-grid">
                        <div className="b-model-card">
                            <div className="b-model-icon">C</div>
                            <h3 className="b-model-title">The Capital Model</h3>
                            <p className="b-model-desc">
                                A straightforward, premium agency engagement. You hire us to architect and build your product. You retain 100% ownership from day one.
                            </p>
                            <ul className="b-model-list">
                                <li>Direct fee-for-service arrangement</li>
                                <li>Full intellectual property ownership</li>
                                <li>Dedicated engineering and design team</li>
                                <li>Post-launch support and maintenance plans</li>
                            </ul>
                        </div>

                        <div className="b-model-card">
                            <div className="b-model-icon">E</div>
                            <h3 className="b-model-title">The Equity Model</h3>
                            <p className="b-model-desc">
                                We invest our expertise in exchange for equity via our parent company, <strong>Hikat</strong>. Ideal for highly scalable, tech-heavy startup concepts.
                                <br /><br />
                                <Link to="/build/t&c" style={{ color: 'var(--b-accent-champagne)', textDecoration: 'none', fontWeight: '500', fontSize: '0.9rem' }}>Read Partnership Terms & Conditions →</Link>
                            </p>
                            <ul className="b-model-list">
                                <li>Significantly reduced or zero-cost development</li>
                                <li>Deep, long-term technical partnership</li>
                                <li>Access to the extended Hikat ecosystem & network</li>
                                <li>Continuous iteration and strategic advisory</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURES ENGINE ── */}
            <section
                id="engine"
                className={`b-section ${visibleSections['engine'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="b-container">
                    <div className="b-section-header">
                        <span className="b-section-tag">THE ARSENAL</span>
                        <h2 className="b-section-title">Everything You Need To Scale</h2>
                        <p className="b-section-subtitle">
                            When you partner with Hikity, you aren't just getting developers. You are unlocking an entire ecosystem of digital firepower built to dominate your industry.
                        </p>
                    </div>

                    <div className="b-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="b-feature-card">
                                <div className="b-feature-num">{feature.num}</div>
                                <h3 className="b-feature-title">{feature.title}</h3>
                                <p className="b-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── THE PROCESS ── */}
            <section
                id="process"
                className={`b-section ${visibleSections['process'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="b-container">
                    <div className="b-section-header">
                        <span className="b-section-tag">THE EXECUTION</span>
                        <h2 className="b-section-title">Zero to Empire</h2>
                        <p className="b-section-subtitle">
                            We don't do guesswork. We follow a precise, battle-tested engineering pipeline to guarantee speed, quality, and market readiness.
                        </p>
                    </div>

                    <div className="b-process-wrapper">
                        {processSteps.map((step, i) => (
                            <div key={i} className="b-process-step">
                                <div className="b-process-number">{step.num}</div>
                                <div className="b-process-content">
                                    <h3 className="b-process-title">{step.title}</h3>
                                    <p className="b-process-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA SECTION ── */}
            <section id="contact" className="b-cta-section">
                <div className="b-container">
                    <span className="b-section-tag" style={{ display: 'block', marginBottom: '16px' }}>INITIATE</span>
                    <h2 className="b-cta-title">Your Next Move.</h2>
                    <p className="b-cta-desc">
                        Are you ready to stop talking about your idea and start building it? Let's discuss your vision and decide if the Capital or Equity model fits your roadmap.
                    </p>
                    <a href="/#contact" className="b-btn-primary" style={{ padding: '20px 48px', fontSize: '1rem' }}>
                        Pitch Us Your Vision
                    </a>
                    <p className="b-cta-email">
                        Primary Email: <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a><br />
                        Corporate Email: <a href="mailto:contact@hikity.xyz">contact@hikity.xyz</a><br /><br />
                        <Link to="/build/t&c">Review Build Terms & Conditions</Link>
                    </p>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="b-footer-wrapper">
                <EnterpriseFooter onNavigate={() => { }} />
            </div>
        </div>
    );
};

export default BuildPage;
