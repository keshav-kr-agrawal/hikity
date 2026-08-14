import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './WomenPage.css';

const WomenPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        city: '',
        phone: '',
        businessType: 'Boutique & Clothing',
        details: ''
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
        <div className="women-page">
            {/* LIGHT NAVBAR */}
            <nav className={`w-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="w-nav-logo">
                    <div className="w-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY WOMEN</span>
                </Link>
                <div className="w-nav-links">
                    <Link to="/" className="w-nav-link">Home</Link>
                    <Link to="/services" className="w-nav-link">Services</Link>
                    <Link to="/commerce" className="w-nav-link">Commerce</Link>
                    <Link to="/case-studies" className="w-nav-link">Case Studies</Link>
                    <a href="#women-form" className="w-nav-cta">Launch Store Free</a>
                </div>
                <button className="w-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`w-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`w-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="w-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" className="w-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/commerce" className="w-nav-link" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                <Link to="/case-studies" className="w-nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                <a href="#women-form" className="w-nav-cta" style={{ textAlign: 'center', marginTop: '10px' }} onClick={() => setMobileMenuOpen(false)}>Launch Store Free</a>
            </div>

            {/* HERO SECTION */}
            <header className="w-hero">
                <div className="w-hero-glow"></div>
                <div className="w-container">
                    <div className="w-hero-badge">
                        🌸 WOMEN ENTREPRENEUR INITIATIVE
                    </div>
                    <h1 className="w-hero-title">
                        Empowering Women To Launch <span className="w-accent-text">Successful E-Commerce Stores</span>
                    </h1>
                    <p className="w-hero-subtitle">
                        Stop sharing photos manually on WhatsApp every single day. We build beautiful, self-operating online stores for female creators, boutique owners, and home business leaders across India with zero coding needed.
                    </p>

                    {/* FEATURED ANITA GIFT HOUSE TESTIMONIAL HERO BANNER */}
                    <div className="w-testimonial-hero-card">
                        <div className="w-quote-icon">“</div>
                        <p className="w-quote-text">
                            "Earlier I had to manually send photos of products on WhatsApp to every single customer. Now with my Hikity E-Commerce store, customers browse our entire catalog and order directly!"
                        </p>
                        <div className="w-author-row">
                            <div className="w-avatar">🛍️</div>
                            <div>
                                <strong className="w-author-name">Anita Devi</strong>
                                <span className="w-author-sub">Anita Gift House (Bhagalpur, Bihar)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* BEFORE VS AFTER TRANSFORMATION */}
            <section className="w-transformation-section">
                <div className="w-container">
                    <div className="w-section-header">
                        <span className="w-eyebrow">YOUR DIGITAL UPGRADE</span>
                        <h2 className="w-title">How Hikity Transforms Your Business</h2>
                    </div>

                    <div className="w-grid-2">
                        <div className="w-card before">
                            <span className="w-tag bad">BEFORE HIKITY</span>
                            <h3>Manual WhatsApp Selling</h3>
                            <ul className="w-list">
                                <li>❌ Spending 4-5 hours daily sending product photos</li>
                                <li>❌ Customers asking for price & stock repeatedly</li>
                                <li>❌ Lost orders due to message overload</li>
                                <li>❌ No automated payment receipt or invoice</li>
                            </ul>
                        </div>

                        <div className="w-card after">
                            <span className="w-tag good">AFTER HIKITY E-COM</span>
                            <h3>Automated Catalog Store</h3>
                            <ul className="w-list">
                                <li><span className="w-check">✓</span> 1-Click catalog link shared with all buyers</li>
                                <li><span className="w-check">✓</span> Real-time stock, pricing & video previews</li>
                                <li><span className="w-check">✓</span> Direct UPI payment & automated order receipts</li>
                                <li><span className="w-check">✓</span> Professional brand presence that builds trust</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* POPULAR BUSINESS CATEGORIES */}
            <section className="w-categories-section">
                <div className="w-container">
                    <div className="w-section-header">
                        <span className="w-eyebrow">TAILORED FOR EVERY FEMALE CREATOR</span>
                        <h2 className="w-title">Popular Women-Led Business Categories</h2>
                    </div>

                    <div className="w-cat-grid">
                        <div className="w-cat-card">
                            <div className="w-cat-icon">👗</div>
                            <h3>Boutique & Ethnic Wear</h3>
                            <p>Sarees, suits, designer kurtis, and custom tailoring catalogs with size charts and fabric guides.</p>
                        </div>
                        <div className="w-cat-card">
                            <div className="w-cat-icon">💎</div>
                            <h3>Handcrafted Jewelry</h3>
                            <p>Artificial jewelry, silver items, and traditional Kundan sets with HD photo galleries.</p>
                        </div>
                        <div className="w-cat-card">
                            <div className="w-cat-icon">🎁</div>
                            <h3>Gifting & Home Decor</h3>
                            <p>Personalized hampers, gift boxes, handmade candles, and decorative home items.</p>
                        </div>
                        <div className="w-cat-card">
                            <div className="w-cat-icon">🍯</div>
                            <h3>Artisanal Foods & Spices</h3>
                            <p>Homemade pickles, organic honey, snacks, and traditional regional spices.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENROLLMENT FORM */}
            <section className="w-form-section" id="women-form">
                <div className="w-container">
                    <div className="w-form-card">
                        <div className="w-form-header">
                            <span className="w-eyebrow">START YOUR ONLINE STORE TODAY</span>
                            <h2 className="w-title">Join The Hikity Women Entrepreneur Program</h2>
                            <p className="w-subtitle">Our team will guide you step-by-step to get your store live in 24 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="w-success-box">
                                <h3>Application Received!</h3>
                                <p>Thank you! Our female business onboarding specialist will contact you on WhatsApp shortly.</p>
                            </div>
                        ) : (
                            <form className="w-form" onSubmit={handleSubmit}>
                                <div className="w-form-grid">
                                    <div className="w-form-group">
                                        <label>YOUR NAME</label>
                                        <input type="text" name="name" required placeholder="e.g. Anita Devi" value={form.name} onChange={handleChange} />
                                    </div>
                                    <div className="w-form-group">
                                        <label>CITY / TOWN</label>
                                        <input type="text" name="city" required placeholder="e.g. Bhagalpur, Bihar" value={form.city} onChange={handleChange} />
                                    </div>
                                    <div className="w-form-group">
                                        <label>WHATSAPP PHONE NUMBER</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="w-form-group">
                                        <label>BUSINESS CATEGORY</label>
                                        <select name="businessType" value={form.businessType} onChange={handleChange} className="w-select">
                                            <option value="Boutique & Clothing">Boutique & Clothing</option>
                                            <option value="Handcrafted Jewelry">Handcrafted Jewelry</option>
                                            <option value="Gifting & Home Decor">Gifting & Home Decor</option>
                                            <option value="Artisanal Foods & Spices">Artisanal Foods & Spices</option>
                                            <option value="Art & Crafts">Art & Crafts</option>
                                        </select>
                                    </div>
                                    <div className="w-form-group full">
                                        <label>TELL US ABOUT YOUR PRODUCTS</label>
                                        <textarea name="details" rows="3" required placeholder="Briefly describe what you sell or want to sell..." value={form.details} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="w-form-action">
                                    <button type="submit" className="w-btn-submit">Submit Registration →</button>
                                    <p className="w-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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

export default WomenPage;
