import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './BuildPage.css';

const BuildPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <div className="build-page">
            {/* NAVIGATION */}
            <nav className={`b-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="b-nav-logo">
                    <div className="b-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY BUILD</span>
                </Link>
                <div className="b-nav-links">
                    <Link to="/" className="b-nav-link">Home</Link>
                    <Link to="/services" className="b-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="b-nav-link">Hikity Commerce</Link>
                    <Link to="/women" className="b-nav-link">Women Initiative</Link>
                    <a href="#apply" className="b-nav-cta">Apply to Cohort</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="build-hero">
                <div className="build-container">
                    <div className="build-hero-badge">
                        <span className="build-hero-badge-dot"></span>
                        Q3 Cohort Applications Open
                    </div>
                    <h1 className="build-hero-title">
                        Architecting the Next Generation of <span className="gold-text">High-Growth Founders.</span>
                    </h1>
                    <p className="build-hero-subtitle">
                        An exclusive 4-week technology build program for visionary founders. We design, develop, and deploy your complete web, mobile, and autonomous AI ecosystem with 100% IP ownership.
                    </p>
                    <div className="build-hero-stats">
                        <div className="b-stat">
                            <span className="b-stat-num">₹30k/yr</span>
                            <span className="b-stat-label">Flat Managed Pricing</span>
                        </div>
                        <div className="b-stat-divider"></div>
                        <div className="b-stat">
                            <span className="b-stat-num">4 Weeks</span>
                            <span className="b-stat-label">Sprint Delivery</span>
                        </div>
                        <div className="b-stat-divider"></div>
                        <div className="b-stat">
                            <span className="b-stat-num">100% IP</span>
                            <span className="b-stat-label">Full Founder Ownership</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* PROGRAM ARCHITECTURE BENTO */}
            <section className="build-program-section">
                <div className="build-container">
                    <div className="build-section-header">
                        <span className="build-eyebrow">Program Architecture</span>
                        <h2 className="build-title-large">Everything Required to Launch & Scale</h2>
                    </div>
                    <div className="build-bento-grid">
                        <div className="build-bento-card">
                            <span className="b-card-num">01</span>
                            <h3 className="build-bento-title">Identity & Brand System</h3>
                            <p className="build-bento-desc">Bespoke luxury brand architecture, typography, iconography, and high-conversion design guidelines engineered to establish instant market authority.</p>
                        </div>
                        <div className="build-bento-card">
                            <span className="b-card-num">02</span>
                            <h3 className="build-bento-title">Web & Mobile Ecosystems</h3>
                            <p className="build-bento-desc">Custom-coded web applications, native progressive PWA platforms, and frictionless checkout systems optimized for speed and conversion.</p>
                        </div>
                        <div className="build-bento-card">
                            <span className="b-card-num">03</span>
                            <h3 className="build-bento-title">Autonomous AI Agents</h3>
                            <p className="build-bento-desc">Custom-trained AI agents for 24/7 customer support, automated lead qualification, inventory updates, and direct WhatsApp commerce automation.</p>
                        </div>
                        <div className="build-bento-card">
                            <span className="b-card-num">04</span>
                            <h3 className="build-bento-title">Cloud Infrastructure & Security</h3>
                            <p className="build-bento-desc">Enterprise-grade hosting setup, automated SSL, global CDN distribution, edge serverless API deployment, and zero-downtime database replication.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4-WEEK SPRINT TIMELINE */}
            <section className="build-sprint-section">
                <div className="build-container">
                    <div className="build-section-header">
                        <span className="build-eyebrow">Sprint Roadmap</span>
                        <h2 className="build-title-large">From Concept to Live Deployment in 28 Days</h2>
                    </div>
                    <div className="sprint-timeline">
                        <div className="sprint-step">
                            <span className="sprint-week-pill">Week 1</span>
                            <h4>Blueprint & Wireframes</h4>
                            <p>Deep discovery workshop, user journey mapping, visual design mockups, and technical architecture sign-off.</p>
                        </div>
                        <div className="sprint-step">
                            <span className="sprint-week-pill">Week 2</span>
                            <h4>Engineering & AI Training</h4>
                            <p>Full-stack component development, API integrations, and fine-tuning custom AI customer workflow agents.</p>
                        </div>
                        <div className="sprint-step">
                            <span className="sprint-week-pill">Week 3</span>
                            <h4>QA & Security Audit</h4>
                            <p>Cross-device responsiveness testing, speed optimization, payment gateway testing, and vulnerability auditing.</p>
                        </div>
                        <div className="sprint-step">
                            <span className="sprint-week-pill">Week 4</span>
                            <h4>Live Launch & Handoff</h4>
                            <p>Domain configuration, production deployment, team training, documentation handoff, and marketing launch rollout.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INVESTMENT & COMPARISON MATRIX */}
            <section className="build-investment-section">
                <div className="build-container">
                    <div className="build-section-header">
                        <span className="build-eyebrow">Why Hikity Build</span>
                        <h2 className="build-title-large">Comparing Your Technical Partner Options</h2>
                    </div>
                    <div className="build-matrix-card">
                        <div className="matrix-grid">
                            <div className="matrix-col">
                                <h3 className="matrix-col-title">Traditional Agency</h3>
                                <p className="matrix-col-sub">₹5L – ₹15L initial quote</p>
                                <ul>
                                    <li>❌ 3-6 months delivery timelines</li>
                                    <li>❌ Heavy hourly overage billing</li>
                                    <li>❌ Generic template frameworks</li>
                                    <li>❌ No integrated AI agent training</li>
                                </ul>
                            </div>
                            <div className="matrix-col hikity-col">
                                <h3 className="matrix-col-title">Hikity Build Program</h3>
                                <p className="matrix-col-sub">From ₹30k/yr fully managed</p>
                                <ul>
                                    <li><span className="b-check">✓</span> 4-week guaranteed deployment</li>
                                    <li><span className="b-check">✓</span> 100% IP & codebase ownership</li>
                                    <li><span className="b-check">✓</span> Autonomous AI agent included</li>
                                    <li><span className="b-check">✓</span> Continuous hosting & updates</li>
                                </ul>
                            </div>
                            <div className="matrix-col">
                                <h3 className="matrix-col-title">In-House Dev Team</h3>
                                <p className="matrix-col-sub">₹25L+ annual payroll</p>
                                <ul>
                                    <li>❌ High recruiter & hiring friction</li>
                                    <li>❌ Ongoing equity dilution</li>
                                    <li>❌ Management & onboarding overhead</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* APPLICATION TERMINAL */}
            <section className="build-apply-section" id="apply">
                <div className="build-container">
                    <div className="build-apply-card">
                        <div className="build-section-header">
                            <span className="build-eyebrow">Cohort Application</span>
                            <h2 className="build-title-large">Apply for the Hikity Build Program</h2>
                        </div>
                        {formSubmitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#1c1e21', marginBottom: '12px' }}>Application Submitted!</h3>
                                <p style={{ color: '#585a5e' }}>Our technical directors will review your application and reach out within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="build-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity Build Program Cohort Application" />
                                <div className="b-form-grid">
                                    <div className="b-form-group">
                                        <label>YOUR NAME</label>
                                        <input type="text" name="name" placeholder="e.g. Rahul Sharma" required />
                                    </div>
                                    <div className="b-form-group">
                                        <label>EMAIL ADDRESS</label>
                                        <input type="email" name="email" placeholder="rahul@startup.com" required />
                                    </div>
                                    <div className="b-form-group">
                                        <label>COMPANY / STARTUP NAME</label>
                                        <input type="text" name="company" placeholder="e.g. Acme Tech" required />
                                    </div>
                                    <div className="b-form-group">
                                        <label>TARGET LAUNCH TIMELINE</label>
                                        <select name="timeline" className="b-select" required>
                                            <option value="Immediate">Immediate (Within 2 Weeks)</option>
                                            <option value="Next 30 Days">Next 30 Days</option>
                                            <option value="Q3/Q4 Roadmap">Q3/Q4 Roadmap</option>
                                        </select>
                                    </div>
                                    <div className="b-form-group full">
                                        <label>PROJECT BRIEF / PRODUCT VISION</label>
                                        <textarea name="brief" rows="4" placeholder="Tell us about the product you want to build, key features, and your target audience..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="b-submit-btn">Submit Application →</button>
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
