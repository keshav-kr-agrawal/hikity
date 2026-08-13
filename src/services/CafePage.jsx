import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './CafePage.css';

const CafePage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { id: 1, category: 'coffee', name: 'Artisanal Flat White', price: '₹220', desc: 'Double espresso shot with silky micro-foam milk.' },
        { id: 2, category: 'bakery', name: 'Almond Butter Croissant', price: '₹190', desc: 'Flaky baked croissant filled with roasted almond paste.' },
        { id: 3, category: 'mains', name: 'Avocado & Sourdough Toast', price: '₹340', desc: 'Poached eggs, smashed avocado, chilli flakes on sourdough.' },
        { id: 4, category: 'coffee', name: 'Iced Spanish Latte', price: '₹240', desc: 'Espresso poured over condensed milk and chilled ice.' },
    ];

    const filteredItems = activeTab === 'all' ? menuItems : menuItems.filter(item => item.category === activeTab);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="cafe-page">
            {/* NAVIGATION */}
            <nav className={`c-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="c-nav-logo">
                    <div className="c-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY FOODTECH</span>
                </Link>
                <div className="c-nav-links">
                    <Link to="/" className="c-nav-link">Home</Link>
                    <Link to="/services" className="c-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="c-nav-link">Commerce</Link>
                    <a href="#onboard" className="c-nav-cta">Launch Your Digital Cafe</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="cafe-hero">
                <div className="cafe-container">
                    <div className="cafe-hero-badge">
                        ☕ Hikity FoodTech & Hospitality
                    </div>
                    <h1 className="cafe-hero-title">
                        Turn Table Turnover into <span className="accent-text">3x Direct Revenue.</span>
                    </h1>
                    <p className="cafe-hero-subtitle">
                        QR code digital table menus, zero-commission direct WhatsApp online ordering, instant kitchen order display (KDS), and automated table reservation systems built for cafes and cloud kitchens.
                    </p>
                    <div className="cafe-hero-stats">
                        <div className="c-stat">
                            <span className="c-stat-num">0%</span>
                            <span className="c-stat-label">Commissions Kept</span>
                        </div>
                        <div className="c-stat-divider"></div>
                        <div className="c-stat">
                            <span className="c-stat-num">&lt; 15 Sec</span>
                            <span className="c-stat-label">QR Ordering Speed</span>
                        </div>
                        <div className="c-stat-divider"></div>
                        <div className="c-stat">
                            <span className="c-stat-num">+35%</span>
                            <span className="c-stat-label">Average Order Size</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* SOLUTIONS BENTO */}
            <section className="cafe-solutions-section">
                <div className="cafe-container">
                    <div className="cafe-section-header">
                        <span className="cafe-eyebrow">Hospitality Core</span>
                        <h2 className="cafe-title-large">Complete Technology Suite for Restaurants & Cafes</h2>
                    </div>
                    <div className="cafe-bento-grid">
                        <div className="cafe-bento-card">
                            <span className="c-card-icon">📱</span>
                            <h3 className="cafe-bento-title">QR Code Table Ordering</h3>
                            <p className="cafe-bento-desc">Customers scan table QR codes to view high-res visual menus, customize items, and order directly without waiting for waiters.</p>
                        </div>
                        <div className="cafe-bento-card">
                            <span className="c-card-icon">🛵</span>
                            <h3 className="cafe-bento-title">Zero-Commission Direct Delivery</h3>
                            <p className="cafe-bento-desc">Stop paying 25-30% commissions to aggregators. Receive direct takeaway and delivery orders via your branded web portal.</p>
                        </div>
                        <div className="cafe-bento-card">
                            <span className="c-card-icon">💬</span>
                            <h3 className="cafe-bento-title">WhatsApp Table Reservation Bot</h3>
                            <p className="cafe-bento-desc">Automated 24/7 WhatsApp bot handles table booking requests, confirms reservations, and sends automated reminder alerts.</p>
                        </div>
                        <div className="cafe-bento-card">
                            <span className="c-card-icon">🍳</span>
                            <h3 className="cafe-bento-title">Kitchen Display System (KDS)</h3>
                            <p className="cafe-bento-desc">Real-time order routing directly to kitchen display tablets, eliminating paper slip errors and speeding up table fulfillment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LIVE MENU SHOWCASE PREVIEW */}
            <section className="cafe-menu-preview-section">
                <div className="cafe-container">
                    <div className="cafe-preview-card">
                        <div className="cafe-section-header">
                            <span className="cafe-eyebrow">Interactive Preview</span>
                            <h2 className="cafe-title-large">Experience Your Branded Digital Menu</h2>
                        </div>
                        <div className="menu-preview-tabs">
                            <button className={`menu-tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Items</button>
                            <button className={`menu-tab-btn ${activeTab === 'coffee' ? 'active' : ''}`} onClick={() => setActiveTab('coffee')}>Specialty Coffee</button>
                            <button className={`menu-tab-btn ${activeTab === 'bakery' ? 'active' : ''}`} onClick={() => setActiveTab('bakery')}>Bakery</button>
                            <button className={`menu-tab-btn ${activeTab === 'mains' ? 'active' : ''}`} onClick={() => setActiveTab('mains')}>Gourmet Mains</button>
                        </div>
                        <div className="menu-items-grid">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="menu-item-card">
                                    <div className="menu-item-header">
                                        <span className="menu-item-name">{item.name}</span>
                                        <span className="menu-item-price">{item.price}</span>
                                    </div>
                                    <p className="menu-item-desc">{item.desc}</p>
                                    <button className="menu-order-btn" onClick={() => alert(`Added ${item.name} to direct order!`)}>Order via WhatsApp →</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI COMPARISON MATRIX */}
            <section className="cafe-roi-section">
                <div className="cafe-container">
                    <div className="roi-card">
                        <div className="cafe-section-header">
                            <span className="cafe-eyebrow">Commission Savings</span>
                            <h2 className="cafe-title-large">Why Leading Cafes Switch to Hikity FoodTech</h2>
                        </div>
                        <div className="roi-comparison-grid">
                            <div className="roi-col">
                                <h3>Aggregator Platforms</h3>
                                <p>Swiggy / Zomato models</p>
                                <ul>
                                    <li>❌ 25% – 30% commission per order</li>
                                    <li>❌ Zero customer contact data ownership</li>
                                    <li>❌ Delayed payouts (7-14 days)</li>
                                </ul>
                            </div>
                            <div className="roi-col hikity-roi">
                                <h3>Hikity FoodTech Engine</h3>
                                <p>0% commission direct online store</p>
                                <ul>
                                    <li>✓ Keep 100% of order revenue</li>
                                    <li>✓ Direct customer WhatsApp database</li>
                                    <li>✓ Instant UPI payouts directly to bank</li>
                                    <li>✓ Managed at ₹30k/yr flat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ONBOARDING FORM */}
            <section className="cafe-onboard-section" id="onboard">
                <div className="cafe-container">
                    <div className="cafe-form-card">
                        <div className="cafe-section-header">
                            <span className="cafe-eyebrow">Cafe Onboarding</span>
                            <h2 className="cafe-title-large">Digitize Your Cafe & Kitchen Today</h2>
                        </div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#2c1e16', marginBottom: '12px' }}>Inquiry Received!</h3>
                                <p style={{ color: '#5c4b41' }}>Our foodtech team will contact you for a live demo and QR setup within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="cafe-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity FoodTech Cafe Onboarding Inquiry" />
                                <div className="c-form-grid">
                                    <div className="c-form-group">
                                        <label>CAFE / RESTAURANT NAME</label>
                                        <input type="text" name="name" placeholder="e.g. Roastery & Bakery" required />
                                    </div>
                                    <div className="c-form-group">
                                        <label>CONTACT EMAIL</label>
                                        <input type="email" name="email" placeholder="owner@cafename.com" required />
                                    </div>
                                    <div className="c-form-group">
                                        <label>WHATSAPP NUMBER</label>
                                        <input type="text" name="phone" placeholder="+91 98765 43210" required />
                                    </div>
                                    <div className="c-form-group">
                                        <label>CITY / LOCATION</label>
                                        <input type="text" name="city" placeholder="e.g. Bengaluru / Delhi" required />
                                    </div>
                                    <div className="c-form-group full">
                                        <label>CURRENT SETUP & REQUIREMENTS</label>
                                        <textarea name="brief" rows="4" placeholder="Tell us about your menu size, seating capacity, and desired features (QR menu, WhatsApp ordering, KDS)..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="c-submit-btn">Request Digital Menu Demo →</button>
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
