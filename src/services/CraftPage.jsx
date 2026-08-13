import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './CraftPage.css';

const CraftPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        studioName: '',
        artisanName: '',
        phone: '',
        craftType: 'Handmade Jewelry'
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
        <div className="cr-page">
            {/* LIGHT NAVBAR */}
            <nav className={`cr-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="cr-nav-logo">
                    <div className="cr-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY CRAFT</span>
                </Link>
                <div className="cr-nav-links">
                    <Link to="/" className="cr-nav-link">Home</Link>
                    <Link to="/services" className="cr-nav-link">Services</Link>
                    <Link to="/commerce" className="cr-nav-link">Commerce</Link>
                    <a href="#craft-form" className="cr-nav-cta">Launch Studio Store</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="cr-hero">
                <div className="cr-hero-glow"></div>
                <div className="cr-container">
                    <div className="cr-hero-badge">
                        🏺 ARTISAN & D2C HANDCRAFTED STOREFRONTS
                    </div>
                    <h1 className="cr-hero-title">
                        Empowering Indian Artisans To Sell <span className="cr-accent-text">Directly To Global Buyers</span>
                    </h1>
                    <p className="cr-hero-subtitle">
                        High-resolution storytelling product pages, zero-commission D2C checkout, custom commission request forms, and automated global shipping readiness for studio creators.
                    </p>

                    <div className="cr-hero-actions">
                        <a href="#craft-form" className="cr-btn-primary">Launch Studio Website →</a>
                        <Link to="/services" className="cr-btn-secondary">View All Verticals</Link>
                    </div>
                </div>
            </header>

            {/* CRAFT FEATURES BENTO GRID */}
            <section className="cr-features-section">
                <div className="cr-container">
                    <div className="cr-section-header">
                        <span className="cr-eyebrow">CRAFTED FOR CREATORS</span>
                        <h2 className="cr-title">Built To Showcase Heritage Craftsmanship</h2>
                    </div>

                    <div className="cr-features-grid">
                        <div className="cr-feature-card">
                            <div className="cr-card-icon">🎨</div>
                            <h3>Storytelling Product Layouts</h3>
                            <p>Showcase the artisan's journey, materials used, production time, and heritage techniques behind every piece.</p>
                        </div>
                        <div className="cr-feature-card">
                            <div className="cr-card-icon">📦</div>
                            <h3>Custom Order Commission Forms</h3>
                            <p>Allow buyers to submit custom dimension requests, personalized engravings, and bespoke color choices.</p>
                        </div>
                        <div className="cr-feature-card">
                            <div className="cr-card-icon">💰</div>
                            <h3>0% Marketplace Commission</h3>
                            <p>Keep 100% of your earnings. Direct bank & UPI settlements straight into your account on every sale.</p>
                        </div>
                        <div className="cr-feature-card">
                            <div className="cr-card-icon">🌐</div>
                            <h3>International Currency Ready</h3>
                            <p>Accept payments in USD, EUR, GBP, and INR with automated currency conversion at checkout.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRAFT FORM SECTION */}
            <section className="cr-form-section" id="craft-form">
                <div className="cr-container">
                    <div className="cr-form-card">
                        <div className="cr-form-header">
                            <span className="cr-eyebrow">DIGITIZE YOUR STUDIO</span>
                            <h2 className="cr-title">Launch Your Artisan Store</h2>
                            <p className="cr-subtitle">We build your boutique studio website in under 48 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="cr-success-box">
                                <h3>Studio Request Received!</h3>
                                <p>Thank you! Our artisan store team will reach out to get your product catalog onboarded.</p>
                            </div>
                        ) : (
                            <form className="cr-form" onSubmit={handleSubmit}>
                                <div className="cr-form-grid">
                                    <div className="cr-form-group">
                                        <label>STUDIO / BRAND NAME</label>
                                        <input type="text" name="studioName" required placeholder="e.g. Clay & Co. Studio" value={form.studioName} onChange={handleChange} />
                                    </div>
                                    <div className="cr-form-group">
                                        <label>ARTISAN / CREATOR NAME</label>
                                        <input type="text" name="artisanName" required placeholder="e.g. Ananya Sen" value={form.artisanName} onChange={handleChange} />
                                    </div>
                                    <div className="cr-form-group">
                                        <label>WHATSAPP / PHONE</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="cr-form-group">
                                        <label>CRAFT CATEGORY</label>
                                        <select name="craftType" value={form.craftType} onChange={handleChange} className="cr-select">
                                            <option value="Handmade Jewelry">Handmade Jewelry</option>
                                            <option value="Pottery & Ceramics">Pottery & Ceramics</option>
                                            <option value="Handloom & Textiles">Handloom & Textiles</option>
                                            <option value="Woodwork & Carvings">Woodwork & Carvings</option>
                                            <option value="Paintings & Fine Art">Paintings & Fine Art</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="cr-form-action">
                                    <button type="submit" className="cr-btn-submit">Launch Studio Store →</button>
                                    <p className="cr-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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

export default CraftPage;
