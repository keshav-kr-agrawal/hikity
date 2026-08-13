import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './DentistPage.css';

const DentistPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedSlot, setSelectedSlot] = useState('10:30 AM');
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
        <div className="dentist-page">
            {/* NAVIGATION */}
            <nav className={`d-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="d-nav-logo">
                    <div className="d-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY DENTALTECH</span>
                </Link>
                <div className="d-nav-links">
                    <Link to="/" className="d-nav-link">Home</Link>
                    <Link to="/services" className="d-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="d-nav-link">Commerce</Link>
                    <a href="#onboard" className="d-nav-cta">Digitalize Your Clinic</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="dentist-hero">
                <div className="dentist-container">
                    <div className="dentist-hero-badge">
                        🦷 Dental Clinics & Polyclinics
                    </div>
                    <h1 className="dentist-hero-title">
                        Fill Your Patient Calendar on <span className="sky-accent">Autopilot.</span>
                    </h1>
                    <p className="dentist-hero-subtitle">
                        24/7 direct online appointment booking, automated WhatsApp appointment reminders, patient treatment record portal, and Google Review acquisition engine built specifically for dental surgeons.
                    </p>
                    <div className="dentist-hero-stats">
                        <div className="d-stat">
                            <span className="d-stat-num">24/7</span>
                            <span className="d-stat-label">Online Booking</span>
                        </div>
                        <div className="d-stat-divider"></div>
                        <div className="d-stat">
                            <span className="d-stat-num">-85%</span>
                            <span className="d-stat-label">No-Show Dropouts</span>
                        </div>
                        <div className="d-stat-divider"></div>
                        <div className="d-stat">
                            <span className="d-stat-num">₹30k/yr</span>
                            <span className="d-stat-label">Flat Managed Pricing</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* SOLUTIONS BENTO */}
            <section className="dentist-solutions-section">
                <div className="dentist-container">
                    <div className="dentist-section-header">
                        <span className="dentist-eyebrow">Clinic Growth Core</span>
                        <h2 className="dentist-title-large">Complete Patient Acquisition & Management Engine</h2>
                    </div>
                    <div className="dentist-bento-grid">
                        <div className="dentist-bento-card">
                            <span className="d-card-icon">📅</span>
                            <h3 className="dentist-bento-title">Frictionless Patient Scheduling</h3>
                            <p className="dentist-bento-desc">Patients pick available treatment slots on your website. Syncs automatically with your clinic calendar without double booking.</p>
                        </div>
                        <div className="dentist-bento-card">
                            <span className="d-card-icon">💬</span>
                            <h3 className="dentist-bento-title">Automated WhatsApp Reminders</h3>
                            <p className="dentist-bento-desc">Send automated SMS and WhatsApp confirmation alerts 24 hours and 2 hours prior to appointments, reducing no-show rates by 85%.</p>
                        </div>
                        <div className="dentist-bento-card">
                            <span className="d-card-icon">⭐</span>
                            <h3 className="dentist-bento-title">Google Review Collector</h3>
                            <p className="dentist-bento-desc">Automatically request 5-star Google Business reviews post-treatment via automated WhatsApp links, ranking your clinic #1 locally.</p>
                        </div>
                        <div className="dentist-bento-card">
                            <span className="d-card-icon">📋</span>
                            <h3 className="dentist-bento-title">Smile Gallery Showcase</h3>
                            <p className="dentist-bento-desc">Display high-impact Before & After dental transformation galleries (aligners, veneers, implants) to build instant patient trust.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE APPOINTMENT WIDGET MOCKUP */}
            <section className="dentist-widget-section">
                <div className="dentist-container">
                    <div className="dentist-widget-card">
                        <div className="dentist-section-header">
                            <span className="dentist-eyebrow">Patient Experience</span>
                            <h2 className="dentist-title-large">Test the Online Booking Widget</h2>
                        </div>
                        <div className="widget-demo-box">
                            <div className="widget-header">
                                <span style={{ fontSize: '1.8rem' }}>🩺</span>
                                <div className="widget-title-text">
                                    <h4>Dr. Dental Care Clinic</h4>
                                    <p>Root Canal & Aesthetic Dentistry</p>
                                </div>
                            </div>
                            <div className="widget-step-title">SELECT AVAILABLE APPOINTMENT TIME:</div>
                            <div className="widget-time-slots">
                                {['10:30 AM', '02:00 PM', '05:30 PM'].map((slot) => (
                                    <button key={slot} className={`time-slot-btn ${selectedSlot === slot ? 'active' : ''}`} onClick={() => setSelectedSlot(slot)}>
                                        {slot}
                                    </button>
                                ))}
                            </div>
                            <button className="widget-confirm-btn" onClick={() => alert(`Appointment confirmed for ${selectedSlot}! WhatsApp alert dispatched.`)}>
                                Confirm Appointment ({selectedSlot}) →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLINIC ONBOARDING FORM */}
            <section className="dentist-onboard-section" id="onboard">
                <div className="dentist-container">
                    <div className="dentist-form-card">
                        <div className="dentist-section-header">
                            <span className="dentist-eyebrow">Clinic Onboarding</span>
                            <h2 className="dentist-title-large">Digitize Your Dental Practice Today</h2>
                        </div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '12px' }}>Inquiry Received!</h3>
                                <p style={{ color: '#475569' }}>Our healthcare tech specialists will contact you to set up your clinic portal within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="dentist-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity DentalTech Clinic Inquiry" />
                                <div className="d-form-grid">
                                    <div className="d-form-group">
                                        <label>DOCTOR / CLINIC NAME</label>
                                        <input type="text" name="name" placeholder="e.g. Dr. Sharma Dental Speciality" required />
                                    </div>
                                    <div className="d-form-group">
                                        <label>CLINIC EMAIL</label>
                                        <input type="email" name="email" placeholder="contact@dentalclinic.com" required />
                                    </div>
                                    <div className="d-form-group">
                                        <label>WHATSAPP NUMBER</label>
                                        <input type="text" name="phone" placeholder="+91 98765 43210" required />
                                    </div>
                                    <div className="d-form-group">
                                        <label>CITY / LOCATION</label>
                                        <input type="text" name="city" placeholder="e.g. Mumbai / Delhi / Pune" required />
                                    </div>
                                    <div className="d-form-group full">
                                        <label>PRACTICE BRIEF & SPECIALTIES</label>
                                        <textarea name="brief" rows="4" placeholder="Tell us about your clinic setup, number of chairs, current booking method, and goals..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="d-submit-btn">Request Clinic Setup Demo →</button>
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

export default DentistPage;
