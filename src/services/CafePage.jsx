import React, { useEffect, useRef, useState } from 'react';
import './CafePage.css';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';

const CafePage = () => {
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
            const nav = document.querySelector('.cafe-nav');
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
            title: "Local Search Dominance",
            desc: "Command the top spot on Google Maps. When locals search for 'best coffee near me' or 'dinner spots', they find you first."
        },
        {
            icon: "🍽️",
            title: "Reservation Integration",
            desc: "Seamless synchronization with OpenTable, Resy, or your preferred booking platform to convert visitors into diners instantly."
        },
        {
            icon: "📸",
            title: "Visual Menu Experiences",
            desc: "Artisan-level, mouth-watering digital menus that load instantly and look incredible on every mobile device."
        },
        {
            icon: "🛵",
            title: "Direct Ordering Systems",
            desc: "Bypass third-party delivery fees with a custom online ordering system integrated seamlessly into your brand's website."
        },
        {
            icon: "⭐",
            title: "Reputation Engines",
            desc: "Turn your best customers into vocal advocates. Automated systems to safely gather and highlight 5-star Yelp and Google reviews."
        },
        {
            icon: "✨",
            title: "Aesthetic Continuity",
            desc: "Web designs crafted with the modern foodie in mind—translating your physical ambiance into a highly shareable digital brand."
        }
    ];

    const testimonials = [
        {
            quote: "Hikity transformed our online presence. Our direct reservations are up by 45%, and we're consistently fully booked on weekends.",
            author: "Chef Marco Rossi",
            practice: "Owner, Trattoria Bella",
            avatar: "👨‍🍳"
        },
        {
            quote: "The brand aesthetic they built for our cafe perfectly captures our vibe. We went from a hidden gem to the neighborhood staple.",
            author: "Elena Silva",
            practice: "Founder, Origin Coffee Roasters",
            avatar: "👩‍🍳"
        }
    ];

    return (
        <div className="cafe-page">
            {/* ── NAVIGATION ── */}
            <nav className="cafe-nav">
                <Link to="/" className="cafe-nav-logo">
                    <div className="cafe-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                </Link>
                <div className="cafe-nav-links">
                    <Link to="/" className="cafe-nav-link">Home</Link>
                    <Link to="/blog" className="cafe-nav-link">Blog</Link>
                    <a href="/#contact" className="cafe-nav-cta">Work With Us</a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="cafe-hero">
                <div className="cafe-hero-bg">
                    <div className="cafe-hero-gradient" />
                    <div className="cafe-hero-dots" />
                </div>

                <div className="cafe-container">
                    <div className="cafe-hero-content-wrapper">
                        <div className="cafe-hero-content">
                            <div className="cafe-hero-badge">
                                <span className="cafe-hero-badge-dot" />
                                PREMIUM HOSPITALITY GROWTH
                            </div>
                            <h1 className="cafe-hero-title">
                                Fill Your Tables <br /><span className="cafe-hero-title-accent">Every Single Night.</span>
                            </h1>
                            <p className="cafe-hero-subtitle">
                                The best food deserves the best digital experience. Hikity crafts mouth-watering, high-converting websites and local SEO engines for premium restaurants, cafes, and hospitality brands.
                            </p>

                            <div className="cafe-hero-actions">
                                <a href="/#contact" className="cafe-btn-primary large">
                                    <span>Scale Your Restaurant</span>
                                </a>
                            </div>

                            <div className="cafe-hero-stats">
                                <div className="cafe-stat">
                                    <span className="cafe-stat-number">45%</span>
                                    <span className="cafe-stat-label">Avg. Reservation Lift</span>
                                </div>
                                <div className="cafe-stat-divider" />
                                <div className="cafe-stat">
                                    <span className="cafe-stat-number">#1</span>
                                    <span className="cafe-stat-label">Foodie Destination</span>
                                </div>
                            </div>
                        </div>

                        <div className="cafe-hero-visual">
                            <div className="cafe-hero-card-stack">
                                <div className="cafe-float-card card-1">
                                    <span className="card-icon">🍽️</span>
                                    <span>Direct Table Bookings</span>
                                </div>
                                <div className="cafe-float-card card-2">
                                    <span className="card-icon">📍</span>
                                    <span>Map Search Dominance</span>
                                </div>
                                <div className="cafe-float-card card-3">
                                    <span className="card-icon">🥂</span>
                                    <span>VIP Guest Retention</span>
                                </div>
                                <div className="cafe-float-card card-4">
                                    <span className="card-icon">📸</span>
                                    <span>Stunning Visual Layouts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cafe-hero-scroll-indicator">
                    <span>EXPLORE</span>
                    <div className="scroll-line" />
                </div>
            </header>

            {/* ── MANIFESTO STRIP ── */}
            <div className="cafe-manifesto">
                <div className="cafe-manifesto-inner">
                    {[...Array(3)].map((_, j) => (
                        <React.Fragment key={j}>
                            <div className="cafe-manifesto-item">MICHELIN QUALITY DESIGN <span className="manifesto-dot">✦</span></div>
                            <div className="cafe-manifesto-item">LOCAL FOODIE SEO <span className="manifesto-dot">✦</span></div>
                            <div className="cafe-manifesto-item">DIRECT RESERVATIONS <span className="manifesto-dot">✦</span></div>
                            <div className="cafe-manifesto-item">VIRAL BRANDING <span className="manifesto-dot">✦</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── FEATURES SECTION ── */}
            <section
                id="features"
                className={`cafe-section bg-light ${visibleSections['features'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="cafe-container">
                    <div className="cafe-section-header">
                        <span className="cafe-tag">DIGITAL HOSPITALITY</span>
                        <h2 className="cafe-section-title">
                            The Recipe for Growth
                        </h2>
                        <p className="cafe-section-subtitle">
                            We curate digital experiences that perfectly match your culinary vision and compel locals to walk through your doors.
                        </p>
                    </div>

                    <div className="cafe-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="cafe-feature-card">
                                <span className="cafe-feature-icon">{feature.icon}</span>
                                <h3 className="cafe-feature-title">{feature.title}</h3>
                                <p className="cafe-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LOCAL DOMINANCE (Orbit variation) ── */}
            <section
                id="local-dominance"
                className={`cafe-section bg-gradient ${visibleSections['local-dominance'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="cafe-container">
                    <div className="cafe-local-content">
                        <div className="cafe-local-text">
                            <span className="cafe-tag">NEIGHBORHOOD STAPLE</span>
                            <h2 className="cafe-section-title">
                                Own Your Neighborhood
                            </h2>
                            <p className="cafe-section-subtitle">
                                When locals are hungry, they search their immediate area. We make sure your restaurant is the undisputed first choice for dining in your city.
                            </p>

                            <ul className="cafe-checklist">
                                <li><strong>Google Maps Optimization:</strong> Always appear at the top of the local 'hungry pack' search results.</li>
                                <li><strong>Craving Campaigns:</strong> Targeted local ads placed right before dinner and lunch rushes.</li>
                                <li><strong>5-Star Consistency:</strong> Systems that filter out bad reviews and amplify your happiest diners.</li>
                            </ul>
                        </div>

                        <div className="cafe-local-visual">
                            <div className="cafe-orbit">
                                <div className="c-orbit-ring c-orbit-1" />
                                <div className="c-orbit-ring c-orbit-2" />
                                <div className="c-orbit-ring c-orbit-3" />
                                <div className="c-orbit-center">
                                    <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                                </div>
                                <div className="c-orbit-node n-1"><span>☕</span></div>
                                <div className="c-orbit-node n-2"><span>🍷</span></div>
                                <div className="c-orbit-node n-3"><span>⭐</span></div>
                                <div className="c-orbit-node n-4"><span>📍</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="cafe-testimonials"
                className={`cafe-section bg-white ${visibleSections['cafe-testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="cafe-container">
                    <div className="cafe-section-header">
                        <span className="cafe-tag">CHEF APPROVED</span>
                        <h2 className="cafe-section-title">
                            Trusted by Top Restaurateurs
                        </h2>
                    </div>

                    <div className="cafe-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="cafe-testimonial-card">
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
            <section className="cafe-cta-section">
                <div className="cafe-cta-bg" />
                <div className="cafe-container">
                    <div className="cafe-cta-content">
                        <h2 className="cafe-cta-title">Ready for a Packed House?</h2>
                        <p className="cafe-cta-desc">
                            Let's build a premium digital brand that reflects your culinary excellence and drives non-stop reservations.
                        </p>
                        <div className="cafe-cta-actions">
                            <a href="/#contact" className="cafe-btn-primary large">
                                <span>Get a Free Restaurant Audit</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="cafe-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default CafePage;
