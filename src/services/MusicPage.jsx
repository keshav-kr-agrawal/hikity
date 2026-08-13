import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './MusicPage.css';

const MusicPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        artistName: '',
        genre: 'Indie & Alternative',
        phone: '',
        email: ''
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
        <div className="m-page">
            {/* LIGHT NAVBAR */}
            <nav className={`mc-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="mc-nav-logo">
                    <div className="mc-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY MUSIC & BAND</span>
                </Link>
                <div className="mc-nav-links">
                    <Link to="/" className="mc-nav-link">Home</Link>
                    <Link to="/services" className="mc-nav-link">Services</Link>
                    <Link to="/commerce" className="mc-nav-link">Commerce</Link>
                    <a href="#music-form" className="mc-nav-cta">Build Artist Site</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <header className="mc-hero">
                <div className="mc-hero-glow"></div>
                <div className="mc-container">
                    <div className="mc-hero-badge">
                        🎸 OFFICIAL ARTIST & BAND PLATFORMS
                    </div>
                    <h1 className="mc-hero-title">
                        Own Your Sound, Tour Dates & <span className="mc-accent-text">Direct Merch Store</span>
                    </h1>
                    <p className="mc-hero-subtitle">
                        Stop relying solely on streaming platforms. Build your official artist website with integrated audio/video players, live concert tickets, official merchandise store, and fan mailing list.
                    </p>

                    <div className="mc-hero-actions">
                        <a href="#music-form" className="mc-btn-primary">Build Official Band Website →</a>
                        <Link to="/services" className="mc-btn-secondary">Explore Solutions</Link>
                    </div>
                </div>
            </header>

            {/* MUSIC FEATURES BENTO GRID */}
            <section className="mc-features-section">
                <div className="mc-container">
                    <div className="mc-section-header">
                        <span className="mc-eyebrow">FOR INDIE ARTISTS & BANDS</span>
                        <h2 className="mc-title">The Complete Music Ecosystem Hub</h2>
                    </div>

                    <div className="mc-features-grid">
                        <div className="mc-feature-card">
                            <div className="mc-card-icon">🎧</div>
                            <h3>Audio Player & Release Showcase</h3>
                            <p>Embed seamless high-fidelity audio streams from Spotify, Apple Music, and custom lossless audio tracks.</p>
                        </div>
                        <div className="mc-feature-card">
                            <div className="mc-card-icon">🎟️</div>
                            <h3>Live Tour Dates & Ticket Links</h3>
                            <p>Interactive concert schedule calendar with direct links to BookMyShow, Ticketmaster, or venue box offices.</p>
                        </div>
                        <div className="mc-feature-card">
                            <div className="mc-card-icon">👕</div>
                            <h3>Official Band Merch Store</h3>
                            <p>Sell t-shirts, vinyl records, posters, and digital downloads directly to fans with 0% marketplace cut.</p>
                        </div>
                        <div className="mc-feature-card">
                            <div className="mc-card-icon">✉️</div>
                            <h3>Fan Club & VIP Mailing List</h3>
                            <p>Capture fan emails and phone numbers to broadcast new album drops, private gig tickets, and VIP passes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MUSIC FORM SECTION */}
            <section className="mc-form-section" id="music-form">
                <div className="mc-container">
                    <div className="mc-form-card">
                        <div className="mc-form-header">
                            <span className="mc-eyebrow">LAUNCH YOUR BAND HUB</span>
                            <h2 className="mc-title">Build Your Music Platform</h2>
                            <p className="mc-subtitle">We design and launch your official artist site in 48 hours.</p>
                        </div>

                        {submitted ? (
                            <div className="mc-success-box">
                                <h3>Artist Request Received!</h3>
                                <p>Thank you! Our music web team will reach out to get your tracks and merch catalog live.</p>
                            </div>
                        ) : (
                            <form className="mc-form" onSubmit={handleSubmit}>
                                <div className="mc-form-grid">
                                    <div className="mc-form-group">
                                        <label>ARTIST / BAND NAME</label>
                                        <input type="text" name="artistName" required placeholder="e.g. The Yellow Diary" value={form.artistName} onChange={handleChange} />
                                    </div>
                                    <div className="mc-form-group">
                                        <label>GENRE / STYLE</label>
                                        <select name="genre" value={form.genre} onChange={handleChange} className="mc-select">
                                            <option value="Indie & Alternative">Indie & Alternative</option>
                                            <option value="Rock & Metal">Rock & Metal</option>
                                            <option value="Electronic & DJ">Electronic & DJ</option>
                                            <option value="Classical & Instrumental">Classical & Instrumental</option>
                                            <option value="Hip-Hop & Rap">Hip-Hop & Rap</option>
                                        </select>
                                    </div>
                                    <div className="mc-form-group">
                                        <label>PHONE / WHATSAPP</label>
                                        <input type="tel" name="phone" required placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                    </div>
                                    <div className="mc-form-group">
                                        <label>CONTACT EMAIL</label>
                                        <input type="email" name="email" required placeholder="management@band.com" value={form.email} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="mc-form-action">
                                    <button type="submit" className="mc-btn-submit">Build Official Site →</button>
                                    <p className="mc-direct-mail">Or email <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a></p>
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
