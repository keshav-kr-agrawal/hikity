import React, { useEffect, useRef, useState } from 'react';
import './BusinessPage.css';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';

const BusinessPage = () => {
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
            const nav = document.querySelector('.p-nav');
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
            icon: "🛒",
            title: "Frictionless Checkout",
            desc: "Hyper-optimized cart flows designed to slash abandonment rates and instantly boost your daily revenue."
        },
        {
            icon: "💎",
            title: "Premium Brand Positioning",
            desc: "Visual storytelling that elevates your product. Turn a simple perfume or skincare item into an absolute must-have luxury."
        },
        {
            icon: "📈",
            title: "High-ROAS Ad Systems",
            desc: "Integrated tracking and pixel architecture that allows your search and display ads to target the highest-intent buyers."
        },
        {
            icon: "🔄",
            title: "Upsell & Retention",
            desc: "Automated post-purchase flows, subscriptions, and email/SMS marketing that maximize the lifetime value of every customer."
        },
        {
            icon: "📦",
            title: "Global Supply Integrations",
            desc: "Flawless syncing with 3PLs, inventory management systems, and global shipping networks for automated fulfillment."
        },
        {
            icon: "📱",
            title: "Email & SMS Growth",
            desc: "Direct integration with automated email and SMS marketing platforms, turning your casual browsers into loyal, repeat storefront buyers."
        }
    ];

    const testimonials = [
        {
            quote: "Hikity transformed our entire e-commerce ecosystem. The site is visually breathtaking, and more importantly, our conversion rate jumped from 1.2% to 3.8% in the first month.",
            author: "Elena Rossi",
            practice: "Founder, Maison Rossi Fragrances",
            avatar: "🧴"
        },
        {
            quote: "We needed a digital experience as premium as our products. They delivered a Masterclass in D2C branding. Our subscription revenue has absolutely exploded.",
            author: "Marcus Chen",
            practice: "CMO, Nova Premium Skincare",
            avatar: "✨"
        }
    ];

    return (
        <div className="p-page">
            {/* ── NAVIGATION ── */}
            <nav className="p-nav">
                <Link to="/" className="p-nav-logo">
                    <div className="p-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                </Link>
                <div className="p-nav-links">
                    <Link to="/" className="p-nav-link">Home</Link>
                    <Link to="/blog" className="p-nav-link">Blog</Link>
                    <a href="/#contact" className="p-nav-cta">Scale Your Brand</a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <header className="p-hero">
                <div className="p-hero-bg">
                    <div className="p-hero-gradient" />
                    <div className="p-hero-dots" />
                </div>

                <div className="p-container">
                    <div className="p-hero-content-wrapper">
                        <div className="p-hero-content">
                            <div className="p-hero-badge">
                                <span className="p-hero-badge-dot" />
                                DIRECT-TO-CONSUMER EXCELLENCE
                            </div>
                            <h1 className="p-hero-title">
                                Scale Your Brand. <span className="p-hero-title-accent">Dominate D2C.</span>
                            </h1>
                            <p className="p-hero-subtitle">
                                Hikity engineers high-converting, visually stunning e-commerce ecosystems for premium product brands—from luxury perfumes and high-end skincare to bespoke lifestyle goods.
                            </p>

                            <div className="p-hero-actions">
                                <a href="/#contact" className="p-btn-primary large">
                                    <span>Launch Your Store</span>
                                </a>
                            </div>

                            <div className="p-hero-stats">
                                <div className="p-stat">
                                    <span className="p-stat-number">+210%</span>
                                    <span className="p-stat-label">Avg. Revenue Growth</span>
                                </div>
                                <div className="p-stat-divider" />
                                <div className="p-stat">
                                    <span className="p-stat-number">Global</span>
                                    <span className="p-stat-label">Scaling Infrastructure</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-hero-visual">
                            <div className="p-hero-card-stack">
                                <div className="p-float-card card-1">
                                    <span className="card-icon">🛍️</span>
                                    <span>High-Volume Sales</span>
                                </div>
                                <div className="p-float-card card-2">
                                    <span className="card-icon">✨</span>
                                    <span>Luxury Aesethics</span>
                                </div>
                                <div className="p-float-card card-3">
                                    <span className="card-icon">📈</span>
                                    <span>300% ROAS on Ads</span>
                                </div>
                                <div className="p-float-card card-4">
                                    <span className="card-icon">🌍</span>
                                    <span>Global Shipping Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-hero-scroll-indicator">
                    <span>EXPLORE THE COLLECTION</span>
                    <div className="scroll-line" />
                </div>
            </header>

            {/* ── MANIFESTO STRIP ── */}
            <div className="p-manifesto">
                <div className="p-manifesto-inner">
                    {[...Array(3)].map((_, j) => (
                        <React.Fragment key={j}>
                            <div className="p-manifesto-item">CONVERSION OPTIMIZED <span className="manifesto-dot">✦</span></div>
                            <div className="p-manifesto-item">LUXURY POSITIONING <span className="manifesto-dot">✦</span></div>
                            <div className="p-manifesto-item">GLOBAL FULFILLMENT <span className="manifesto-dot">✦</span></div>
                            <div className="p-manifesto-item">RETENTION MARKETING <span className="manifesto-dot">✦</span></div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── FEATURES SECTION ── */}
            <section
                id="features"
                className={`p-section bg-light ${visibleSections['features'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="p-container">
                    <div className="p-section-header">
                        <span className="p-tag">THE E-COMMERCE ENGINE</span>
                        <h2 className="p-section-title">
                            More Than Just A Storefront
                        </h2>
                        <p className="p-section-subtitle">
                            We don't just build websites; we engineer comprehensive digital sales machines designed to maximize Average Order Value (AOV) and build fierce brand loyalty.
                        </p>
                    </div>

                    <div className="p-features-grid">
                        {features.map((feature, i) => (
                            <div key={i} className="p-feature-card">
                                <span className="p-feature-icon">{feature.icon}</span>
                                <h3 className="p-feature-title">{feature.title}</h3>
                                <p className="p-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LOCAL DOMINANCE (Orbit variation) ── */}
            <section
                id="local-dominance"
                className={`p-section bg-gradient ${visibleSections['local-dominance'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="p-container">
                    <div className="p-local-content">
                        <div className="p-local-text">
                            <span className="p-tag">MARKET DOMINANCE</span>
                            <h2 className="p-section-title">
                                Built to Scale Globally
                            </h2>
                            <p className="p-section-subtitle">
                                Whether you're dropping a local capsule collection or shipping thousands of units worldwide every day, our architecture handles extreme traffic spikes flawlessly.
                            </p>

                            <ul className="p-checklist">
                                <li><strong>Zero-Downtime Drops:</strong> Infrastructure specifically designed to handle massive influxes of buyers during high-hype product launches.</li>
                                <li><strong>Multi-Currency Checkout:</strong> Seamless localized pricing and checkout experiences for your international customer base.</li>
                                <li><strong>Data Ownership:</strong> Move away from marketplace monopolies (like Amazon) and fully own your customer data for infinite retargeting.</li>
                            </ul>
                        </div>

                        <div className="p-local-visual">
                            <div className="p-orbit">
                                <div className="p-orbit-ring p-orbit-1" />
                                <div className="p-orbit-ring p-orbit-2" />
                                <div className="p-orbit-ring p-orbit-3" />
                                <div className="p-orbit-center">
                                    <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                                </div>
                                <div className="p-orbit-node n-1"><span>🧴</span></div>
                                <div className="p-orbit-node n-2"><span>🕶️</span></div>
                                <div className="p-orbit-node n-3"><span>📦</span></div>
                                <div className="p-orbit-node n-4"><span>✨</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="p-testimonials"
                className={`p-section bg-white ${visibleSections['p-testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="p-container">
                    <div className="p-section-header">
                        <span className="p-tag">INDUSTRY LEADERS</span>
                        <h2 className="p-section-title">
                            Trusted By Elite Founders
                        </h2>
                    </div>

                    <div className="p-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="p-testimonial-card">
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
            <section className="p-cta-section">
                <div className="p-cta-bg" />
                <div className="p-container">
                    <div className="p-cta-content">
                        <h2 className="p-cta-title">Ready for Your Highest Revenue Month?</h2>
                        <p className="p-cta-desc">
                            Let’s build an elite direct-to-consumer experience that makes your product irresistible and your scale inevitable.
                        </p>
                        <div className="p-cta-actions">
                            <a href="/#contact" className="p-btn-primary large">
                                <span>Book a Strategy Call</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div className="p-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default BusinessPage;
