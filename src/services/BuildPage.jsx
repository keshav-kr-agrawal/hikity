import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './BuildPage.css';

const BuildPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        stage: 'Idea Stage',
        budget: '₹50k - ₹1.5L',
        details: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="build-page">
            {/* LIGHT NAVBAR */}
            <nav className={`b-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="b-nav-logo">
                    <div className="b-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY BUILD</span>
                </Link>
                <div className="b-nav-links">
                    <Link to="/" className="b-nav-link">Home</Link>
                    <Link to="/services" className="b-nav-link">Services</Link>
                    <Link to="/commerce" className="b-nav-link">Commerce</Link>
                    <Link to="/case-studies" className="b-nav-link">Case Studies</Link>
                    <a href="#pitch-form" className="b-nav-cta">Apply For Build</a>
                </div>
                <button className="b-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`b-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`b-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="b-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" className="b-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/commerce" className="b-nav-link" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                <Link to="/case-studies" className="b-nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                <a href="#pitch-form" className="b-nav-cta" style={{ textAlign: 'center', marginTop: '10px' }} onClick={() => setMobileMenuOpen(false)}>Apply For Build</a>
            </div>

            {/* HERO SECTION */}
            <header className="b-hero">
                <div className="b-hero-glow"></div>
                <div className="b-container">
                    <div className="b-hero-badge">
                        <span className="b-hero-badge-dot"></span>
                        HIKITY BUILD INITIATIVE FOR FOUNDERS
                    </div>
                    <h1 className="b-hero-title">
                        We Build & Scale Your Startup With <span className="b-title-accent">Zero Upfront Fee</span>
                    </h1>
                    <p className="b-hero-subtitle">
                        Stop spending ₹5L+ on legacy dev agencies. Hikity Build partners with ambitious founders to engineer world-class web applications, mobile platforms, and AI systems in a 10-day sprint.
                    </p>

                    {/* LIVE STATS BAR */}
                    <div className="b-stats-bar">
                        <div className="b-stat">
                            <span className="b-stat-num">70 / 30</span>
                            <span className="b-stat-lbl">Equity & Growth Partner</span>
                        </div>
                        <div className="b-stat-divider"></div>
                        <div className="b-stat">
                            <span className="b-stat-num">10 Days</span>
                            <span className="b-stat-lbl">Sprint Launch Window</span>
                        </div>
                        <div className="b-stat-divider"></div>
                        <div className="b-stat">
                            <span className="b-stat-num">100%</span>
                            <span className="b-stat-lbl">Managed Tech Stack</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* PAIN VS SOLUTION COMPARISON */}
            <section className="b-comparison-section">
                <div className="b-container">
                    <div className="b-section-header">
                        <span className="b-eyebrow">WHY FOUNDERS CHOOSE HIKITY BUILD</span>
                        <h2 className="b-title">Traditional Agency vs. Hikity Build Sprint</h2>
                    </div>

                    <div className="b-comparison-grid">
                        <div className="b-comp-card traditional">
                            <span className="b-comp-tag bad">TRADITIONAL DEV AGENCIES</span>
                            <h3>High Risk & Slow Progress</h3>
                            <ul className="b-comp-list">
                                <li>❌ ₹3L - ₹8L upfront cash deposit required</li>
                                <li>❌ 3 to 6 months of endless delays & bug fixes</li>
                                <li>❌ Agencies disappear right after initial delivery</li>
                                <li>❌ You handle hosting, servers, and security alone</li>
                                <li>❌ Expensive hourly charges for basic updates</li>
                            </ul>
                        </div>

                        <div className="b-comp-card hikity">
                            <span className="b-comp-tag good">HIKITY BUILD MODEL</span>
                            <h3>Fast, Risk-Free & Fully Managed</h3>
                            <ul className="b-comp-list">
                                <li><span className="b-check">✓</span> ₹0 upfront developer fee barrier</li>
                                <li><span className="b-check">✓</span> 10-day high-speed execution sprint</li>
                                <li><span className="b-check">✓</span> Dedicated long-term tech partner alignment</li>
                                <li><span className="b-check">✓</span> 100% managed cloud, SSL, CDN & database</li>
                                <li><span className="b-check">✓</span> Continuous feature updates and scale support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUILD PILLARS BENTO GRID */}
            <section className="b-pillars-section">
                <div className="b-container">
                    <div className="b-section-header">
                        <span className="b-eyebrow">WHAT WE ENGINEER FOR YOU</span>
                        <h2 className="b-title">The Complete Startup Tech Ecosystem</h2>
                    </div>

                    <div className="b-pillars-grid">
                        <div className="b-pillar-card">
                            <div className="b-pillar-num">01</div>
                            <h3>Brand & Product Design</h3>
                            <p>Premium UI/UX design, luxury typography, brand identity, and interactive prototypes built to captivate investors and users.</p>
                        </div>
                        <div className="b-pillar-card">
                            <div className="b-pillar-num">02</div>
                            <h3>Full-Stack Web Apps</h3>
                            <p>High-speed web platforms with instant load times, custom admin dashboards, dynamic CMS, and global CDN delivery.</p>
                        </div>
                        <div className="b-pillar-card">
                            <div className="b-pillar-num">03</div>
                            <h3>D2C & E-Commerce Engines</h3>
                            <p>Integrated payment gateways (UPI, Cards, NetBanking), automated inventory sync, WhatsApp order receipts, and cart recovery.</p>
                        </div>
                        <div className="b-pillar-card">
                            <div className="b-pillar-num">04</div>
                            <h3>Autonomous AI Workflows</h3>
                            <p>Custom-trained AI agents for customer support automation, automated lead capture, and intelligent data synthesis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4-STEP SPRINT BLUEPRINT */}
            <section className="b-blueprint-section">
                <div className="b-container">
                    <div className="b-section-header">
                        <span className="b-eyebrow">OUR 10-DAY ROADMAP</span>
                        <h2 className="b-title">From Concept Pitch to Market Launch</h2>
                    </div>

                    <div className="b-steps-grid">
                        <div className="b-step-item">
                            <span className="b-step-badge">DAY 1</span>
                            <h4>Application & Alignment</h4>
                            <p>Pitch your idea. We review unit economics, user scope, and technical roadmap alignment.</p>
                        </div>
                        <div className="b-step-item">
                            <span className="b-step-badge">DAY 2-4</span>
                            <h4>Architecture & UX Design</h4>
                            <p>Wireframing full user journeys, database schemas, and pixel-perfect light design systems.</p>
                        </div>
                        <div className="b-step-item">
                            <span className="b-step-badge">DAY 5-8</span>
                            <h4>Rapid Engineering Sprint</h4>
                            <p>Building core features, payment integrations, responsive UI components, and admin panels.</p>
                        </div>
                        <div className="b-step-item">
                            <span className="b-step-badge">DAY 9-10</span>
                            <h4>Testing & Public Launch</h4>
                            <p>Security audit, domain mapping, SEO setup, and live deployment for real customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PITCH APPLICATION FORM */}
            <section className="b-pitch-section" id="pitch-form">
                <div className="b-container">
                    <div className="b-pitch-card">
                        <div className="b-pitch-header">
                            <span className="b-eyebrow">APPLY FOR HIKITY BUILD</span>
                            <h2 className="b-title">Ready To Build Your Venture?</h2>
                            <p className="b-subtitle">Submit your pitch. We review submissions within 24 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="b-success-alert">
                                <h3>Pitch Received Successfully!</h3>
                                <p>Thank you! Our technical team is reviewing your pitch and will contact you via email shortly.</p>
                            </div>
                        ) : (
                            <form className="b-form" onSubmit={handleSubmit}>
                                <div className="b-form-grid">
                                    <div className="b-form-group">
                                        <label>YOUR NAME</label>
                                        <input type="text" name="name" required placeholder="e.g. Rahul Sharma" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="b-form-group">
                                        <label>EMAIL ADDRESS</label>
                                        <input type="email" name="email" required placeholder="name@company.com" value={formData.email} onChange={handleChange} />
                                    </div>
                                    <div className="b-form-group">
                                        <label>PHONE / WHATSAPP</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
                                    </div>
                                    <div className="b-form-group">
                                        <label>CURRENT PROJECT STAGE</label>
                                        <select name="stage" value={formData.stage} onChange={handleChange} className="b-select">
                                            <option value="Idea Stage">Idea Stage / Concept</option>
                                            <option value="MVP Needed">MVP Needed</option>
                                            <option value="Existing Product Scale">Existing Product Scale</option>
                                        </select>
                                    </div>
                                    <div className="b-form-group full">
                                        <label>PROJECT DETAILS & VISION</label>
                                        <textarea name="details" rows="4" required placeholder="Briefly describe what your venture does and what tech you need built..." value={formData.details} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="b-form-submit">
                                    <button type="submit" className="b-btn-submit">Submit Pitch Application →</button>
                                    <p className="b-direct-email">Or email directly to <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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

export default BuildPage;
