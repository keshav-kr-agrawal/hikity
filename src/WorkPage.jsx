import React, { useEffect, useRef, useState } from 'react';
import './WorkPage.css';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';

const WorkPage = () => {
    // Scroll reveal logic
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.15 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        // Navbar scroll effect
        const handleScroll = () => {
            const nav = document.querySelector('.w-nav');
            if (nav) {
                if (window.scrollY > 50) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const features = [
        {
            icon: "⚖️",
            title: "Unshakable Authority",
            desc: "Web architecture designed to instantly communicate trust, expertise, and prestige to high-value clients and patients."
        },
        {
            icon: "📅",
            title: "Automated Consultations",
            desc: "Seamless integration with secure booking systems (Calendly, case-intakes, patient portals) to streamline your workflow."
        },
        {
            icon: "📈",
            title: "Client Acquisition SEO",
            desc: "Dominate search results when locals search for top-rated lawyers, chartered accountants (CAs), or specialized private clinics."
        },
        {
            icon: "🛡️",
            title: "Compliance & Security",
            desc: "Built with enterprise-grade privacy standards essential for handling sensitive legal, financial, and medical inquiries."
        },
        {
            icon: "⭐",
            title: "Reputation Management",
            desc: "Automated funnels to ethically gather and highlight positive client testimonials and 5-star Google reviews."
        },
        {
            icon: "✒️",
            title: "Thought Leadership",
            desc: "Integrated content hubs for publishing whitepapers, legal insights, financial updates, and medical research effortlessly."
        }
    ];

    const testimonials = [
        {
            quote: "Hikity overhauled our firm's digital presence. We've seen a 40% increase in high-net-worth inquiries purely driven by the new website's authority and our improved local SEO.",
            author: "Jonathan Hayes, Esq.",
            practice: "Managing Partner, Hayes Corporate Law",
            avatar: "👨‍⚖️"
        },
        {
            quote: "As a CA firm, trust is our currency. The custom platform they built for us not only looks incredibly professional but streamlined our entire secure document intake process.",
            author: "Priya Sharma, FCA",
            practice: "Founder, Sharma Financial Advisory",
            avatar: "👩‍💼"
        }
    ];

    return (
        <div className="w-page">
            {/* ── NAVIGATION ── */}
            <nav className="w-nav">
                <Link to="/" className="w-nav-logo">
                    <div className="w-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                </Link>
                <div className="w-nav-links">
                    <Link to="/" className="w-nav-link">Home</Link>
                    <a href="/#contact" className="w-nav-cta">Retain Our Services</a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="w-hero">
                <div className="w-hero-bg">
                    <div className="w-hero-gradient" />
                    <div className="w-hero-dots" />
                </div>

                <div className="w-container">
                    <div className="w-hero-content-wrapper">
                        <div className="w-hero-content">
                            <div className="w-hero-badge">
                                <span className="w-hero-badge-dot" />
                                EXECUTIVE DIGITAL PRACTICES
                            </div>
                            <h1 className="w-hero-title">
                                The Digital Foundation For <span className="w-hero-title-accent">Elite Professionals.</span>
                            </h1>
                            <p className="w-hero-subtitle">
                                Command respect and attract high-value clients. Hikity builds authoritative, secure, and conversion-optimized digital practices for Lawyers, Chartered Accountants, Private Clinics, and Consultants.
                            </p>

                            <div className="w-hero-actions">
                                <a href="/#contact" className="w-btn-primary large">
                                    <span>Modernize Your Practice</span>
                                </a>
                            </div>

                            <div className="w-hero-stats">
                                <div className="w-stat">
                                    <span className="w-stat-number">40%</span>
                                    <span className="w-stat-label">Lift in Qualified Leads</span>
                                </div>
                                <div className="w-stat-divider" />
                                <div className="w-stat">
                                    <span className="w-stat-number">Secure</span>
                                    <span className="w-stat-label">Enterprise Infrastructure</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-hero-visual">
                            <div className="w-hero-card-stack">
                                <div className="w-float-card card-1">
                                    <span className="card-icon">🏛️</span>
                                    <span>Premium Brand Trust</span>
                                </div>
                                <div className="w-float-card card-2">
                                    <span className="card-icon">🔐</span>
                                    <span>Secure Client Portals</span>
                                </div>
                                <div className="w-float-card card-3">
                                    <span className="card-icon">📊</span>
                                    <span>Lead Generation SEO</span>
                                </div>
                                <div className="w-float-card card-4">
                                    <span className="card-icon">📅</span>
                                    <span>Automated Intakes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-hero-scroll-indicator">
                    <span>REVIEW OUR CAPABILITIES</span>
                    <div className="scroll-line" />
                </div>
            </header>

            {/* ── MANIFESTO STRIP ── */}
            <div className="w-manifesto">
                <div className="w-manifesto-inner">
                    {[...Array(3)].map((_, j) => (
                        <React.Fragment key={j}>
                            <div className="w-manifesto-item">UNCOMPROMISING SECRECY <span className="manifesto-dot">/</span></div>
                            <div className="w-manifesto-item">EXECUTIVE AUTHORITY <span className="manifesto-dot">/</span></div>
                            <div className="w-manifesto-item">QUALIFIED ACQUISITION <span className="manifesto-dot">/</span></div>
                            <div className="w-manifesto-item">CLIENT TRUST <span className="manifesto-dot">/</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── FEATURES SECTION ── */}
            <section
                id="features"
                className={`w-section bg-light ${visibleSections['features'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="w-container">
                    <div className="w-section-header">
                        <span className="w-tag">PRACTICE ACCELERATOR</span>
                        <h2 className="w-section-title">
                            Built For The Demands of Your Profession
                        </h2>
                        <p className="w-section-subtitle">
                            Independent practitioners face unique challenges. We solve the friction of client acquisition, secure onboarding, and brand positioning through elite digital engineering.
                        </p>
                    </div>

                    <div className="w-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="w-feature-card">
                                <span className="w-feature-icon">{feature.icon}</span>
                                <h3 className="w-feature-title">{feature.title}</h3>
                                <p className="w-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LOCAL DOMINANCE (Orbit variation) ── */}
            <section
                id="local-dominance"
                className={`w-section bg-gradient ${visibleSections['local-dominance'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="w-container">
                    <div className="w-local-content">
                        <div className="w-local-text">
                            <span className="w-tag">PREMIER POSITIONING</span>
                            <h2 className="w-section-title">
                                The Undisputed First Choice
                            </h2>
                            <p className="w-section-subtitle">
                                When a corporation needs a CA, a family needs an attorney, or a patient seeks a specialist—they research online. We guarantee your practice is positioned as the most authoritative option.
                            </p>

                            <ul className="w-checklist">
                                <li><strong>Prestige Local SEO:</strong> Dominate the search landscape for high-intent keywords in your exact geographical service area.</li>
                                <li><strong>Case/Patient Funnels:</strong> Custom forms that pre-qualify leads, saving your associates hours of manual vetting.</li>
                                <li><strong>Multi-Disciplinary Scale:</strong> Architecture designed to seamlessly grow as you add new partners or open new clinic branches.</li>
                            </ul>
                        </div>

                        <div className="w-local-visual">
                            <div className="w-orbit">
                                <div className="w-orbit-ring w-orbit-1" />
                                <div className="w-orbit-ring w-orbit-2" />
                                <div className="w-orbit-ring w-orbit-3" />
                                <div className="w-orbit-center">
                                    <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                                </div>
                                <div className="w-orbit-node n-1"><span>⚖️</span></div>
                                <div className="w-orbit-node n-2"><span>📈</span></div>
                                <div className="w-orbit-node n-3"><span>🏥</span></div>
                                <div className="w-orbit-node n-4"><span>🤝</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="w-testimonials"
                className={`w-section bg-white ${visibleSections['w-testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="w-container">
                    <div className="w-section-header">
                        <span className="w-tag">ENDORSEMENTS</span>
                        <h2 className="w-section-title">
                            Retained By Industry Leaders
                        </h2>
                    </div>

                    <div className="w-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="w-testimonial-card">
                                <div className="t-quote-mark">"</div>
                                <p className="t-text">{t.quote}</p>
                                <div className="t-author">
                                    <div className="t-avatar">{t.avatar}</div>
                                    <div>
                                        <span className="t-name">{t.author}</span>
                                        <span className="t-clinic">{t.practice}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="w-cta-section">
                <div className="w-cta-bg" />
                <div className="w-container">
                    <div className="w-cta-content">
                        <h2 className="w-cta-title">Ready To Dominate Your Market?</h2>
                        <p className="w-cta-desc">
                            Schedule a confidential consultation to discuss how we can engineer the ultimate digital foundation for your professional practice.
                        </p>
                        <div className="w-cta-actions">
                            <a href="/#contact" className="w-btn-primary large">
                                <span>Schedule a Consultation</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="w-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default WorkPage;
