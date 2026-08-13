import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './MusicPage.css';

const MusicPage = () => {
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
        <div className="m-page">
            {/* NAVIGATION */}
            <nav className={`m-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="m-nav-logo">
                    <div className="m-nav-logo-circle">
                        <img src="/hikity-logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY MUSICTECH</span>
                </Link>
                <div className="m-nav-links">
                    <Link to="/" className="m-nav-link">Home</Link>
                    <Link to="/services" className="m-nav-link">Services Hub</Link>
                    <Link to="/commerce" className="m-nav-link">Commerce</Link>
                    <a href="#onboard" className="m-nav-cta">Launch Band Portal</a>
                </div>
            </nav>

            {/* HERO */}
            <header className="m-hero">
                <div className="m-container">
                    <div className="m-hero-badge">
                        🎸 Independent Artists, Bands & Record Labels
                    </div>
                    <h1 className="m-hero-title">
                        Own Your Fanbase — Sell Merch & Tickets <span className="copper-accent">100% Direct.</span>
                    </h1>
                    <p className="m-hero-subtitle">
                        Direct-to-fan official merch store, tour date ticket reservation engine, streaming platform aggregator embeds, and electronic press kit (EPK) hub designed for independent musicians.
                    </p>
                    <div className="m-hero-stats">
                        <div className="m-stat">
                            <span className="m-stat-num">0%</span>
                            <span className="m-stat-label">Merch Cut Kept</span>
                        </div>
                        <div className="m-stat-divider"></div>
                        <div className="m-stat">
                            <span className="m-stat-num">EPK + Store</span>
                            <span className="m-stat-label">Unified Platform</span>
                        </div>
                        <div className="m-stat-divider"></div>
                        <div className="m-stat">
                            <span className="m-stat-num">₹30k/yr</span>
                            <span className="m-stat-label">Flat Managed Pricing</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* SOLUTIONS BENTO */}
            <section className="m-solutions-section">
                <div className="m-container">
                    <div className="m-section-header">
                        <span className="m-eyebrow">Artist Growth Core</span>
                        <h2 className="m-title-large">Direct-to-Fan Ecosystem Built for Touring Artists</h2>
                    </div>
                    <div className="m-bento-grid">
                        <div className="m-bento-card">
                            <span className="m-card-icon">👕</span>
                            <h3 className="m-bento-title">Direct Fan Merch Store</h3>
                            <p className="m-bento-desc">Sell t-shirts, vinyl records, posters, and digital downloads directly to your fans with instant UPI checkout and no third-party platform cuts.</p>
                        </div>
                        <div className="m-bento-card">
                            <span className="m-card-icon">🎟️</span>
                            <h3 className="m-bento-title">Tour Dates & Ticket RSVP</h3>
                            <p className="m-bento-desc">Manage upcoming gig dates, venue maps, ticket links, and automated WhatsApp show reminder notifications for fans.</p>
                        </div>
                        <div className="m-bento-card">
                            <span className="m-card-icon">🎙️</span>
                            <h3 className="m-bento-title">Electronic Press Kit (EPK)</h3>
                            <p className="m-bento-desc">Professional press kit for festival promoters, event organizers, and record labels featuring high-res press photos, stage plots, and bio links.</p>
                        </div>
                        <div className="m-bento-card">
                            <span className="m-card-icon">🎧</span>
                            <h3 className="m-bento-title">Streaming Aggregator Hub</h3>
                            <p className="m-bento-desc">Embed Spotify, Apple Music, YouTube, and Soundcloud audio players seamlessly so fans listen to new releases directly on your domain.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EPK & TOUR DATES DEMO */}
            <section className="m-epk-section">
                <div className="m-container">
                    <div className="m-epk-card">
                        <div className="m-section-header">
                            <span className="m-eyebrow">Live Demonstration</span>
                            <h2 className="m-title-large">Tour Dates & EPK Ticket Hub</h2>
                        </div>
                        <div className="epk-preview-box">
                            <div className="epk-artist-header">
                                <div className="epk-artist-name">
                                    <h4>The Indie Project (Band)</h4>
                                    <p>Alternative Rock / Fusion Live</p>
                                </div>
                                <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#059669', background: '#ecfdf5', padding: '4px 10px', borderRadius: '100px' }}>● 2026 Tour Live</span>
                            </div>
                            <div className="tour-dates-list">
                                <div className="tour-row">
                                    <span className="tour-date">AUG 28</span>
                                    <span className="tour-venue">Hard Rock Cafe, Bengaluru</span>
                                    <button className="tour-tix-btn" onClick={() => alert('Redirecting to direct ticket checkout!')}>Get Tickets →</button>
                                </div>
                                <div className="tour-row">
                                    <span className="tour-date">SEP 12</span>
                                    <span className="tour-venue">NCPA Studio, Mumbai</span>
                                    <button className="tour-tix-btn" onClick={() => alert('Redirecting to direct ticket checkout!')}>Get Tickets →</button>
                                </div>
                                <div className="tour-row">
                                    <span className="tour-date">OCT 05</span>
                                    <span className="tour-venue">JL Stadium, New Delhi</span>
                                    <button className="tour-tix-btn" onClick={() => alert('Redirecting to direct ticket checkout!')}>Get Tickets →</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARTIST ONBOARDING FORM */}
            <section className="m-onboard-section" id="onboard">
                <div className="m-container">
                    <div className="m-form-card">
                        <div className="m-section-header">
                            <span className="m-eyebrow">Artist Registration</span>
                            <h2 className="m-title-large">Launch Your Hikity Music Store & EPK</h2>
                        </div>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h3 style={{ fontSize: '1.8rem', color: '#121212', marginBottom: '12px' }}>Registration Received!</h3>
                                <p style={{ color: '#4a4a4a' }}>Our MusicTech team will reach out to build your band portal within 24 hours.</p>
                            </div>
                        ) : (
                            <form className="m-form" action="https://formspree.io/f/xvgokrjw" method="POST" onSubmit={handleSubmit}>
                                <input type="hidden" name="_replyto" value="hikityofficial@gmail.com" />
                                <input type="hidden" name="subject" value="Hikity MusicTech Band Portal Inquiry" />
                                <div className="m-form-grid">
                                    <div className="m-form-group">
                                        <label>ARTIST / BAND NAME</label>
                                        <input type="text" name="name" placeholder="e.g. The Indie Collective" required />
                                    </div>
                                    <div className="m-form-group">
                                        <label>CONTACT EMAIL</label>
                                        <input type="email" name="email" placeholder="management@band.com" required />
                                    </div>
                                    <div className="m-form-group">
                                        <label>GENRE / STYLE</label>
                                        <input type="text" name="genre" placeholder="e.g. Indie Rock / Electronic / Classical" required />
                                    </div>
                                    <div className="m-form-group">
                                        <label>SPOTIFY / INSTAGRAM LINK</label>
                                        <input type="text" name="link" placeholder="https://open.spotify.com/artist/..." required />
                                    </div>
                                    <div className="m-form-group full">
                                        <label>REQUIREMENTS & UPCOMING RELEASES</label>
                                        <textarea name="brief" rows="4" placeholder="Tell us about your upcoming album launch, tour plans, merch inventory, or EPK requirements..." required></textarea>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="m-submit-btn">Launch Band Platform →</button>
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

export default MusicPage;
