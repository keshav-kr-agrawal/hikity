import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './WorkPage.css';

const WorkPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        title: '',
        phone: '',
        email: '',
        roleType: 'Founder / Executive'
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
        <div className="w-page">
            {/* LIGHT NAVBAR */}
            <nav className="wk-nav">
                <Link to="/" className="wk-nav-logo">
                    <div className="wk-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY PORTFOLIO</span>
                </Link>
                <div className="wk-nav-links">
                    <Link to="/" className="wk-nav-link">Home</Link>
                    <Link to="/services" className="wk-nav-link">Services</Link>
                    <Link to="/commerce" className="wk-nav-link">Commerce</Link>
                    <Link to="/case-studies" className="wk-nav-link">Case Studies</Link>
                    <a href="#work-form" className="wk-nav-cta">Build Portfolio Site</a>
                </div>
                <button className="wk-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`wk-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`wk-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="wk-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" className="wk-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/commerce" className="wk-nav-link" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                <Link to="/case-studies" className="wk-nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                <a href="#work-form" className="wk-nav-cta" style={{ textAlign: 'center', marginTop: '10px' }} onClick={() => setMobileMenuOpen(false)}>Build Portfolio Site</a>
            </div>

            {/* HERO SECTION */}
            <header className="wk-hero">
                <div className="wk-hero-glow"></div>
                <div className="wk-container">
                    <div className="wk-hero-badge">
                        💼 EXECUTIVE & CREATOR PORTFOLIO PLATFORMS
                    </div>
                    <h1 className="wk-hero-title">
                        Build Your Personal Brand With A <span className="wk-accent-text">World-Class Portfolio</span>
                    </h1>
                    <p className="wk-hero-subtitle">
                        High-impact personal websites for founders, software architects, creative directors, and consultants with interactive case studies, press kit media features, and client booking.
                    </p>

                    <div className="wk-hero-actions">
                        <a href="#work-form" className="wk-btn-primary">Build Executive Portfolio →</a>
                        <Link to="/services" className="wk-btn-secondary">View All Verticals</Link>
                    </div>
                </div>
            </header>

            {/* PORTFOLIO FEATURES BENTO GRID */}
            <section className="wk-features-section">
                <div className="wk-container">
                    <div className="wk-section-header">
                        <span className="wk-eyebrow">EXECUTIVE PERSONAL BRANDING</span>
                        <h2 className="wk-title">Engineered To Stand Out In Your Industry</h2>
                    </div>

                    <div className="wk-features-grid">
                        <div className="wk-feature-card">
                            <div className="wk-card-icon">🚀</div>
                            <h3>Interactive Case Study Layouts</h3>
                            <p>Showcase key metrics, problem statements, technical architecture, and impact results for your flagship projects.</p>
                        </div>
                        <div className="wk-feature-card">
                            <div className="wk-card-icon">📰</div>
                            <h3>Media Press Kit & Podcasts</h3>
                            <p>Embed podcast interviews, keynotes, newspaper features, and downloadable high-res press photos.</p>
                        </div>
                        <div className="wk-feature-card">
                            <div className="wk-card-icon">📅</div>
                            <h3>Advisory & Speaking Booking</h3>
                            <p>Allow companies and conference organizers to book advisory sessions or speaking keynotes directly.</p>
                        </div>
                        <div className="wk-feature-card">
                            <div className="wk-card-icon">⚡</div>
                            <h3>Custom Domain & SEO Rank</h3>
                            <p>Rank #1 for your personal name on Google Search with custom domain mapping and fast CDN delivery.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORK FORM SECTION */}
            <section className="wk-form-section" id="work-form">
                <div className="wk-container">
                    <div className="wk-form-card">
                        <div className="wk-form-header">
                            <span className="wk-eyebrow">ELEVATE YOUR CAREER & BRAND</span>
                            <h2 className="wk-title">Request Personal Portfolio Website</h2>
                            <p className="wk-subtitle">We design and launch your custom portfolio in 48 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="wk-success-box">
                                <h3>Portfolio Request Submitted!</h3>
                                <p>Thank you! Our personal branding team will contact you to curate your case studies.</p>
                            </div>
                        ) : (
                            <form className="wk-form" onSubmit={handleSubmit}>
                                <div className="wk-form-grid">
                                    <div className="wk-form-group">
                                        <label>YOUR FULL NAME</label>
                                        <input type="text" name="name" required placeholder="e.g. Vikram Malhotra" value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="wk-form-group">
                                        <label>CURRENT TITLE / ROLE</label>
                                        <input type="text" name="title" required placeholder="e.g. Founder & Chief Architect" value={form.title} onChange={handleChange} />
                                    </div>
                                    <div className="wk-form-group">
                                        <label>PHONE / WHATSAPP</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="wk-form-group">
                                        <label>EMAIL ADDRESS</label>
                                        <input type="email" name="email" required placeholder="name@domain.com" value={form.email} onChange={handleChange} />
                                    </div>
                                    <div className="wk-form-group full">
                                        <label>ROLE CATEGORY</label>
                                        <select name="roleType" value={form.roleType} onChange={handleChange} className="wk-select">
                                            <option value="Founder / Executive">Founder / C-Suite Executive</option>
                                            <option value="Software Engineer / Architect">Software Engineer / Architect</option>
                                            <option value="Creative Director / Designer">Creative Director / Designer</option>
                                            <option value="Consultant / Advisory">Consultant / Business Advisor</option>
                                            <option value="Speaker / Author">Public Speaker / Author</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="wk-form-action">
                                    <button type="submit" className="wk-btn-submit">Request Portfolio Site →</button>
                                    <p className="wk-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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
