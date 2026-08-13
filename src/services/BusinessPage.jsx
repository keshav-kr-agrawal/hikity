import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './BusinessPage.css';

const BusinessPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-page">
            {/* NAVIGATION */}
            <nav className={`p-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="p-nav-logo">
                    <div className="p-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY ENTERPRISE</span>
                </Link>
                <div className="p-nav-links">
                    <Link to="/" className="p-nav-link">Home</Link>
                    <Link to="/services" className="p-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="p-nav-link">Commerce</Link>
                    <Link to="/build" className="p-nav-link">Build Cohort</Link>
                    <a href="#rfp" className="p-nav-cta">Submit RFP / Inquiry</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="p-hero">
                <div className="p-container">
                    <div className="p-hero-badge">
                        <span className="p-hero-badge-dot"></span>
                        Corporate & Enterprise Infrastructure
                    </div>
                    <h1 className="p-hero-title">
                        Engineered for High-Scale <span className="gold-accent">Enterprise Performance.</span>
                    </h1>
                    <p className="p-hero-subtitle">
                        Custom e-commerce platforms, omni-channel retail integrations, ERP synchronization engines, and high-frequency backend architectures designed for enterprise scale.
                    </p>
                    <div className="p-hero-stats">
                        <div className="p-stat">
                            <span className="p-stat-num">99.99%</span>
                            <span className="p-stat-label">Uptime SLA</span>
                        </div>
                        <div className="p-stat-divider"></div>
                        <div className="p-stat">
                            <span className="p-stat-num">&lt;100ms</span>
                            <span className="p-stat-label">Global API Latency</span>
                        </div>
                        <div className="p-stat-divider"></div>
                        <div className="p-stat">
                            <span className="p-stat-num">SOC 2</span>
                            <span className="p-stat-label">Ready Security</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* SOLUTIONS BENTO */}
            <section className="p-solutions-section">
                <div className="p-container">
                    <div className="p-section-header">
                        <span className="p-eyebrow">Enterprise Core</span>
                        <h2 className="p-title-large">Mission-Critical Systems for Scaled Brands</h2>
                    </div>
                    <div className="p-bento-grid">
                        <div className="p-bento-card">
                            <span className="p-card-icon">⚡</span>
                            <h3 className="p-bento-title">High-Speed Headless Storefronts</h3>
                            <p className="p-bento-desc">Custom React & Vite architectures delivering ultra-fast page load times, sub-second product filtering, and maximum conversion rates.</p>
                        </div>
                        <div className="p-bento-card">
                            <span className="p-card-icon">🔄</span>
                            <h3 className="p-bento-title">Omnichannel POS & ERP Sync</h3>
                            <p className="p-bento-desc">Real-time inventory synchronization across physical retail stores, online catalogs, warehouses, and ERP systems with zero lag.</p>
                        </div>
                        <div className="p-bento-card">
                            <span className="p-card-icon">🤖</span>
                            <h3 className="p-bento-title">Enterprise AI Workflow Bots</h3>
                            <p className="p-bento-desc">Automated order routing, WhatsApp customer notifications, AI agent support tickets, and instant automated refund handling.</p>
                        </div>
                        <div className="p-bento-card">
                            <span className="p-card-icon">📊</span>
                            <h3 className="p-bento-title">Custom Business Analytics Hub</h3>
                            <p className="p-bento-desc">Unified executive dashboards displaying real-time gross merchandise value, customer acquisition cost, retention cohorts, and inventory turn velocity.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SYSTEM ARCHITECTURE WORKFLOW */}
            <section className="p-arch-section">
                <div className="p-container">
                    <div className="p-arch-card">
                        <div className="p-section-header">
                            <span className="p-eyebrow">Architecture Flow</span>
                            <h2 className="p-title-large">Seamless Data Integration Pipeline</h2>
                        </div>
                        <div className="p-flow-grid">
                            <div className="p-flow-step">
                                <h4>1. Storefront API</h4>
                                <p>Headless web & mobile app requests</p>
                            </div>
                            <span className="p-flow-arrow">→</span>
                            <div className="p-flow-step">
                                <h4>2. Edge API Gateway</h4>
                                <p>Rate-limiting, caching, auth</p>
                            </div>
                            <span className="p-flow-arrow">→</span>
                            <div className="p-flow-step">
                                <h4>3. Real-Time Sync Engine</h4>
                                <p>Inventory & order queue</p>
                            </div>
                            <span className="p-flow-arrow">→</span>
                            <div className="p-flow-step">
                                <h4>4. ERP & WhatsApp Bot</h4>
                                <p>Warehouse & customer dispatch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY & COMPLIANCE GRID */}
            <section className="p-security-section">
                <div className="p-container">
                    <div className="p-section-header">
                        <span className="p-eyebrow">Security & Reliability</span>
                        <h2 className="p-title-large">Built for Enterprise Compliance & Stability</h2>
                    </div>
                    <div className="p-sec-grid">
                        <div className="p-sec-card">
                            <h4>256-Bit SSL Encryption</h4>
                            <p>End-to-end data encryption across all transaction channels, checkout points, and API endpoints.</p>
                        </div>
                        <div className="p-sec-card">
                            <h4>PCI-DSS Level 1 Ready</h4>
                            <p>Seamless integrations with trusted payment gateway infrastructure including Razorpay, Cashfree, and Stripe.</p>
                        </div>
                        <div className="p-sec-card">
                            <h4>Dedicated Account Engineer</h4>
                            <p>Assigned senior DevOps and full-stack software engineers for guaranteed 24/7 technical response.</p>
                        </div>
                        <div className="p-sec-card">
                            <h4>Automated Daily Backups</h4>
                            <p>Multi-region database snapshots ensuring complete disaster recovery resilience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* RFP INQUIRY FORM */}
            <section className="p-rfp-section" id="rfp">
                <div className="p-container">
                    <div className="p-rfp-card">
                        <div className="p-section-header">
                            <span className="p-eyebrow">Enterprise Consultation</span>
                            <h2 className="p-title-large">Request an Enterprise Architecture Brief</h2>
                        </div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>Request Received</h3>
                                <p style={{ color: '#475569' }}>Our lead enterprise architect will contact your team within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="p-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity Enterprise Architecture RFP Inquiry" />
                                <div className="p-form-grid">
                                    <div className="p-form-group">
                                        <label>FULL NAME</label>
                                        <input type="text" name="name" placeholder="e.g. Vikram Mehta" required />
                                    </div>
                                    <div className="p-form-group">
                                        <label>CORPORATE EMAIL</label>
                                        <input type="email" name="email" placeholder="vikram@enterprise.com" required />
                                    </div>
                                    <div className="p-form-group">
                                        <label>ORGANIZATION / BRAND NAME</label>
                                        <input type="text" name="company" placeholder="e.g. Acme Brands India" required />
                                    </div>
                                    <div className="p-form-group">
                                        <label>ESTIMATED ANNUAL GMV</label>
                                        <select name="gmv" className="p-select" required>
                                            <option value="₹50L - ₹2 Cr">₹50 Lakhs - ₹2 Crores</option>
                                            <option value="₹2 Cr - ₹10 Cr">₹2 Crores - ₹10 Crores</option>
                                            <option value="₹10 Cr+">₹10 Crores +</option>
                                        </select>
                                    </div>
                                    <div className="p-form-group full">
                                        <label>SYSTEM REQUIREMENTS / RFP BRIEF</label>
                                        <textarea name="brief" rows="4" placeholder="Outline your current technical setup, pain points, desired integrations, and timeline..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="p-submit-btn">Submit Enterprise Inquiry →</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <EnterpriseFooter />
        </div>
    );
};

export default BusinessPage;
