import React, { useEffect, useRef, useState } from 'react';
import './MusicPage.css';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';

const MusicPage = () => {
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
            const nav = document.querySelector('.m-nav');
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
            icon: "🎫",
            title: "Tour & Ticketing Funnels",
            desc: "Direct-to-fan ticketing systems that minimize platform fees and ensure your shows are sold out months in advance."
        },
        {
            icon: "🎧",
            title: "Streaming Amplification",
            desc: "Smart-link routing and pre-save campaigns designed to trigger Spotify and Apple Music algorithmic playlists."
        },
        {
            icon: "🔥",
            title: "Fan-Engagement Growth",
            desc: "Web experiences that capture high-intent audiences, converting fleeting digital interactions into long-term, loyal superfans."
        },
        {
            icon: "👕",
            title: "D2C Merch Empires",
            desc: "Premium e-commerce integrations for your merchandise, driving extreme high-margin revenue directly to your band."
        },
        {
            icon: "🌟",
            title: "EPK & Press Authority",
            desc: "Industry-standard Electronic Press Kits built-in to secure festival slots, label attention, and major publications."
        },
        {
            icon: "💃",
            title: "Choreography Showcases",
            desc: "High-performance video hosting that displays your dance reels and visual art without any buffering or quality loss."
        }
    ];

    const testimonials = [
        {
            quote: "Hikity took our aesthetic and built an absolute machine. Our latest tour sold out 3x faster because the ticketing funnel was flawless.",
            author: "The Midnight Echo",
            practice: "Indie Synth-Pop Band",
            avatar: "🎸"
        },
        {
            quote: "As a contemporary dance company, our visuals are everything. They created a digital stage that perfectly represents our art.",
            author: "Aria Moves",
            practice: "Performing Arts Troupe",
            avatar: "🩰"
        }
    ];

    // March Offer Popup State
    const [showPopup, setShowPopup] = useState(true);

    return (
        <div className="m-page">
            {/* ── NAVIGATION ── */}
            <nav className="m-nav">
                <Link to="/" className="m-nav-logo">
                    <div className="m-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                </Link>
                <div className="m-nav-links">
                    <Link to="/" className="m-nav-link">Home</Link>
                    <a href="/#contact" className="m-nav-cta">Book Our Agency</a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="m-hero">
                <div className="m-hero-bg">
                    <div className="m-hero-gradient" />
                    <div className="m-hero-dots" />
                </div>

                <div className="m-container">
                    <div className="m-hero-content-wrapper">
                        <div className="m-hero-content">
                            <div className="m-hero-badge">
                                <span className="m-hero-badge-dot" />
                                CREATIVE MASTERCLASS
                            </div>
                            <h1 className="m-hero-title">
                                Amplify Your Art. <br /><span className="m-hero-title-accent">Pack Your Shows.</span>
                            </h1>
                            <p className="m-hero-subtitle">
                                Hikity engineers explosive digital brands, tour promotion systems, and fan-monetization platforms for elite bands, dancers, and visionary performing artists.
                            </p>

                            <div className="m-hero-actions">
                                <a href="/#contact" className="m-btn-primary large">
                                    <span>Launch Your Era</span>
                                </a>
                            </div>

                            <div className="m-hero-stats">
                                <div className="m-stat">
                                    <span className="m-stat-number">300%</span>
                                    <span className="m-stat-label">Avg. Streaming Lift</span>
                                </div>
                                <div className="m-stat-divider" />
                                <div className="m-stat">
                                    <span className="m-stat-number">Global</span>
                                    <span className="m-stat-label">Fan Reach</span>
                                </div>
                            </div>
                        </div>

                        <div className="m-hero-visual">
                            <div className="m-hero-card-stack">
                                <div className="m-float-card card-1">
                                    <span className="card-icon">🎤</span>
                                    <span>Sold Out Venues</span>
                                </div>
                                <div className="m-float-card card-2">
                                    <span className="card-icon">⚡</span>
                                    <span>Global Streaming</span>
                                </div>
                                <div className="m-float-card card-3">
                                    <span className="card-icon">🖤</span>
                                    <span>Cult Fanbase</span>
                                </div>
                                <div className="m-float-card card-4">
                                    <span className="card-icon">💿</span>
                                    <span>Vinyl & Merch Sales</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="m-hero-scroll-indicator">
                    <span>STAGE DIVE</span>
                    <div className="scroll-line" />
                </div>
            </header>

            {/* ── MANIFESTO STRIP ── */}
            <div className="m-manifesto">
                <div className="m-manifesto-inner">
                    {[...Array(3)].map((_, j) => (
                        <React.Fragment key={j}>
                            <div className="m-manifesto-item">OWN YOUR MASTERS <span className="manifesto-dot">✖</span></div>
                            <div className="m-manifesto-item">DIRECT TO FAN <span className="manifesto-dot">✖</span></div>
                            <div className="m-manifesto-item">STREAMING DOMINANCE <span className="manifesto-dot">✖</span></div>
                            <div className="m-manifesto-item">VIRAL MOMENTUM <span className="manifesto-dot">✖</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── FEATURES SECTION ── */}
            <section
                id="features"
                className={`m-section bg-dark ${visibleSections['features'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="m-container">
                    <div className="m-section-header">
                        <span className="m-tag">THE ARTIST TOOLKIT</span>
                        <h2 className="m-section-title">
                            Everything To Break Through
                        </h2>
                        <p className="m-section-subtitle">
                            Stop relying purely on the algorithms. Build an owned digital ecosystem where you control the tickets, the merch, and the fan data.
                        </p>
                    </div>

                    <div className="m-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="m-feature-card">
                                <span className="m-feature-icon">{feature.icon}</span>
                                <h3 className="m-feature-title">{feature.title}</h3>
                                <p className="m-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GLOBAL DOMINANCE (Orbit variation) ── */}
            <section
                id="local-dominance"
                className={`m-section bg-gradient ${visibleSections['local-dominance'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="m-container">
                    <div className="m-local-content">
                        <div className="m-local-text">
                            <span className="m-tag">CULT CREATION</span>
                            <h2 className="m-section-title">
                                From Local Act to Global Phenomenon
                            </h2>
                            <p className="m-section-subtitle">
                                We turn casual listeners into lifelong superfans by creating immersive digital worlds around your music and choreography.
                            </p>

                            <ul className="m-checklist">
                                <li><strong>Pre-Save Architectures:</strong> Funnel all viral web traffic into massive Day-1 streaming numbers.</li>
                                <li><strong>VIP Fan Portals:</strong> Exclusive behind-the-scenes content that monetizes your most dedicated followers.</li>
                                <li><strong>Tour Geo-Targeting:</strong> Blast targeted ads to specific cities precisely when your tour dates drop.</li>
                            </ul>
                        </div>

                        <div className="m-local-visual">
                            <div className="m-orbit">
                                <div className="a-orbit-ring a-orbit-1" />
                                <div className="a-orbit-ring a-orbit-2" />
                                <div className="a-orbit-ring a-orbit-3" />
                                <div className="a-orbit-center">
                                    <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                                </div>
                                <div className="a-orbit-node n-1"><span>🎵</span></div>
                                <div className="a-orbit-node n-2"><span>🎸</span></div>
                                <div className="a-orbit-node n-3"><span>💃</span></div>
                                <div className="a-orbit-node n-4"><span>🎧</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="m-testimonials"
                className={`m-section bg-darker ${visibleSections['m-testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="m-container">
                    <div className="m-section-header">
                        <span className="m-tag">INDUSTRY CO-SIGNS</span>
                        <h2 className="m-section-title">
                            Trusted by Touring Artists
                        </h2>
                    </div>

                    <div className="m-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="m-testimonial-card">
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
            <section className="m-cta-section">
                <div className="m-cta-bg" />
                <div className="m-container">
                    <div className="m-cta-content">
                        <h2 className="m-cta-title">Ready To Hit The Main Stage?</h2>
                        <p className="m-cta-desc">
                            Let's build a digital presence so powerful, the label executives will be chasing you.
                        </p>
                        <div className="m-cta-actions">
                            <a href="/#contact" className="m-btn-primary large">
                                <span>Book A Strategy Session</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="m-footer-wrapper">
                <EnterpriseFooter />
            </div>

            {/* ── MARCH OFFER POPUP (NO IMAGE) ── */}
            {showPopup && (
                <div className="m-popup-overlay">
                    <div className="m-popup-modal">
                        <button className="m-popup-close" onClick={() => setShowPopup(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="m-popup-body">
                            <h3>Exclusive March Artist Offer</h3>
                            <p>Build your tour funnel or artist portal this month and get premium backend amplification included.</p>
                            <div className="m-popup-alert">
                                <span>🔥 Valid till 31st March 2026. Claim your slot now!</span>
                            </div>
                            <a href="/#contact" className="m-btn-primary m-popup-btn" onClick={() => setShowPopup(false)}>
                                <span>Claim Offer Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MusicPage;
