import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './ServicesPage.css';

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const nav = document.querySelector('.services-nav');
            if (nav) {
                if (window.scrollY > 50) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const serviceLinks = [
        { path: "/business", title: "Corporate & Enterprise", desc: "Digital infrastructure and automated systems for scaling enterprises.", icon: "🏢" },
        { path: "/build", title: "Hikity Build Program", desc: "Technical partnership program for high-growth visionaries.", icon: "🚀" },
        { path: "/women", title: "Women's Special Services", desc: "Exclusive offerings empowering female founders.", icon: "✨" },
        { path: "/dentist", title: "Dental Practices", desc: "Patient acquisition systems and clean architecture for clinics.", icon: "🦷" },
        { path: "/school", title: "Educational Institutions", desc: "Robust digital platforms and enrollment funnels for schools.", icon: "🎓" },
        { path: "/cafe", title: "Cafes & Restaurants", desc: "Menu digitization and ordering systems for hospitality.", icon: "☕" },
        { path: "/art/music", title: "Musicians & Bands", desc: "Merchandising and tour scheduling for artists.", icon: "🎸" },
        { path: "/art/craft", title: "Crafters & Artisans", desc: "Direct-to-consumer e-commerce systems for handmade goods.", icon: "🎨" },
        { path: "/work", title: "Professional Portfolios", desc: "Bespoke digital portfolios for independent professionals.", icon: "💼" },
    ];

    return (
        <div className="services-page">
            <nav className="services-nav">
                <Link to="/" className="services-nav-logo">
                    <div className="services-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY</span>
                </Link>
                <div className="services-nav-links">
                    <Link to="/" className="services-nav-link">Home</Link>
                    <Link to="/links" className="services-nav-link">Network</Link>
                    <Link to="/blog" className="services-nav-link">Blog</Link>
                    <a href="/#contact" className="services-nav-cta">Reach Out</a>
                </div>
            </nav>

            <header className="services-hero">
                <div className="services-hero-bg">
                    <div className="services-hero-gradient" />
                    <div className="services-hero-dots" />
                </div>
                <div className="services-container">
                    <div className="services-hero-content">
                        <div className="services-hero-badge">
                            <span className="services-hero-badge-dot" />
                            OUR EXPERTISE
                        </div>
                        <h1 className="services-hero-title">
                            Industry-Specific <span className="services-hero-title-accent">Architecture</span>
                        </h1>
                        <p className="services-hero-subtitle">
                            Discover our tailored digital solutions designed to accelerate growth across every major vertical. Find your industry below.
                        </p>
                    </div>
                </div>
            </header>

            <main className="services-section">
                <div className="services-container">
                    <div className="services-bento-grid">
                        {serviceLinks.map((service, index) => (
                            <Link to={service.path} key={index} className="service-card">
                                <div>
                                    <div className="service-card-icon">{service.icon}</div>
                                    <h3 className="service-card-title">{service.title}</h3>
                                    <p className="service-card-desc">{service.desc}</p>
                                </div>
                                <div className="service-card-footer">
                                    <span className="service-card-arrow">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <div className="services-footer-wrapper">
                <EnterpriseFooter onNavigate={() => {}} />
            </div>
        </div>
    );
};

export default ServicesPage;
