import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './CraftPage.css';

const CraftPage = () => {
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
        <div className="cr-page">
            {/* NAVIGATION */}
            <nav className={`cr-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="cr-nav-logo">
                    <div className="cr-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY CRAFTTECH</span>
                </Link>
                <div className="cr-nav-links">
                    <Link to="/" className="cr-nav-link">Home</Link>
                    <Link to="/services" className="cr-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="cr-nav-link">Commerce</Link>
                    <Link to="/women" className="cr-nav-link">Women Initiative</Link>
                    <a href="#onboard" className="cr-nav-cta">Launch Artisan Store</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="cr-hero">
                <div className="cr-container">
                    <div className="cr-hero-badge">
                        🧵 Artisans, Crafters & D2C Boutiques
                    </div>
                    <h1 className="cr-hero-title">
                        Empowering Heritage Artisans with <span className="rose-accent">Direct E-Commerce.</span>
                    </h1>
                    <p className="cr-hero-subtitle">
                        Stop manually sending hundreds of product photos over WhatsApp. Launch your own automated online catalog store with direct checkout, regional shipping integration, and WhatsApp order bots.
                    </p>
                    <div className="cr-hero-stats">
                        <div className="cr-stat">
                            <span className="cr-stat-num">500+</span>
                            <span className="cr-stat-label">Photos Saved Daily</span>
                        </div>
                        <div className="cr-stat-divider"></div>
                        <div className="cr-stat">
                            <span className="cr-stat-num">100%</span>
                            <span className="cr-stat-label">Automated Storefront</span>
                        </div>
                        <div className="cr-stat-divider"></div>
                        <div className="cr-stat">
                            <span className="cr-stat-num">₹30k/yr</span>
                            <span className="cr-stat-label">Flat Managed Plan</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* SPOTLIGHT: ANITA GIFT HOUSE BHAGALPUR */}
            <section className="cr-spotlight-section">
                <div className="cr-container">
                    <div className="anita-spotlight-card">
                        <div className="cr-section-header">
                            <span className="cr-eyebrow">Featured Success Story</span>
                            <h2 className="cr-title-large">Anita Gift House (Bhagalpur)</h2>
                        </div>
                        <blockquote className="anita-quote">
                            "Earlier, I had to manually take photos of new gift items and handloom crafts, sending them individually over WhatsApp to every customer. It took hours every day! With my Hikity E-Commerce store, customers simply open my online store, browse the catalog, and order directly. It transformed my business completely!"
                        </blockquote>
                        <div className="anita-author-row">
                            <div className="anita-avatar">A</div>
                            <div>
                                <div className="anita-name">Anita Devi</div>
                                <div className="anita-location">Founder, Anita Gift House — Bhagalpur, Bihar</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRAFT SOLUTIONS BENTO */}
            <section className="cr-solutions-section">
                <div className="cr-container">
                    <div className="cr-section-header">
                        <span className="cr-eyebrow">Artisan Core</span>
                        <h2 className="cr-title-large">Everything Needed to Scale Handcrafted Brands</h2>
                    </div>
                    <div className="cr-bento-grid">
                        <div className="cr-bento-card">
                            <span className="cr-card-icon">📸</span>
                            <h3 className="cr-bento-title">High-Resolution Product Gallery</h3>
                            <p className="cr-bento-desc">Showcase intricate handloom textures, jewelry details, and handmade craft variations with zoomable high-definition photo galleries.</p>
                        </div>
                        <div className="cr-bento-card">
                            <span className="cr-card-icon">💬</span>
                            <h3 className="cr-bento-title">Direct WhatsApp Catalog Order</h3>
                            <p className="cr-bento-desc">Customers select products, choose color variants, and click one button to generate a structured pre-filled order message straight to your WhatsApp.</p>
                        </div>
                        <div className="cr-bento-card">
                            <span className="cr-card-icon">🎨</span>
                            <h3 className="cr-bento-title">Custom Order Inquiry Engine</h3>
                            <p className="cr-bento-desc">Enable customers to request personalized engravings, custom saree embroidery, gift packing preferences, and custom size dimensions.</p>
                        </div>
                        <div className="cr-bento-card">
                            <span className="cr-card-icon">📦</span>
                            <h3 className="cr-bento-title">Domestic & Export Shipping Sync</h3>
                            <p className="cr-bento-desc">Automated shipping rate calculation and tracking link generation for Courier, India Post, and international express logistics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARTISAN ONBOARDING FORM */}
            <section className="cr-onboard-section" id="onboard">
                <div className="cr-container">
                    <div className="cr-form-card">
                        <div className="cr-section-header">
                            <span className="cr-eyebrow">Artisan Registration</span>
                            <h2 className="cr-title-large">Launch Your Hikity Craft Store Today</h2>
                        </div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#3a3532', marginBottom: '12px' }}>Registration Received!</h3>
                                <p style={{ color: '#6c635d' }}>Our CraftTech team will contact you to build your store catalog within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="cr-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity CraftTech Artisan Store Inquiry" />
                                <div className="cr-form-grid">
                                    <div className="cr-form-group">
                                        <label>STORE / ARTISAN BRAND NAME</label>
                                        <input type="text" name="name" placeholder="e.g. Bhagalpur Weavers / Craft House" required />
                                    </div>
                                    <div className="cr-form-group">
                                        <label>CONTACT EMAIL</label>
                                        <input type="email" name="email" placeholder="artisan@brand.com" required />
                                    </div>
                                    <div className="cr-form-group">
                                        <label>WHATSAPP PHONE NUMBER</label>
                                        <input type="text" name="phone" placeholder="+91 98765 43210" required />
                                    </div>
                                    <div className="cr-form-group">
                                        <label>LOCATION / CITY</label>
                                        <input type="text" name="location" placeholder="e.g. Bhagalpur / Jaipur / Varanasi" required />
                                    </div>
                                    <div className="cr-form-group full">
                                        <label>PRODUCTS & CATALOG DETAILS</label>
                                        <textarea name="brief" rows="4" placeholder="Tell us about the items you sell (handloom silk, jewelry, home decor, pottery, gifts)..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="cr-submit-btn">Launch My E-Commerce Store →</button>
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
