import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './CafePage.css';

const CafePage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        restaurantName: '',
        contactPerson: '',
        phone: '',
        type: 'Café & Bakery',
        tables: '10-25 Tables'
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
        <div className="cafe-page">
            {/* LIGHT NAVBAR */}
            <nav className={`cf-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="cf-nav-logo">
                    <div className="cf-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY CAFÉ & RESTAURANT</span>
                </Link>
                <div className="cf-nav-links">
                    <Link to="/" className="cf-nav-link">Home</Link>
                    <Link to="/services" className="cf-nav-link">Services</Link>
                    <Link to="/commerce" className="cf-nav-link">Commerce</Link>
                    <a href="#cafe-form" className="cf-nav-cta">Get QR Menu Demo</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="cf-hero">
                <div className="cf-hero-glow"></div>
                <div className="cf-container">
                    <div className="cf-hero-badge">
                        ☕ DIGITAL DINING & QR MENU SYSTEMS
                    </div>
                    <h1 className="cf-hero-title">
                        Transform Your Café & Restaurant With <span className="cf-accent-text">Contactless Smart Ordering</span>
                    </h1>
                    <p className="cf-hero-subtitle">
                        Instant QR table code ordering, dynamic digital menu cards, real-time kitchen order alerts, and automated customer loyalty for modern food & beverage businesses.
                    </p>

                    <div className="cf-hero-actions">
                        <a href="#cafe-form" className="cf-btn-primary">Request Restaurant Setup →</a>
                        <Link to="/services" className="cf-btn-secondary">View All Solutions</Link>
                    </div>
                </div>
            </header>

            {/* SMART RESTAURANT FEATURES BENTO GRID */}
            <section className="cf-features-section">
                <div className="cf-container">
                    <div className="cf-section-header">
                        <span className="cf-eyebrow">DIGITAL DINING SOLUTIONS</span>
                        <h2 className="cf-title">Built For Faster Table Turnover & Higher Sales</h2>
                    </div>

                    <div className="cf-features-grid">
                        <div className="cf-feature-card">
                            <div className="cf-card-icon">📱</div>
                            <h3>Contactless QR Table Ordering</h3>
                            <p>Diners scan table QR codes to view high-res photo menus, customize orders, and place requests directly to the kitchen.</p>
                        </div>
                        <div className="cf-feature-card">
                            <div className="cf-card-icon">🍳</div>
                            <h3>Live Kitchen Display Screen</h3>
                            <p>Real-time order ticket updates sent straight to the chef with instant status notifications (Preparing, Ready, Served).</p>
                        </div>
                        <div className="cf-feature-card">
                            <div className="cf-card-icon">⚡</div>
                            <h3>1-Second Menu Price Edits</h3>
                            <p>Update dish prices, flag out-of-stock items, and add daily specials instantly without re-printing paper menus.</p>
                        </div>
                        <div className="cf-feature-card">
                            <div className="cf-card-icon">💳</div>
                            <h3>UPI & Table Payment Integration</h3>
                            <p>Customers settle bills via GPay, PhonePe, Cards, or Cash with automated GST invoice receipts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAFE FORM SECTION */}
            <section className="cf-form-section" id="cafe-form">
                <div className="cf-container">
                    <div className="cf-form-card">
                        <div className="cf-form-header">
                            <span className="cf-eyebrow">DIGITIZE YOUR RESTAURANT</span>
                            <h2 className="cf-title">Setup Hikity Dining System</h2>
                            <p className="cf-subtitle">Get your digital QR menu up and running in less than 48 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="cf-success-box">
                                <h3>Setup Request Submitted!</h3>
                                <p>Thank you! Our restaurant technology team will contact you to demo the system.</p>
                            </div>
                        ) : (
                            <form className="cf-form" onSubmit={handleSubmit}>
                                <div className="cf-form-grid">
                                    <div className="cf-form-group">
                                        <label>CAFÉ / RESTAURANT NAME</label>
                                        <input type="text" name="restaurantName" required placeholder="e.g. Mocha Artisanal Cafe" value={form.restaurantName} onChange={handleChange} />
                                    </div>
                                    <div className="cf-form-group">
                                        <label>CONTACT PERSON NAME</label>
                                        <input type="text" name="contactPerson" required placeholder="e.g. Amit Kapoor" value={form.contactPerson} onChange={handleChange} />
                                    </div>
                                    <div className="cf-form-group">
                                        <label>PHONE / WHATSAPP</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="cf-form-group">
                                        <label>ESTABLISHMENT TYPE</label>
                                        <select name="type" value={form.type} onChange={handleChange} className="cf-select">
                                            <option value="Café & Bakery">Café & Bakery</option>
                                            <option value="Fine Dining Restaurant">Fine Dining Restaurant</option>
                                            <option value="Quick Service / Cloud Kitchen">Quick Service / Cloud Kitchen</option>
                                            <option value="Bar & Bistro">Bar & Bistro</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cf-form-action">
                                    <button type="submit" className="cf-btn-submit">Request QR Menu Demo →</button>
                                    <p className="cf-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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

export default CafePage;
