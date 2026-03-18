import React, { useEffect, useRef, useState } from 'react';
import './SchoolPage.css';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';

const SchoolPage = () => {
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
            const nav = document.querySelector('.school-nav');
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
            icon: "🎓",
            title: "Enrollment Generation",
            desc: "Targeted digital campaigns that actively reach prospective parents and safely guide them to enrollment."
        },
        {
            icon: "🏛️",
            title: "Institutional Authority",
            desc: "A premium website architecture that conveys the rich history, academic excellence, and values of your school."
        },
        {
            icon: "📱",
            title: "Parent Portal Integration",
            desc: "Seamless integration with your existing admission gateways, fee mechanisms, and student information systems."
        },
        {
            icon: "⭐",
            title: "Reputation Excellence",
            desc: "Automated systems to capture positive alumni reviews and glowing testimonials from current parents."
        },
        {
            icon: "🚀",
            title: "Lightning Fast Mobile",
            desc: "Most parents research schools on mobile. We ensure instant load times and perfect accessibility guidelines."
        },
        {
            icon: "🛡️",
            title: "Secure & Compliant",
            desc: "Built with the highest privacy and data-protection protocols, essential for modern educational institutions."
        }
    ];

    const testimonials = [
        {
            quote: "Since Hikity revamped our digital presence, our annual admission inquiries increased by 35%. The website truly reflects our academic standards.",
            author: "Dr. Eleanor Vance",
            practice: "Principal, Oakridge International",
            avatar: "👩‍🏫"
        },
        {
            quote: "A perfect blend of modern functionality and traditional institutional trust. Parents constantly compliment our new portal.",
            author: "Mr. Robert Sterling",
            practice: "Director of Admissions",
            avatar: "👨‍🏫"
        }
    ];

    return (
        <div className="school-page">
            {/* ── NAVIGATION ── */}
            <nav className="school-nav">
                <Link to="/" className="school-nav-logo">
                    <div className="school-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                </Link>
                <div className="school-nav-links">
                    <Link to="/" className="school-nav-link">Home</Link>
                    <a href="/#contact" className="school-nav-cta">Contact Us</a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="school-hero">
                <div className="school-hero-bg">
                    <div className="school-hero-gradient" />
                    <div className="school-hero-dots" />
                </div>

                <div className="school-container">
                    <div className="school-hero-content-wrapper">
                        <div className="school-hero-content">
                            <div className="school-hero-badge">
                                <span className="school-hero-badge-dot" />
                                DIGITAL EXCELLENCE FOR SCHOOLS
                            </div>
                            <h1 className="school-hero-title">
                                Inspire Trust. <br /><span className="school-hero-title-accent">Increase Enrollments.</span>
                            </h1>
                            <p className="school-hero-subtitle">
                                Hikity builds authoritative, high-converting digital platforms specifically engineered for premium educational institutions. Modernize your school's legacy today.
                            </p>

                            <div className="school-hero-actions">
                                <a href="/#contact" className="school-btn-primary large">
                                    <span>Upgrade Your Institution</span>
                                </a>
                            </div>

                            <div className="school-hero-stats">
                                <div className="school-stat">
                                    <span className="school-stat-number">35%</span>
                                    <span className="school-stat-label">Avg. Admission Lift</span>
                                </div>
                                <div className="school-stat-divider" />
                                <div className="school-stat">
                                    <span className="school-stat-number">Top</span>
                                    <span className="school-stat-label">Local School Ranking</span>
                                </div>
                            </div>
                        </div>

                        <div className="school-hero-visual">
                            <div className="school-hero-card-stack">
                                <div className="school-float-card card-1">
                                    <span className="card-icon">🏛️</span>
                                    <span>Premium Brand Identity</span>
                                </div>
                                <div className="school-float-card card-2">
                                    <span className="card-icon">📈</span>
                                    <span>Targeted Admissions</span>
                                </div>
                                <div className="school-float-card card-3">
                                    <span className="card-icon">🤝</span>
                                    <span>Parent Engagement</span>
                                </div>
                                <div className="school-float-card card-4">
                                    <span className="card-icon">🏆</span>
                                    <span>Academic Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="school-hero-scroll-indicator">
                    <span>EXPLORE</span>
                    <div className="scroll-line" />
                </div>
            </header>

            {/* ── MANIFESTO STRIP ── */}
            <div className="school-manifesto">
                <div className="school-manifesto-inner">
                    {[...Array(3)].map((_, j) => (
                        <React.Fragment key={j}>
                            <div className="school-manifesto-item">PARENT TRUST <span className="manifesto-dot">✦</span></div>
                            <div className="school-manifesto-item">ACADEMIC STANDARDS <span className="manifesto-dot">✦</span></div>
                            <div className="school-manifesto-item">ADMISSION GROWTH <span className="manifesto-dot">✦</span></div>
                            <div className="school-manifesto-item">COMMUNITY LEGACY <span className="manifesto-dot">✦</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── FEATURES SECTION ── */}
            <section
                id="features"
                className={`school-section bg-light ${visibleSections['features'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="school-container">
                    <div className="school-section-header">
                        <span className="school-tag">INSTITUTIONAL GROWTH</span>
                        <h2 className="school-section-title">
                            Everything A Leading School Needs
                        </h2>
                        <p className="school-section-subtitle">
                            We don't just build websites; we build comprehensive digital enrollment engines tailored for modern education.
                        </p>
                    </div>

                    <div className="school-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="school-feature-card">
                                <span className="school-feature-icon">{feature.icon}</span>
                                <h3 className="school-feature-title">{feature.title}</h3>
                                <p className="school-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LOCAL DOMINANCE (Orbit variation) ── */}
            <section
                id="local-dominance"
                className={`school-section bg-gradient ${visibleSections['local-dominance'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="school-container">
                    <div className="school-local-content">
                        <div className="school-local-text">
                            <span className="school-tag">COMMUNITY LEADERSHIP</span>
                            <h2 className="school-section-title">
                                The School of Choice
                            </h2>
                            <p className="school-section-subtitle">
                                When parents research the best education for their children, they rely on digital authority. We ensure your institution sits undisputed at the top.
                            </p>

                            <ul className="school-checklist">
                                <li><strong>Prestige Local SEO:</strong> Ensure your school is the first result families see when moving to the area.</li>
                                <li><strong>Enrollment Campaigns:</strong> Execute high-conversion campaigns during peak admission seasons.</li>
                                <li><strong>Alumni Showcases:</strong> Highlight success stories to build generational trust and community backing.</li>
                            </ul>
                        </div>

                        <div className="school-local-visual">
                            <div className="school-orbit">
                                <div className="s-orbit-ring s-orbit-1" />
                                <div className="s-orbit-ring s-orbit-2" />
                                <div className="s-orbit-ring s-orbit-3" />
                                <div className="s-orbit-center">
                                    <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                                </div>
                                <div className="s-orbit-node n-1"><span>🎓</span></div>
                                <div className="s-orbit-node n-2"><span>🏫</span></div>
                                <div className="s-orbit-node n-3"><span>🏆</span></div>
                                <div className="s-orbit-node n-4"><span>🚌</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="school-testimonials"
                className={`school-section bg-white ${visibleSections['school-testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="school-container">
                    <div className="school-section-header">
                        <span className="school-tag">PROVEN EXCELLENCE</span>
                        <h2 className="school-section-title">
                            Trusted by Leading Academies
                        </h2>
                    </div>

                    <div className="school-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="school-testimonial-card">
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
            <section className="school-cta-section">
                <div className="school-cta-bg" />
                <div className="school-container">
                    <div className="school-cta-content">
                        <h2 className="school-cta-title">Ready To Elevate Your School's Legacy?</h2>
                        <p className="school-cta-desc">
                            Partner with us to build a digital presence that truly reflects your academic prestige and fills your classrooms.
                        </p>
                        <div className="school-cta-actions">
                            <a href="/#contact" className="school-btn-primary large">
                                <span>Get a Free Digital Audit</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="school-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default SchoolPage;
