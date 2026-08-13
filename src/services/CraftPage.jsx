import React, { useEffect, useRef, useState } from 'react';
import './CraftPage.css';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';

const CraftPage = () => {
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
            const nav = document.querySelector('.cr-nav');
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
            icon: "🛍️",
            title: "Boutique E-Commerce",
            desc: "Custom storefronts that reflect the soul of your craft, perfectly optimized for seamless direct-to-consumer sales."
        },
        {
            icon: "📌",
            title: "Visual Content Funnels",
            desc: "Transform your brand's unique story into automated revenue streams with beautiful, high-converting digital aesthetics."
        },
        {
            icon: "🎨",
            title: "Visual Brand Identity",
            desc: "From hand-poured candles to bespoke jewelry, we design digital identities that instantly convey premium quality."
        },
        {
            icon: "🌍",
            title: "Global Reach SEO",
            desc: "Stop relying solely on Etsy or craft fairs. We build independent SEO strategies that bring the world to your workshop."
        },
        {
            icon: "💌",
            title: "Artisan Storytelling",
            desc: "Web experiences designed to highlight your 'maker's story', building profound emotional connections with buyers."
        },
        {
            icon: "📦",
            title: "Unboxing Continuity",
            desc: "We align your website's digital aesthetic perfectly with your physical packaging, ensuring a flawless customer journey."
        }
    ];

    const testimonials = [
        {
            quote: "Moving off Etsy and building our own boutique brand with Hikity was the best decision. Our bespoke jewelry sales doubled in a month.",
            author: "Amelia Thorne",
            practice: "Founder, Thorne Fine Jewelry",
            avatar: "💍"
        },
        {
            quote: "They perfectly captured the organic, earthy feel of my hand-poured candles. The website feels exactly like walking into my studio.",
            author: "Elias Vance",
            practice: "Artisan, Luminary Organics",
            avatar: "🕯️"
        }
    ];

    return (
        <div className="cr-page">
            {/* ── NAVIGATION ── */}
            <nav className="cr-nav">
                <Link to="/" className="cr-nav-logo">
                    <div className="cr-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                </Link>
                <div className="cr-nav-links">
                    <Link to="/" className="cr-nav-link">Home</Link>
                    <Link to="/blog" className="cr-nav-link">Blog</Link>
                    <a href="/#contact" className="cr-nav-cta">Work With Us</a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="cr-hero">
                <div className="cr-hero-bg">
                    <div className="cr-hero-gradient" />
                    <div className="cr-hero-dots" />
                </div>

                <div className="cr-container">
                    <div className="cr-hero-content-wrapper">
                        <div className="cr-hero-content">
                            <div className="cr-hero-badge">
                                <span className="cr-hero-badge-dot" />
                                ELEVATING THE HANDMADE
                            </div>
                            <h1 className="cr-hero-title">
                                Turn Your Craft <br /><span className="cr-hero-title-accent">Into A Global Brand.</span>
                            </h1>
                            <p className="cr-hero-subtitle">
                                The world needs your art. We build breathtaking, high-converting digital boutiques for artisans behind handcrafted candles, bespoke jewelry, floral designs, and custom toys.
                            </p>

                            <div className="cr-hero-actions">
                                <a href="/#contact" className="cr-btn-primary large">
                                    <span>Grow Your Workshop</span>
                                </a>
                            </div>

                            <div className="cr-hero-stats">
                                <div className="cr-stat">
                                    <span className="cr-stat-number">2.5x</span>
                                    <span className="cr-stat-label">Avg. Conversion Lift</span>
                                </div>
                                <div className="cr-stat-divider" />
                                <div className="cr-stat">
                                    <span className="cr-stat-number">100%</span>
                                    <span className="cr-stat-label">Independent Revenue</span>
                                </div>
                            </div>
                        </div>

                        <div className="cr-hero-visual">
                            <div className="cr-hero-card-stack">
                                <div className="cr-float-card card-1">
                                    <span className="card-icon">🕯️</span>
                                    <span>Hand-Poured Candles</span>
                                </div>
                                <div className="cr-float-card card-2">
                                    <span className="card-icon">💐</span>
                                    <span>Floral Arrangements</span>
                                </div>
                                <div className="cr-float-card card-3">
                                    <span className="card-icon">🧸</span>
                                    <span>Custom Wood Toys</span>
                                </div>
                                <div className="cr-float-card card-4">
                                    <span className="card-icon">💍</span>
                                    <span>Bespoke Jewelry</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cr-hero-scroll-indicator">
                    <span>EXPLORE THE ATELIER</span>
                    <div className="scroll-line" />
                </div>
            </header>

            {/* ── MANIFESTO STRIP ── */}
            <div className="cr-manifesto">
                <div className="cr-manifesto-inner">
                    {[...Array(3)].map((_, j) => (
                        <React.Fragment key={j}>
                            <div className="cr-manifesto-item">BESPOKE QUALITY <span className="manifesto-dot">❈</span></div>
                            <div className="cr-manifesto-item">ARTISAN STORYTELLING <span className="manifesto-dot">❈</span></div>
                            <div className="cr-manifesto-item">GLOBAL SHIPPING <span className="manifesto-dot">❈</span></div>
                            <div className="cr-manifesto-item">DIRECT TO CONSUMER <span className="manifesto-dot">❈</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── FEATURES SECTION ── */}
            <section
                id="features"
                className={`cr-section bg-light ${visibleSections['features'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="cr-container">
                    <div className="cr-section-header">
                        <span className="cr-tag">THE DIGITAL WORKSHOP</span>
                        <h2 className="cr-section-title">
                            Beyond The Craft Fair
                        </h2>
                        <p className="cr-section-subtitle">
                            You pour your heart into making beautiful things. We ensure your website reflects that identical level of care and converts visitors into loyal patrons.
                        </p>
                    </div>

                    <div className="cr-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="cr-feature-card">
                                <span className="cr-feature-icon">{feature.icon}</span>
                                <h3 className="cr-feature-title">{feature.title}</h3>
                                <p className="cr-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GLOBAL DOMINANCE (Orbit variation) ── */}
            <section
                id="local-dominance"
                className={`cr-section bg-gradient ${visibleSections['local-dominance'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="cr-container">
                    <div className="cr-local-content">
                        <div className="cr-local-text">
                            <span className="cr-tag">INDEPENDENT SUCCESS</span>
                            <h2 className="cr-section-title">
                                Own Your Audience
                            </h2>
                            <p className="cr-section-subtitle">
                                Stop sharing massive percentages of your revenue with third-party marketplaces. Build a direct relationship with the people who love your craft.
                            </p>

                            <ul className="cr-checklist">
                                <li><strong>Marketplace Independence:</strong> Transition seamlessly from Etsy/Amazon into your fully owned premium store.</li>
                                <li><strong>Automated Gift Funnels:</strong> Capture lucrative holiday and gift-giving seasons with targeted ad campaigns.</li>
                                <li><strong>Email Newsletters:</strong> Keep buyers engaged with behind-the-scenes content from your studio.</li>
                            </ul>
                        </div>

                        <div className="cr-local-visual">
                            <div className="cr-orbit">
                                <div className="cr-orbit-ring cr-orbit-1" />
                                <div className="cr-orbit-ring cr-orbit-2" />
                                <div className="cr-orbit-ring cr-orbit-3" />
                                <div className="cr-orbit-center">
                                    <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                                </div>
                                <div className="cr-orbit-node n-1"><span>🎨</span></div>
                                <div className="cr-orbit-node n-2"><span>🧵</span></div>
                                <div className="cr-orbit-node n-3"><span>💎</span></div>
                                <div className="cr-orbit-node n-4"><span>🏺</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="cr-testimonials"
                className={`cr-section bg-white ${visibleSections['cr-testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="cr-container">
                    <div className="cr-section-header">
                        <span className="cr-tag">MAKER APPROVED</span>
                        <h2 className="cr-section-title">
                            Trusted By Elite Artisans
                        </h2>
                    </div>

                    <div className="cr-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="cr-testimonial-card">
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
            <section className="cr-cta-section">
                <div className="cr-cta-bg" />
                <div className="cr-container">
                    <div className="cr-cta-content">
                        <h2 className="cr-cta-title">Ready To Share Your Art?</h2>
                        <p className="cr-cta-desc">
                            Let's build an independent, premium e-commerce presence that honors your craftsmanship and drives genuine global sales.
                        </p>
                        <div className="cr-cta-actions">
                            <a href="/#contact" className="cr-btn-primary large">
                                <span>Start Your Boutique</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="cr-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default CraftPage;
