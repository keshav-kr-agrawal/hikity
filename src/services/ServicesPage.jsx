import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './ServicesPage.css';

const ServicesPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Solutions');

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Hikity Services | Accessible Digital Infrastructure & Industry Solutions";

        const handleScroll = () => {
            if (window.scrollY > 50) setScrolled(true);
            else setScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const flagshipSolutions = [
        {
            badge: "FLAGSHIP OFFERING",
            title: "Hikity Commerce Platform",
            price: "From ₹30,000/year",
            desc: "Launch your professional e-commerce store without taking on ₹1–3 lakh upfront development costs or technical complexity. Complete with mobile camera uploads, UPI QR payments, profit tracking, and WhatsApp sharing.",
            path: "/commerce",
            icon: "🛍️",
            highlights: [
                "No technical headache (Vercel + Supabase + Cloudinary managed)",
                "Built-in UPI payment QR & manual verification",
                "Gross & Net Profit analytics dashboard",
                "Product sharing on WhatsApp & native mobile",
                "Customer accounts & order management"
            ]
        },
        {
            badge: "PROMINENT INITIATIVE",
            title: "Built for Women Entrepreneurs",
            price: "Accessible Entry Models",
            desc: "Empowering women-led brands, boutiques, home bakeries, gift stores, and craft businesses across India with dedicated digital storefronts, brand identity, and managed commerce infrastructure.",
            path: "/women",
            icon: "✨",
            highlights: [
                "Designed specifically to move from WhatsApp/Instagram to own store",
                "Low upfront financial barrier & managed technology",
                "Featured case studies (Anita Gift House, Bhagalpur)",
                "Full support & setup guidance from Hikity founders"
            ]
        },
        {
            badge: "ENTERPRISE PROTOCOL",
            title: "Corporate & Enterprise Systems",
            price: "Custom Scope",
            desc: "Custom digital architecture, high-performance web applications, automated business workflows, and AI agent integration for scaling companies.",
            path: "/business",
            icon: "🏢",
            highlights: [
                "Custom web & mobile application architecture",
                "Smart process automation & zero-overhead workflows",
                "Custom AI Agents & CRM integrations",
                "High-availability cloud infrastructure"
            ]
        },
        {
            badge: "TECHNICAL PARTNERSHIP",
            title: "Hikity Build Program",
            price: "Equity / Capital Co-Founding",
            desc: "A co-founding technical partnership program for high-growth visionaries. We act as your fractional CTO and technical team to build, launch, and scale your product.",
            path: "/build",
            icon: "🚀",
            highlights: [
                "Fractional CTO & full-stack development team",
                "Rapid prototyping from zero to production",
                "Capital or Equity co-building models",
                "Continuous iteration & technical governance"
            ]
        }
    ];

    const industryVerticals = [
        {
            title: "Dental Practices & Clinics",
            path: "/dentist",
            icon: "🦷",
            desc: "Patient acquisition funnels, online appointment booking, clinic branding, and clean digital architecture for healthcare professionals.",
            features: ["Patient Scheduling", "Clinic Branding", "Local SEO & Google Maps"]
        },
        {
            title: "Educational Institutions",
            path: "/school",
            icon: "🎓",
            desc: "Digital enrollment portals, school websites, student query systems, and administrative announcement hubs for schools and institutes.",
            features: ["Enrollment Funnels", "Notice Board Ticker", "Parent Portals"]
        },
        {
            title: "Cafés, Bakeries & Restaurants",
            path: "/cafe",
            icon: "☕",
            desc: "QR code digital menus, online direct food ordering, cloud kitchen portals, and table reservation systems for hospitality ventures.",
            features: ["Digital QR Menus", "Direct Ordering", "Location Discovery"]
        },
        {
            title: "Musicians, Bands & Performing Artists",
            path: "/art/music",
            icon: "🎸",
            desc: "Merchandise e-commerce stores, tour schedule hubs, album showcases, and fan community engagement platforms for artists.",
            features: ["Merch Storefronts", "Tour Schedules", "Audio/Video Showcases"]
        },
        {
            title: "Crafters, Artisans & D2C Makers",
            path: "/art/craft",
            icon: "🎨",
            desc: "Direct-to-consumer e-commerce systems, handmade story showcases, and custom order request workflows for creative artisans.",
            features: ["Artisan Galleries", "Custom Order Forms", "International Shipping"]
        },
        {
            title: "Professional Portfolios & Executives",
            path: "/work",
            icon: "💼",
            desc: "High-fidelity personal web platforms, executive portfolios, speaker hubs, and digital authority systems for independent leaders.",
            features: ["Case Study Architecture", "Media Kit Downloads", "Lead Capture"]
        }
    ];

    return (
        <div className="services-page">
            {/* NAVIGATION BAR */}
            <nav className={`services-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="services-nav-logo">
                    <div className="services-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY SERVICES</span>
                </Link>
                <div className="services-nav-links">
                    <Link to="/" className="services-nav-link">Home</Link>
                    <Link to="/commerce" className="services-nav-link">Commerce</Link>
                    <Link to="/case-studies" className="services-nav-link">Case Studies</Link>
                    <Link to="/women" className="services-nav-link">Women Initiative</Link>
                    <Link to="/blog" className="services-nav-link">Blog</Link>
                    <a href="#consultation" onClick={(e) => { e.preventDefault(); scrollToSection('consultation'); }} className="services-nav-cta">Consult Hikity</a>
                </div>
                <button className="services-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`services-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`services-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="services-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/commerce" className="services-nav-link" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                <Link to="/case-studies" className="services-nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                <Link to="/women" className="services-nav-link" onClick={() => setMobileMenuOpen(false)}>Women Initiative</Link>
                <Link to="/blog" className="services-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <a href="#consultation" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); scrollToSection('consultation'); }} className="services-nav-cta" style={{ textAlign: 'center', marginTop: '10px' }}>Consult Hikity</a>
            </div>

            {/* HERO SECTION */}
            <header className="services-hero">
                <div className="services-hero-bg">
                    <div className="services-hero-glow" />
                    <div className="services-hero-grid" />
                </div>
                <div className="services-container">
                    <div className="services-hero-content">
                        <div className="services-hero-badge">
                            <span className="services-hero-badge-dot" />
                            HIKITY ARCHITECTURAL DIVISION // SERVICES HUB
                        </div>
                        <h1 className="services-hero-title">
                            Accessible Digital Infrastructure <br />
                            <span className="services-hero-title-accent">& Scalable Systems.</span>
                        </h1>
                        <p className="services-hero-subtitle">
                            From managed e-commerce storefronts starting at ₹30,000/year to autonomous AI agents and enterprise automation, Hikity engineers professional digital technology for businesses across every stage of growth.
                        </p>

                        <div className="services-stats-bar">
                            <div className="stat-item">
                                <span className="stat-num">10+</span>
                                <span className="stat-label">Specialized Verticals</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-num">From ₹30k/yr</span>
                                <span className="stat-label">Managed E-Commerce</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-num">100%</span>
                                <span className="stat-label">Managed Technology</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-num">24/7</span>
                                <span className="stat-label">Maintenance & Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* SECTION 1: FLAGSHIP CORE SOLUTIONS */}
            <section className="flagship-section">
                <div className="services-container">
                    <div className="services-section-header">
                        <span className="services-eyebrow">CORE PILLARS</span>
                        <h2 className="services-title-large">Flagship Capabilities</h2>
                        <p className="services-subtitle">Explore our primary digital platforms and co-building programs.</p>
                    </div>

                    <div className="flagship-grid">
                        {flagshipSolutions.map((item, idx) => (
                            <div className="flagship-card" key={idx}>
                                <div className="flagship-header">
                                    <span className="flagship-badge">{item.badge}</span>
                                    <span className="flagship-price-pill">{item.price}</span>
                                </div>
                                <div className="flagship-title-row">
                                    <span className="flagship-icon">{item.icon}</span>
                                    <h3 className="flagship-title">{item.title}</h3>
                                </div>
                                <p className="flagship-desc">{item.desc}</p>
                                
                                <ul className="flagship-highlights">
                                    {item.highlights.map((h, i) => (
                                        <li key={i}>
                                            <span className="h-check">✓</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flagship-action">
                                    <Link to={item.path} className="flagship-btn">
                                        Explore {item.title} →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 2: INDUSTRY VERTICALS BENTO GRID */}
            <section className="verticals-section">
                <div className="services-container">
                    <div className="services-section-header">
                        <span className="services-eyebrow">TAILORED INDUSTRY SOLUTIONS</span>
                        <h2 className="services-title-large">Purpose-Built for Your Vertical</h2>
                        <p className="services-subtitle">Every industry has distinct workflows. We architect specialized software matching your exact operational model.</p>
                    </div>

                    <div className="verticals-bento-grid">
                        {industryVerticals.map((vert, idx) => (
                            <Link to={vert.path} className="vertical-bento-card" key={idx}>
                                <div className="vertical-card-top">
                                    <span className="vertical-bento-icon">{vert.icon}</span>
                                    <h3 className="vertical-bento-title">{vert.title}</h3>
                                </div>
                                <p className="vertical-bento-desc">{vert.desc}</p>
                                <div className="vertical-tags">
                                    {vert.features.map((f, i) => (
                                        <span className="v-tag" key={i}>{f}</span>
                                    ))}
                                </div>
                                <div className="vertical-card-footer">
                                    <span className="view-link">View Vertical Solution</span>
                                    <span className="arrow-icon">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: HIKITY TECHNOLOGY ARCHITECTURE & ADVANTAGES */}
            <section className="tech-architecture-section">
                <div className="services-container">
                    <div className="tech-card-wrapper">
                        <div className="tech-card-header">
                            <span className="services-eyebrow">ENGINEERING INTEGRITY</span>
                            <h2 className="tech-card-title">How Hikity Delivers Infrastructure</h2>
                            <p className="tech-card-subtitle">
                                We combine Vercel edge deployment, Supabase real-time database architecture, Cloudinary media delivery, and AI automation into a unified managed service.
                            </p>
                        </div>

                        <div className="tech-pillars-grid">
                            <div className="tech-pillar-item">
                                <span className="pillar-num">01</span>
                                <h4>Zero Upfront Barrier</h4>
                                <p>Launch professional stores from ₹30,000/year instead of committing ₹1–3 lakh upfront to freelancers or traditional agencies.</p>
                            </div>
                            <div className="tech-pillar-item">
                                <span className="pillar-num">02</span>
                                <h4>100% Technology Managed</h4>
                                <p>You focus strictly on your products and business ops. Hikity handles server deployment, database synchronization, SSL security, and updates.</p>
                            </div>
                            <div className="tech-pillar-item">
                                <span className="pillar-num">03</span>
                                <h4>Ecosystem Scalability</h4>
                                <p>Start with basic storefront commerce and seamlessly layer on WhatsApp integrations, AI customer agents, profit dashboards, and custom automations.</p>
                            </div>
                            <div className="tech-pillar-item">
                                <span className="pillar-num">04</span>
                                <h4>Founder-First Support</h4>
                                <p>Direct technical support from Hikity engineers with transparent pricing, zero hidden technology fees, and 24-hour response SLAs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDY HIGHLIGHT BANNER */}
            <section className="services-casestudy-banner" style={{ background: 'rgba(15, 23, 42, 0.7)', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '60px 0' }}>
                <div className="services-container" style={{ textAlign: 'center' }}>
                    <span className="services-eyebrow" style={{ color: '#38bdf8' }}>REAL SUCCESS STORIES FROM BHAGALPUR</span>
                    <h2 style={{ fontSize: '2.2rem', color: '#fff', margin: '12px 0 16px', fontWeight: 800 }}>See How We Transformed Bhagalpur Businesses</h2>
                    <p style={{ color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 28px', lineHeight: '1.6', fontSize: '1rem' }}>
                        Discover how <strong>Anita Gift House</strong> automated stock management & profit tracking, and how <strong>KLATAX</strong> built a streamlined office scheduling platform.
                    </p>
                    <Link to="/case-studies" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #0284c7, #2563eb)', color: '#fff', padding: '14px 32px', borderRadius: '30px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 15px rgba(2, 132, 199, 0.4)' }}>
                        Read Bhagalpur Case Studies →
                    </Link>
                </div>
            </section>

            {/* SECTION 4: CONSULTATION & INQUIRY FORM */}
            <section id="consultation" className="services-consultation-section">
                <div className="services-container">
                    <div className="consultation-card">
                        <div className="consultation-header">
                            <span className="services-eyebrow">START THE CONVERSATION</span>
                            <h2 className="consultation-title">Which solution fits your business?</h2>
                            <p className="consultation-subtitle">
                                Tell us about your business, current channels, or technical goals. Our architectural board will evaluate your requirements and reach back within 24 hours.
                            </p>
                        </div>

                        <form action="https://formsubmit.co/hikityofficial@gmail.com" method="POST" className="consultation-form">
                            <div className="form-grid-2">
                                <div className="s-form-group">
                                    <label htmlFor="s-name">YOUR NAME / FOUNDER NAME</label>
                                    <input type="text" id="s-name" name="name" required placeholder="e.g. Priya Sharma / Sparsh Mukthi" />
                                </div>
                                <div className="s-form-group">
                                    <label htmlFor="s-email">EMAIL ADDRESS</label>
                                    <input type="email" id="s-email" name="email" required placeholder="you@company.com" />
                                </div>
                                <div className="s-form-group">
                                    <label htmlFor="s-phone">PHONE / WHATSAPP NUMBER</label>
                                    <input type="tel" id="s-phone" name="phone" required placeholder="+91 98765 43210" />
                                </div>
                                <div className="s-form-group">
                                    <label htmlFor="s-service">SERVICE CATEGORY</label>
                                    <select id="s-service" name="service_category" className="s-select">
                                        <option value="Hikity Commerce Platform (₹30,000/yr)">Hikity Managed Commerce Platform (₹30,000/yr)</option>
                                        <option value="Women Entrepreneur Initiative">Women Entrepreneur Initiative</option>
                                        <option value="Corporate & Enterprise Systems">Corporate & Enterprise Systems</option>
                                        <option value="Hikity Build Program (Co-Founding)">Hikity Build Program (Co-Founding)</option>
                                        <option value="Dental Practices / Clinic Architecture">Dental Practices / Clinic Architecture</option>
                                        <option value="Educational Institutions">Educational Institutions</option>
                                        <option value="Cafes & Hospitality">Cafes & Hospitality</option>
                                        <option value="Crafters & Artisans">Crafters & Artisans</option>
                                        <option value="Musicians & Performers">Musicians & Performers</option>
                                        <option value="Professional Executive Portfolio">Professional Executive Portfolio</option>
                                    </select>
                                </div>
                                <div className="s-form-group full">
                                    <label htmlFor="s-msg">BUSINESS DETAILS & VISION</label>
                                    <textarea id="s-msg" name="message" rows="4" placeholder="Describe what your business does, your product catalog or service offerings, and any specific requirements..."></textarea>
                                </div>
                            </div>

                            <div className="s-form-action">
                                <button type="submit" className="s-submit-btn">
                                    Initiate Consultation →
                                </button>
                                <p className="s-direct-mail">
                                    Direct Email: <a href="mailto:hikityofficial@gmail.com">hikityofficial@gmail.com</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* ENTERPRISE FOOTER */}
            <div className="services-footer-wrapper">
                <EnterpriseFooter onNavigate={() => {}} />
            </div>
        </div>
    );
};

export default ServicesPage;
