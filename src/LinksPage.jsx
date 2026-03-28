import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';
import './LinksPage.css';

const LinksPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pageLinks = [
        {
            path: "/",
            title: "HIKITY Base Protocol",
            desc: "The core architectural hub. Enterprise engineering, AI automation, and web solutions.",
            icon: "HQ"
        },
        {
            path: "/build",
            title: "Hikity Build Program",
            desc: "An exclusive technical partnership program for high-growth visionaries and founders.",
            icon: "B"
        },
        {
            path: "/business",
            title: "Corporate & Enterprise",
            desc: "High-level digital infrastructure and automated systems for scaling enterprises.",
            icon: "CE"
        },
        {
            path: "/work",
            title: "Professional Portfolios",
            desc: "Bespoke digital portfolios and personal branding for independent professionals.",
            icon: "PP"
        },
        {
            path: "/women",
            title: "Women's Special Services",
            desc: "Exclusive offerings empowering female founders to dominate their industries.",
            icon: "W"
        },
        {
            path: "/dentist",
            title: "Dental Practices",
            desc: "Patient acquisition systems and clean digital architecture for dental clinics.",
            icon: "D"
        },
        {
            path: "/school",
            title: "Educational Institutions",
            desc: "Robust digital platforms and enrollment funnels for schools and academies.",
            icon: "S"
        },
        {
            path: "/cafe",
            title: "Cafes & Restaurants",
            desc: "Menu digitization, ordering systems, and atmospheric branding for hospitality.",
            icon: "CR"
        },
        {
            path: "/art/music",
            title: "Musicians & Bands",
            desc: "Merchandising, tour scheduling, and identity building for musical artists.",
            icon: "M"
        },
        {
            path: "/art/craft",
            title: "Crafters & Artisans",
            desc: "Direct-to-consumer e-commerce systems designed for unique handmade goods.",
            icon: "A"
        },
        {
            path: "/blog",
            title: "Hikity Blog",
            desc: "Insights, tutorials, and deep dives into enterprise engineering and AI setup.",
            icon: "B"
        },
        {
            path: "/t&c",
            title: "Terms & Conditions",
            desc: "Our official legal terms, conditions, and privacy policies.",
            icon: "TC"
        }
    ];

    return (
        <div className="links-page">
            <nav className="b-nav scrolled">
                <Link to="/" className="b-nav-logo">
                    <div className="b-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY</span>
                </Link>
                <div className="b-nav-links">
                    <a href="/#contact" className="b-nav-cta">Pitch Us</a>
                </div>
            </nav>

            <main className="links-content">
                <div className="links-header">
                    <span className="links-tag">GLOBAL DIRECTORY</span>
                    <h1 className="links-title">The Hikity Network</h1>
                    <p className="links-subtitle">
                        Navigate our comprehensive ecosystem of industry-specific architectural solutions and specialized programs.
                    </p>
                </div>

                <div className="links-grid">
                    {pageLinks.map((linkItem, index) => (
                        <Link to={linkItem.path} key={index} className="links-card">
                            <div className="links-icon">{linkItem.icon}</div>
                            <div className="links-card-body">
                                <h3 className="links-card-title">{linkItem.title}</h3>
                                <p className="links-card-desc">{linkItem.desc}</p>
                            </div>
                            <div className="links-card-arrow">→</div>
                        </Link>
                    ))}
                </div>
            </main>

            <div className="links-footer-wrapper">
                <EnterpriseFooter onNavigate={() => { }} />
            </div>
        </div>
    );
};

export default LinksPage;
