import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './WorkPage.css';

const WorkPage = () => {
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
        <div className="w-page">
            {/* NAVIGATION */}
            <nav className={`w-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="w-nav-logo">
                    <div className="w-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY PORTFOLIOS</span>
                </Link>
                <div className="w-nav-links">
                    <Link to="/" className="w-nav-link">Home</Link>
                    <Link to="/services" className="w-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="w-nav-link">Commerce</Link>
                    <a href="#onboard" className="w-nav-cta">Build Executive Portfolio</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="w-hero">
                <div className="w-container">
                    <div className="w-hero-badge">
                        💼 Executive & Agency Portfolios
                    </div>
                    <h1 className="w-hero-title">
                        Command High-Ticket Clients with a <span className="blue-accent">World-Class Portfolio.</span>
                    </h1>
                    <p className="w-hero-subtitle">
                        Custom executive portfolio websites, agency case study showcases, interactive resume portals, and direct Calendly/WhatsApp appointment booking for consultants, founders, and creators.
                    </p>
                    <div className="w-hero-stats">
                        <div className="w-stat">
                            <span className="w-stat-num">3.5x</span>
                            <span className="w-stat-label">Client Conversion Boost</span>
                        </div>
                        <div className="w-stat-divider"></div>
                        <div className="w-stat">
                            <span className="w-stat-num">&lt;100ms</span>
                            <span className="w-stat-label">Ultra-Fast Load Times</span>
                        </div>
                        <div className="w-stat-divider"></div>
                        <div className="w-stat">
                            <span className="w-stat-num">₹30k/yr</span>
                            <span className="w-stat-label">Flat Managed Pricing</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* SOLUTIONS BENTO */}
            <section className="w-solutions-section">
                <div className="w-container">
                    <div className="w-section-header">
                        <span className="w-eyebrow">Portfolio Core</span>
                        <h2 className="w-title-large">High-Impact Features for Industry Leaders</h2>
                    </div>
                    <div className="w-bento-grid">
                        <div className="w-bento-card">
                            <span className="w-card-icon">🚀</span>
                            <h3 className="w-bento-title">Interactive Case Study Layouts</h3>
                            <p className="w-bento-desc">Showcase client challenges, strategic solutions, and measurable revenue ROI with interactive before/after metric charts.</p>
                        </div>
                        <div className="w-bento-card">
                            <span className="w-card-icon">📅</span>
                            <h3 className="w-bento-title">Direct Meeting Scheduling</h3>
                            <p className="w-bento-desc">Integrate Calendly, SavvyCal, or WhatsApp booking directly into your portfolio so high-intent prospects schedule calls instantly.</p>
                        </div>
                        <div className="w-bento-card">
                            <span className="w-card-icon">⭐</span>
                            <h3 className="w-bento-title">Social Proof & Client Testimonials</h3>
                            <p className="w-bento-desc">Display verified client reviews, video testimonials, press badges, and featured publication logos to establish immediate authority.</p>
                        </div>
                        <div className="w-bento-card">
                            <span className="w-card-icon">📱</span>
                            <h3 className="w-bento-title">Digital Executive Business Card</h3>
                            <p className="w-bento-desc">Frictionless mobile PWA experience with instant contact saving (vCard download) and one-tap social link aggregation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDY METRICS BENTO */}
            <section className="w-cases-section">
                <div className="w-container">
                    <div className="w-cases-card">
                        <div className="w-section-header">
                            <span className="w-eyebrow">Proven Results</span>
                            <h2 className="w-title-large">Real Impact for Executive Portfolios</h2>
                        </div>
                        <div className="cases-grid">
                            <div className="case-item">
                                <span className="case-stat-badge">+$120K</span>
                                <h4>Consulting Revenue Generated</h4>
                                <p>Fractional CTO portfolio platform resulting in 4 new retainer contracts within 30 days of launch.</p>
                            </div>
                            <div className="case-item">
                                <span className="case-stat-badge">4.8/5</span>
                                <h4>Client Inbound Quality Rate</h4>
                                <p>Replaced unqualified lead form inquiries with pre-qualified high-budget calendar bookings.</p>
                            </div>
                            <div className="case-item">
                                <span className="case-stat-badge">100%</span>
                                <h4>Search Ranking Visibility</h4>
                                <p>Ranked #1 for personal founder name and niche agency consultancy keywords on Google.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSULTATION FORM */}
            <section className="w-onboard-section" id="onboard">
                <div className="w-container">
                    <div className="w-form-card">
                        <div className="w-section-header">
                            <span className="w-eyebrow">Portfolio Brief</span>
                            <h2 className="w-title-large">Build Your Executive Portfolio Today</h2>
                        </div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>Inquiry Received!</h3>
                                <p style={{ color: '#475569' }}>Our portfolio design director will contact you for a discovery session within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="w-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity Executive Portfolio Inquiry" />
                                <div className="w-form-grid">
                                    <div className="w-form-group">
                                        <label>FULL NAME</label>
                                        <input type="text" name="name" placeholder="e.g. Siddharth Verma" required />
                                    </div>
                                    <div className="w-form-group">
                                        <label>EMAIL ADDRESS</label>
                                        <input type="email" name="email" placeholder="siddharth@exec.com" required />
                                    </div>
                                    <div className="w-form-group">
                                        <label>PROFESSION / TITLE</label>
                                        <input type="text" name="title" placeholder="e.g. Fractional CMO / Founder / Architect" required />
                                    </div>
                                    <div className="w-form-group">
                                        <label>LINKEDIN / CURRENT WEBSITE</label>
                                        <input type="text" name="linkedin" placeholder="https://linkedin.com/in/..." required />
                                    </div>
                                    <div className="w-form-group full">
                                        <label>PORTFOLIO GOALS & CASE STUDIES</label>
                                        <textarea name="brief" rows="4" placeholder="Tell us about the key projects you want to feature, target client profiles, and desired call-to-action..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="w-submit-btn">Request Portfolio Design →</button>
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

export default WorkPage;
