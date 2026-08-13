import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './DentistPage.css';

const DentistPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        clinicName: '',
        doctorName: '',
        phone: '',
        city: '',
        specialty: 'General Dentistry'
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
        <div className="dentist-page">
            {/* LIGHT NAVBAR */}
            <nav className={`dt-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="dt-nav-logo">
                    <div className="dt-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY DENTAL & MEDICAL</span>
                </Link>
                <div className="dt-nav-links">
                    <Link to="/" className="dt-nav-link">Home</Link>
                    <Link to="/services" className="dt-nav-link">Services</Link>
                    <Link to="/commerce" className="dt-nav-link">Commerce</Link>
                    <a href="#dentist-form" className="dt-nav-cta">Get Clinic Website</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="dt-hero">
                <div className="dt-hero-glow"></div>
                <div className="dt-container">
                    <div className="dt-hero-badge">
                        🩺 CLINICAL PRACTICE & PATIENT APPOINTMENT PORTALS
                    </div>
                    <h1 className="dt-hero-title">
                        Attract More Patients & Automate <span className="dt-accent-text">24/7 Appointment Scheduling</span>
                    </h1>
                    <p className="dt-hero-subtitle">
                        High-converting dental clinic websites with online patient appointment booking, automated WhatsApp appointment reminders, before & after transformation galleries, and Google Maps local SEO ranking.
                    </p>

                    <div className="dt-hero-actions">
                        <a href="#dentist-form" className="dt-btn-primary">Launch Clinic Website →</a>
                        <Link to="/services" className="dt-btn-secondary">View All Verticals</Link>
                    </div>
                </div>
            </header>

            {/* CLINIC FEATURES BENTO GRID */}
            <section className="dt-features-section">
                <div className="dt-container">
                    <div className="dt-section-header">
                        <span className="dt-eyebrow">CLINICAL PRACTICE GROWTH</span>
                        <h2 className="dt-title">Engineered Specifically For Dentists & Doctors</h2>
                    </div>

                    <div className="dt-features-grid">
                        <div className="dt-feature-card">
                            <div className="dt-card-icon">📅</div>
                            <h3>24/7 Online Appointment Booking</h3>
                            <p>Patients select doctors, available time slots, and procedures with instant SMS and WhatsApp booking confirmations.</p>
                        </div>
                        <div className="dt-feature-card">
                            <div className="dt-card-icon">✨</div>
                            <h3>Before & After Smile Transformations</h3>
                            <p>Showcase real patient case studies, smile alignment transformations, and dental implant results with slider galleries.</p>
                        </div>
                        <div className="dt-feature-card">
                            <div className="dt-card-icon">📍</div>
                            <h3>Google Maps & Local SEO Boost</h3>
                            <p>Rank #1 for "Dentist near me" in your city with optimized local schema, Google reviews integration, and directions.</p>
                        </div>
                        <div className="dt-feature-card">
                            <div className="dt-card-icon">📋</div>
                            <h3>Patient Service & Pricing Catalog</h3>
                            <p>Clear transparency for Root Canals, Invisalign, Teeth Whitening, Implants, and Preventive Care procedures.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DENTIST FORM SECTION */}
            <section className="dt-form-section" id="dentist-form">
                <div className="dt-container">
                    <div className="dt-form-card">
                        <div className="dt-form-header">
                            <span className="dt-eyebrow">GROW YOUR CLINIC</span>
                            <h2 className="dt-title">Request Clinic Website Setup</h2>
                            <p className="dt-subtitle">Get your professional clinic website live in 48 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="dt-success-box">
                                <h3>Clinic Request Submitted!</h3>
                                <p>Thank you Doctor! Our medical web team will contact you to set up your clinic portal.</p>
                            </div>
                        ) : (
                            <form className="dt-form" onSubmit={handleSubmit}>
                                <div className="dt-form-grid">
                                    <div className="dt-form-group">
                                        <label>CLINIC NAME</label>
                                        <input type="text" name="clinicName" required placeholder="e.g. Apex Dental & Maxillofacial Care" value={form.clinicName} onChange={handleChange} />
                                    </div>
                                    <div className="dt-form-group">
                                        <label>DOCTOR'S NAME</label>
                                        <input type="text" name="doctorName" required placeholder="e.g. Dr. Rajesh Verma (BDS, MDS)" value={form.doctorName} onChange={handleChange} />
                                    </div>
                                    <div className="dt-form-group">
                                        <label>PHONE / WHATSAPP</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="dt-form-group">
                                        <label>CITY / LOCATION</label>
                                        <input type="text" name="city" required placeholder="e.g. Mumbai, Maharashtra" value={form.city} onChange={handleChange} />
                                    </div>
                                    <div className="dt-form-group full">
                                        <label>SPECIALTY / SERVICES OFFERED</label>
                                        <select name="specialty" value={form.specialty} onChange={handleChange} className="dt-select">
                                            <option value="General Dentistry">General Dentistry & Scaling</option>
                                            <option value="Cosmetic Dentistry & Veneers">Cosmetic Dentistry & Veneers</option>
                                            <option value="Orthodontics & Aligners">Orthodontics & Aligners</option>
                                            <option value="Implants & Oral Surgery">Implants & Oral Surgery</option>
                                            <option value="Multi-Specialty Clinic">Multi-Specialty Clinic</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="dt-form-action">
                                    <button type="submit" className="dt-btn-submit">Request Clinic Setup →</button>
                                    <p className="dt-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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
