import React, { useEffect, useRef, useState } from 'react';
import './DentistPage.css';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';

const DentistPage = () => {
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
            const nav = document.querySelector('.dentist-nav');
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
            icon: "📍",
            title: "Local SEO Dominance",
            desc: "Rank at the top of Google Maps when patients search for 'dentist near me' or specific treatments."
        },
        {
            icon: "📅",
            title: "Smart Booking Integration",
            desc: "Seamlessly integrate online booking with your existing practice management software."
        },
        {
            icon: "⭐",
            title: "Automated Reviews",
            desc: "Collect more 5-star Google reviews on autopilot to build instant trust with new patients."
        },
        {
            icon: "🦷",
            title: "Service Spotlight",
            desc: "Beautifully designed pages to highlight high-margin services like Invisalign, Implants, and Aesthetics."
        },
        {
            icon: "📱",
            title: "Mobile-First Design",
            desc: "Over 70% of patients search on their phones. We ensure your site is lightning-fast and responsive."
        },
        {
            icon: "🛡️",
            title: "HIPAA & Privacy Focused",
            desc: "Secure, professional architecture that respects patient data and aligns with healthcare standards."
        }
    ];

    const testimonials = [
        {
            quote: "Since partnering with Hikity, we've seen a 40% increase in new patient bookings directly from our website.",
            author: "Dr. Sarah Mitchell",
            practice: "Mitchell Family Dental",
            avatar: "👩‍⚕️"
        },
        {
            quote: "Finally, a digital presence that reflects the quality of care we provide in our clinic.",
            author: "Dr. James Chen",
            practice: "Advanced Smile Aesthetics",
            avatar: "👨‍⚕️"
        }
    ];

    return (
        <div className="dentist-page">
            {/* ── NAVIGATION ── */}
            <nav className="dentist-nav">
                <Link to="/" className="dentist-nav-logo">
                    <div className="dentist-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                </Link>
                <div className="dentist-nav-links">
                    <Link to="/" className="dentist-nav-link">Home</Link>
                    <Link to="/" className="dentist-nav-cta">Book Consultation</Link>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="dentist-hero">
                <div className="dentist-hero-bg">
                    <div className="dentist-hero-gradient" />
                    <div className="dentist-hero-dots" />
                </div>

                <div className="dentist-container">
                    <div className="dentist-hero-content-wrapper">
                        <div className="dentist-hero-content">
                            <div className="dentist-hero-badge">
                                <span className="dentist-hero-badge-dot" />
                                DIGITAL GROWTH FOR DENTISTS
                            </div>
                            <h1 className="dentist-hero-title">
                                Fill Your Chairs With <span className="dentist-hero-title-accent">High-Value Patients.</span>
                            </h1>
                            <p className="dentist-hero-subtitle">
                                Hikity builds trust-driven, conversion-focused websites and local SEO systems designed exclusively for modern dental practices. Stop losing patients to outdated digital experiences.
                            </p>

                            <div className="dentist-hero-actions">
                                <Link to="/" className="dentist-btn-primary large">
                                    <span>Upgrade Your Practice</span>
                                </Link>
                                <a href="#features" className="dentist-btn-secondary">
                                    View Our Solutions
                                </a>
                            </div>

                            <div className="dentist-hero-stats">
                                <div className="dentist-stat">
                                    <span className="dentist-stat-number">40%</span>
                                    <span className="dentist-stat-label">Avg. Booking Increase</span>
                                </div>
                                <div className="dentist-stat-divider" />
                                <div className="dentist-stat">
                                    <span className="dentist-stat-number">#1</span>
                                    <span className="dentist-stat-label">Local Search Ranking</span>
                                </div>
                            </div>
                        </div>

                        <div className="dentist-hero-visual">
                            <div className="dentist-hero-mockup">
                                <div className="mockup-header">
                                    <span className="mockup-dot r" />
                                    <span className="mockup-dot y" />
                                    <span className="mockup-dot g" />
                                </div>
                                <div className="mockup-body">
                                    <div className="mockup-profile">
                                        <div className="mockup-avatar">🦷</div>
                                        <div className="mockup-lines">
                                            <div className="mockup-line w-full" />
                                            <div className="mockup-line w-half" />
                                        </div>
                                    </div>
                                    <div className="mockup-grid">
                                        <div className="mockup-box" />
                                        <div className="mockup-box" />
                                        <div className="mockup-box" />
                                    </div>
                                    <div className="mockup-btn">Book Appointment</div>
                                </div>
                                <div className="mockup-float notification">
                                    <span className="nf-icon">📅</span>
                                    <div className="nf-text">
                                        <strong>New Booking</strong>
                                        <span>Dental Implant Consult</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="dentist-hero-scroll-indicator">
                    <span>EXPLORE</span>
                    <div className="scroll-line" />
                </div>
            </header>

            {/* ── MANIFESTO STRIP ── */}
            <div className="dentist-manifesto">
                <div className="dentist-manifesto-inner">
                    {[...Array(3)].map((_, j) => (
                        <React.Fragment key={j}>
                            <div className="dentist-manifesto-item">PATIENT TRUST <span className="manifesto-dot">✦</span></div>
                            <div className="dentist-manifesto-item">LOCAL SEO <span className="manifesto-dot">✦</span></div>
                            <div className="dentist-manifesto-item">CONVERSION DESIGN <span className="manifesto-dot">✦</span></div>
                            <div className="dentist-manifesto-item">PRACTICE GROWTH <span className="manifesto-dot">✦</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── FEATURES SECTION ── */}
            <section
                id="features"
                className={`dentist-section bg-light ${visibleSections['features'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="dentist-container">
                    <div className="dentist-section-header">
                        <span className="dentist-tag">PRACTICE ACCELERATOR</span>
                        <h2 className="dentist-section-title">
                            Everything You Need To Grow
                        </h2>
                        <p className="dentist-section-subtitle">
                            We don't just build websites; we build complete patient acquisition engines tailored for the dental industry.
                        </p>
                    </div>

                    <div className="dentist-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="dentist-feature-card">
                                <span className="dentist-feature-icon">{feature.icon}</span>
                                <h3 className="dentist-feature-title">{feature.title}</h3>
                                <p className="dentist-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LOCAL DOMINANCE (Orbit variation) ── */}
            <section
                id="local-dominance"
                className={`dentist-section bg-gradient ${visibleSections['local-dominance'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="dentist-container">
                    <div className="dentist-local-content">
                        <div className="dentist-local-text">
                            <span className="dentist-tag">MARKET LEADERSHIP</span>
                            <h2 className="dentist-section-title">
                                Own Your Local Market
                            </h2>
                            <p className="dentist-section-subtitle">
                                When a patient needs a dentist, they search locally. We ensure your practice is the undisputed first choice in your area across all digital channels.
                            </p>

                            <ul className="dentist-checklist">
                                <li><strong>Google Business Profile Optimization:</strong> Rank higher in the local map pack.</li>
                                <li><strong>Targeted Service Ads:</strong> Place your high-value treatments in front of locals actively searching.</li>
                                <li><strong>Reputation Management:</strong> Turn satisfied patients into powerful marketing tools.</li>
                            </ul>
                        </div>

                        <div className="dentist-local-visual">
                            <div className="dentist-orbit">
                                <div className="d-orbit-ring d-orbit-1" />
                                <div className="d-orbit-ring d-orbit-2" />
                                <div className="d-orbit-ring d-orbit-3" />
                                <div className="d-orbit-center">
                                    <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                                </div>
                                <div className="d-orbit-node n-1"><span>📍</span></div>
                                <div className="d-orbit-node n-2"><span>⭐</span></div>
                                <div className="d-orbit-node n-3"><span>🦷</span></div>
                                <div className="d-orbit-node n-4"><span>📅</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="dentist-testimonials"
                className={`dentist-section bg-white ${visibleSections['dentist-testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="dentist-container">
                    <div className="dentist-section-header">
                        <span className="dentist-tag">CLINICAL EXCELLENCE</span>
                        <h2 className="dentist-section-title">
                            Trusted by Leading Dentists
                        </h2>
                    </div>

                    <div className="dentist-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="dentist-testimonial-card">
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
            <section className="dentist-cta-section">
                <div className="dentist-cta-bg" />
                <div className="dentist-container">
                    <div className="dentist-cta-content">
                        <h2 className="dentist-cta-title">Ready To Transform Your Practice?</h2>
                        <p className="dentist-cta-desc">
                            Let's build a digital presence that reflects your clinical excellence and attracts the patients you deserve.
                        </p>
                        <div className="dentist-cta-actions">
                            <Link to="/" className="dentist-btn-primary large">
                                <span>Get Your Free Practice Audit</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="dentist-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default DentistPage;
