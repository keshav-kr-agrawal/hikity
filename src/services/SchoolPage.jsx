import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './SchoolPage.css';

const SchoolPage = () => {
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
        <div className="school-page">
            {/* NAVIGATION */}
            <nav className={`s-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="s-nav-logo">
                    <div className="s-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY EDUTECH</span>
                </Link>
                <div className="s-nav-links">
                    <Link to="/" className="s-nav-link">Home</Link>
                    <Link to="/services" className="s-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="s-nav-link">Commerce</Link>
                    <a href="#onboard" className="s-nav-cta">Digitize Your School</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="school-hero">
                <div className="school-container">
                    <div className="school-hero-badge">
                        🏫 Schools, Institutes & Universities
                    </div>
                    <h1 className="school-hero-title">
                        Transform Your School into a <span className="navy-accent">Tech-First Institution.</span>
                    </h1>
                    <p className="school-hero-subtitle">
                        Digital online admission portals, automated fee payment collection, digital prospectus virtual tours, parent WhatsApp notification bots, and student performance management systems.
                    </p>
                    <div className="school-hero-stats">
                        <div className="s-stat">
                            <span className="s-stat-num">100%</span>
                            <span className="s-stat-label">Paperless Admissions</span>
                        </div>
                        <div className="s-stat-divider"></div>
                        <div className="s-stat">
                            <span className="s-stat-num">0%</span>
                            <span className="s-stat-label">Fee Delay Penalties</span>
                        </div>
                        <div className="s-stat-divider"></div>
                        <div className="s-stat">
                            <span className="s-stat-num">₹30k/yr</span>
                            <span className="s-stat-label">Flat Managed Plan</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* SOLUTIONS BENTO */}
            <section className="school-solutions-section">
                <div className="school-container">
                    <div className="school-section-header">
                        <span className="school-eyebrow">Academic Infrastructure</span>
                        <h2 className="school-title-large">Next-Generation School Management Technology</h2>
                    </div>
                    <div className="school-bento-grid">
                        <div className="school-bento-card">
                            <span className="s-card-icon">📝</span>
                            <h3 className="school-bento-title">Online Admission & Fee Portal</h3>
                            <p className="school-bento-desc">Parents apply online, upload student documents, and pay admission fees securely via UPI or NetBanking with instant receipt generation.</p>
                        </div>
                        <div className="school-bento-card">
                            <span className="s-card-icon">📖</span>
                            <h3 className="school-bento-title">Digital Prospectus & Campus Tour</h3>
                            <p className="school-bento-desc">Interactive virtual campus tours, infrastructure highlights, curriculum breakdowns, and faculty profiles available 24/7 online.</p>
                        </div>
                        <div className="school-bento-card">
                            <span className="s-card-icon">💬</span>
                            <h3 className="school-bento-title">Parent WhatsApp Announcement Bot</h3>
                            <p className="school-bento-desc">Broadcast exam dates, fee due dates, holiday announcements, and emergency notices directly to parents' WhatsApp numbers.</p>
                        </div>
                        <div className="school-bento-card">
                            <span className="s-card-icon">🎓</span>
                            <h3 className="school-bento-title">Student Performance Portal</h3>
                            <p className="school-bento-desc">Secure portal for parents to view report cards, attendance records, exam schedules, and teacher feedback digitally.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ADMISSION FLOW DIAGRAM */}
            <section className="school-flow-section">
                <div className="school-container">
                    <div className="school-flow-card">
                        <div className="school-section-header">
                            <span className="school-eyebrow">Digital Admission Flow</span>
                            <h2 className="school-title-large">Streamlined Student Enrollment Pipeline</h2>
                        </div>
                        <div className="s-flow-grid">
                            <div className="s-flow-step">
                                <h4>1. Online Form</h4>
                                <p>Parents fill digital application</p>
                            </div>
                            <span className="s-flow-arrow">→</span>
                            <div className="s-flow-step">
                                <h4>2. Doc Verification</h4>
                                <p>Automated cloud upload audit</p>
                            </div>
                            <span className="s-flow-arrow">→</span>
                            <div className="s-flow-step">
                                <h4>3. Online Fee Payment</h4>
                                <p>Instant UPI/Bank payment</p>
                            </div>
                            <span className="s-flow-arrow">→</span>
                            <div className="s-flow-step">
                                <h4>4. Student ID Issuance</h4>
                                <p>Automated WhatsApp confirmation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SCHOOL FORM */}
            <section className="school-onboard-section" id="onboard">
                <div className="school-container">
                    <div className="school-form-card">
                        <div className="school-section-header">
                            <span className="school-eyebrow">Institutional Consultation</span>
                            <h2 className="school-title-large">Request a School Digitization Brief</h2>
                        </div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>Request Submitted!</h3>
                                <p style={{ color: '#334155' }}>Our academic technology director will contact your school management within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="school-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity EduTech School Inquiry" />
                                <div className="s-form-grid">
                                    <div className="s-form-group">
                                        <label>SCHOOL / INSTITUTION NAME</label>
                                        <input type="text" name="name" placeholder="e.g. St. Xavier's International School" required />
                                    </div>
                                    <div className="s-form-group">
                                        <label>OFFICIAL EMAIL</label>
                                        <input type="email" name="email" placeholder="principal@school.edu.in" required />
                                    </div>
                                    <div className="s-form-group">
                                        <label>PHONE NUMBER</label>
                                        <input type="text" name="phone" placeholder="+91 98765 43210" required />
                                    </div>
                                    <div className="s-form-group">
                                        <label>TOTAL STUDENT STRENGTH</label>
                                        <select name="strength" className="s-select" required>
                                            <option value="Under 500 Students">Under 500 Students</option>
                                            <option value="500 - 2,000 Students">500 - 2,000 Students</option>
                                            <option value="2,000+ Students">2,000+ Students</option>
                                        </select>
                                    </div>
                                    <div className="s-form-group full">
                                        <label>REQUIREMENTS BRIEF</label>
                                        <textarea name="brief" rows="4" placeholder="Tell us about your current admission process, fee collection methods, and desired digital features..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="s-submit-btn">Request School Tech Demo →</button>
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
