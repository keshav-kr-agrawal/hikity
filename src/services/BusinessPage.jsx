import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './BusinessPage.css';

const BusinessPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        company: '',
        name: '',
        email: '',
        phone: '',
        employees: '10-50',
        requirement: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-page">
            {/* LIGHT NAVBAR */}
            <nav className={`p-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="p-nav-logo">
                    <div className="p-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY ENTERPRISE</span>
                </Link>
                <div className="p-nav-links">
                    <Link to="/" className="p-nav-link">Home</Link>
                    <Link to="/services" className="p-nav-link">Services</Link>
                    <Link to="/commerce" className="p-nav-link">Commerce</Link>
                    <a href="#biz-form" className="p-nav-cta">Book Enterprise Demo</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="p-hero">
                <div className="p-hero-glow"></div>
                <div className="p-container">
                    <div className="p-hero-badge">
                        ENTERPRISE INFRASTRUCTURE & AUTOMATION
                    </div>
                    <h1 className="p-hero-title">
                        Corporate Tech Systems Built For <span className="p-accent-text">High-Scale Businesses</span>
                    </h1>
                    <p className="p-hero-subtitle">
                        Streamline multi-branch operations, automated billing, inventory synchronization, custom ERP dashboards, and dedicated cloud servers with 99.99% uptime SLA.
                    </p>

                    <div className="p-hero-actions">
                        <a href="#biz-form" className="p-btn-primary">Schedule Corporate Consultation →</a>
                        <Link to="/services" className="p-btn-secondary">Explore All Verticals</Link>
                    </div>
                </div>
            </header>

            {/* ENTERPRISE CORE SUITE BENTO GRID */}
            <section className="p-suite-section">
                <div className="p-container">
                    <div className="p-section-header">
                        <span className="p-eyebrow">ENTERPRISE SYSTEM MODULES</span>
                        <h2 className="p-title">Everything Your Business Needs To Scale</h2>
                    </div>

                    <div className="p-suite-grid">
                        <div className="p-suite-card">
                            <div className="p-card-icon">⚡</div>
                            <h3>Custom ERP & CRM Hub</h3>
                            <p>Centralized business control center for tracking leads, managing staff permissions, and real-time operational analytics.</p>
                        </div>
                        <div className="p-suite-card">
                            <div className="p-card-icon">📄</div>
                            <h3>Automated Invoicing & GST</h3>
                            <p>Generate compliant GST tax invoices, automated recurring billing, PDF exports, and instant customer payment links.</p>
                        </div>
                        <div className="p-suite-card">
                            <div className="p-card-icon">🏬</div>
                            <h3>Multi-Branch Inventory Sync</h3>
                            <p>Real-time stock management across warehouses and retail branches with automated low-stock reorder triggers.</p>
                        </div>
                        <div className="p-suite-card">
                            <div className="p-card-icon">🔒</div>
                            <h3>Enterprise Security & Backup</h3>
                            <p>Bank-grade encryption, automated daily offsite database backups, custom roles, and 24/7 dedicated system monitoring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI COMPARISON SECTION */}
            <section className="p-roi-section">
                <div className="p-container">
                    <div className="p-section-header">
                        <span className="p-eyebrow">HIGH EFFICIENCY COST STRUCTURE</span>
                        <h2 className="p-title">Traditional IT Retainers vs Hikity Enterprise</h2>
                    </div>

                    <div className="p-roi-box">
                        <div className="p-roi-col old">
                            <h3>In-House IT & Legacy Consultants</h3>
                            <ul>
                                <li>❌ ₹12L+ annual salary per senior developer</li>
                                <li>❌ Complex server maintenance and outage risks</li>
                                <li>❌ Fragmented tools without unified integration</li>
                                <li>❌ Slow updates and high security vulnerabilities</li>
                            </ul>
                        </div>
                        <div className="p-roi-col new">
                            <h3>Hikity Enterprise Infrastructure</h3>
                            <ul>
                                <li><span className="p-check">✓</span> Flat annual managed technology subscription</li>
                                <li><span className="p-check">✓</span> 99.99% guaranteed server SLA and instant support</li>
                                <li><span className="p-check">✓</span> Unified custom software tailored to your workflows</li>
                                <li><span className="p-check">✓</span> Continuous maintenance, patches, and feature updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORPORATE DEMO FORM */}
            <section className="p-form-section" id="biz-form">
                <div className="p-container">
                    <div className="p-form-card">
                        <div className="p-form-header">
                            <span className="p-eyebrow">SCHEDULE A DEMO</span>
                            <h2 className="p-title">Request Enterprise Systems Demo</h2>
                            <p className="p-subtitle">Our solutions architects will contact your team within 12 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="p-success-box">
                                <h3>Corporate Inquiry Submitted!</h3>
                                <p>Thank you! Our technical director will reach out to schedule a live system walkthrough.</p>
                            </div>
                        ) : (
                            <form className="p-form" onSubmit={handleSubmit}>
                                <div className="p-form-grid">
                                    <div className="p-form-group">
                                        <label>COMPANY NAME</label>
                                        <input type="text" name="company" required placeholder="Acme Logistics Pvt Ltd" value={form.company} onChange={handleChange} />
                                    </div>
                                    <div className="p-form-group">
                                        <label>YOUR NAME & TITLE</label>
                                        <input type="text" name="name" required placeholder="Vikram Mehta (Director)" value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="p-form-group">
                                        <label>CORPORATE EMAIL</label>
                                        <input type="email" name="email" required placeholder="vikram@acme.com" value={form.email} onChange={handleChange} />
                                    </div>
                                    <div className="p-form-group">
                                        <label>PHONE NUMBER</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 00000" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="p-form-group full">
                                        <label>SYSTEM REQUIREMENTS & GOALS</label>
                                        <textarea name="requirement" rows="4" required placeholder="Describe your business operations, software needs, or current bottlenecks..." value={form.requirement} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="p-form-action">
                                    <button type="submit" className="p-btn-submit">Submit Enterprise Request →</button>
                                    <p className="p-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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
