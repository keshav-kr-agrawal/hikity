import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './SchoolPage.css';

const SchoolPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [form, setForm] = useState({
        institutionName: '',
        contactPerson: '',
        phone: '',
        email: '',
        type: 'K-12 School & Academy'
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
        <div className="school-page">
            {/* LIGHT NAVBAR */}
            <nav className={`sc-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="sc-nav-logo">
                    <div className="sc-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY EDUCATION & ACADEMY</span>
                </Link>
                <div className="sc-nav-links">
                    <Link to="/" className="sc-nav-link">Home</Link>
                    <Link to="/services" className="sc-nav-link">Services</Link>
                    <Link to="/commerce" className="sc-nav-link">Commerce</Link>
                    <Link to="/case-studies" className="sc-nav-link">Case Studies</Link>
                    <a href="#school-form" className="sc-nav-cta">Build School Portal</a>
                </div>
                <button className="sc-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`sc-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`sc-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="sc-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" className="sc-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/commerce" className="sc-nav-link" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                <Link to="/case-studies" className="sc-nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                <a href="#school-form" className="sc-nav-cta" style={{ textAlign: 'center', marginTop: '10px' }} onClick={() => setMobileMenuOpen(false)}>Build School Portal</a>
            </div>

            {/* HERO SECTION */}
            <header className="sc-hero">
                <div className="sc-hero-glow"></div>
                <div className="sc-container">
                    <div className="sc-hero-badge">
                        🎓 EDUCATIONAL INSTITUTION PORTALS & ADMISSIONS
                    </div>
                    <h1 className="sc-hero-title">
                        Digitize Admissions & Connect With <span className="sc-accent-text">Parents & Students</span>
                    </h1>
                    <p className="sc-hero-subtitle">
                        High-trust websites for schools, colleges, and coaching academies with online admission inquiry funnels, digital notice tickers, course catalogs, and event photo galleries.
                    </p>

                    <div className="sc-hero-actions">
                        <a href="#school-form" className="sc-btn-primary">Request School Website →</a>
                        <Link to="/services" className="sc-btn-secondary">View All Verticals</Link>
                    </div>
                </div>
            </header>

            {/* SCHOOL FEATURES BENTO GRID */}
            <section className="sc-features-section">
                <div className="sc-container">
                    <div className="sc-section-header">
                        <span className="sc-eyebrow">ACADEMIC EXCELLENCE PLATFORM</span>
                        <h2 className="sc-title">Everything Your Educational Institution Needs</h2>
                    </div>

                    <div className="sc-features-grid">
                        <div className="sc-feature-card">
                            <div className="sc-card-icon">📝</div>
                            <h3>Online Admission Inquiry Portal</h3>
                            <p>Capture student applications, document uploads, and entrance test registrations with automated SMS updates to parents.</p>
                        </div>
                        <div className="sc-feature-card">
                            <div className="sc-card-icon">📢</div>
                            <h3>Digital Circulars & Notice Ticker</h3>
                            <p>Publish instant school holiday announcements, exam schedules, and parent-teacher meeting notices in 1 click.</p>
                        </div>
                        <div className="sc-feature-card">
                            <div className="sc-card-icon">🏆</div>
                            <h3>Achievements & Event Gallery</h3>
                            <p>Showcase sports trophies, toppers lists, annual function highlights, and campus infrastructure photos.</p>
                        </div>
                        <div className="sc-feature-card">
                            <div className="sc-card-icon">📚</div>
                            <h3>Course & Curriculum Catalog</h3>
                            <p>Clear syllabus breakdowns, faculty profiles, fee structures, and downloadable prospectus PDFs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCHOOL FORM SECTION */}
            <section className="sc-form-section" id="school-form">
                <div className="sc-container">
                    <div className="sc-form-card">
                        <div className="sc-form-header">
                            <span className="sc-eyebrow">GROW INSTITUTION ENROLLMENTS</span>
                            <h2 className="sc-title">Request Academic Portal Setup</h2>
                            <p className="sc-subtitle">Get your school or academy website live in 48 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="sc-success-box">
                                <h3>Institution Request Submitted!</h3>
                                <p>Thank you! Our education technology team will contact your administrative office.</p>
                            </div>
                        ) : (
                            <form className="sc-form" onSubmit={handleSubmit}>
                                <div className="sc-form-grid">
                                    <div className="sc-form-group">
                                        <label>INSTITUTION NAME</label>
                                        <input type="text" name="institutionName" required placeholder="e.g. St. Xavier International Academy" value={form.institutionName} onChange={handleChange} />
                                    </div>
                                    <div className="sc-form-group">
                                        <label>PRINCIPAL / DIRECTOR NAME</label>
                                        <input type="text" name="contactPerson" required placeholder="e.g. Dr. Sunita Rao" value={form.contactPerson} onChange={handleChange} />
                                    </div>
                                    <div className="sc-form-group">
                                        <label>PHONE / WHATSAPP</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="sc-form-group">
                                        <label>OFFICIAL EMAIL</label>
                                        <input type="email" name="email" required placeholder="info@school.edu.in" value={form.email} onChange={handleChange} />
                                    </div>
                                    <div className="sc-form-group full">
                                        <label>INSTITUTION TYPE</label>
                                        <select name="type" value={form.type} onChange={handleChange} className="sc-select">
                                            <option value="K-12 School & Academy">K-12 School & Academy</option>
                                            <option value="Coaching Institute & Test Prep">Coaching Institute & Test Prep</option>
                                            <option value="College & Higher Education">College & Higher Education</option>
                                            <option value="Music, Art & Dance Academy">Music, Art & Dance Academy</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sc-form-action">
                                    <button type="submit" className="sc-btn-submit">Request Academic Portal →</button>
                                    <p className="sc-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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

export default SchoolPage;
