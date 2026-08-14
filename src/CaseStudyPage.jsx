import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';
import './CaseStudyPage.css';

const CaseStudyPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Bhagalpur Case Studies | Hikity Real-World Transformations";

        const originalBg = document.body.style.backgroundColor;
        const originalColor = document.body.style.color;
        document.body.style.backgroundColor = '#fbfbfd';
        document.body.style.color = '#0f172a';

        return () => {
            document.body.style.backgroundColor = originalBg;
            document.body.style.color = originalColor;
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="cs-page">
            {/* NAVIGATION BAR WITH RESPONSIVE 3-LINE HAMBURGER MENU */}
            <nav className="cs-nav">
                <Link to="/" className="cs-nav-logo">
                    <div className="cs-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY CASE STUDIES</span>
                </Link>

                <div className="cs-nav-links">
                    <Link to="/" className="cs-nav-link">Home</Link>
                    <Link to="/services" className="cs-nav-link">Services</Link>
                    <Link to="/commerce" className="cs-nav-link">Commerce</Link>
                    <Link to="/blog" className="cs-nav-link">Blog</Link>
                    <Link to="/services#consultation" className="cs-nav-cta">Consult Hikity</Link>
                </div>

                <button className="cs-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle navigation">
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`cs-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`cs-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="cs-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" className="cs-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/commerce" className="cs-nav-link" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                <Link to="/case-studies" className="cs-nav-link active" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                <Link to="/blog" className="cs-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                <Link to="/services#consultation" className="cs-nav-cta" style={{ textAlign: 'center', marginTop: '10px' }} onClick={() => setMobileMenuOpen(false)}>Consult Hikity</Link>
            </div>

            {/* HERO SECTION */}
            <header className="cs-hero">
                <div className="cs-hero-tag">
                    <span>📍 BHAGALPUR DIGITAL SUCCESS STORIES</span>
                </div>
                <h1 className="cs-hero-title">Transforming Local Businesses into Automated Powerhouses</h1>
                <p className="cs-hero-sub">
                    Discover how Hikity helped traditional businesses in Bhagalpur eliminate manual exhaustion, automate stock & scheduling workflows, and unlock massive profit potential.
                </p>
            </header>

            {/* CASE STUDIES CONTAINER */}
            <div className="cs-container">

                {/* CASE STUDY 1: ANITA GIFT HOUSE */}
                <article className="cs-card">
                    <div className="cs-card-header">
                        <div>
                            <span className="cs-card-location">📍 Bhagalpur, Bihar</span>
                            <h2 className="cs-card-client-name">Anita Gift House</h2>
                            <div className="cs-card-category">Retail E-Commerce & Inventory Automation</div>
                        </div>
                    </div>

                    <div className="cs-grid">
                        <div className="cs-box-before">
                            <h4>❌ The Daily Struggles Before Hikity</h4>
                            <ul className="cs-list">
                                <li><strong>Exhausting 14+ Hour Workdays:</strong> The owner was constantly stressed and tired, spending all day manually snapping gift item photos and answering endless price queries on WhatsApp & Instagram.</li>
                                <li><strong>Manual Status & Story Updates:</strong> Endless hours spent posting story after story and updating WhatsApp status for every single new item arriving in stock.</li>
                                <li><strong>No Stock Maintenance:</strong> Zero inventory tracking system led to double-selling items already out of stock, frustrating local customers.</li>
                                <li><strong>Zero Profit Clarity:</strong> Sales income was mixed with personal expenses with no structured record of profit margin or daily revenue.</li>
                            </ul>
                        </div>

                        <div className="cs-box-after">
                            <h4>✅ The Hikity Digital Transformation</h4>
                            <ul className="cs-list">
                                <li><strong>Automated E-Commerce Portal:</strong> Built a custom online catalog where customers browse gifts, check live prices, and order directly.</li>
                                <li><strong>Instant Stock & Price Sync:</strong> Automatic stock level updates eliminate manual photo-sharing and status posting entirely.</li>
                                <li><strong>Real-Time Profit Dashboard:</strong> Comprehensive dashboard tracking daily sales, product margins, and net profits automatically.</li>
                                <li><strong>Stress-Free Growth:</strong> Owner reduced daily customer support workload by 85% while increasing customer satisfaction.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cs-solution-section">
                        <h4>💡 Hikity Engineering & Solution Architecture</h4>
                        <p className="cs-solution-desc">
                            We deployed a high-performance web catalog integrated with dynamic stock management and automated WhatsApp order routing. The system allowed Anita Gift House to maintain real-time inventory, publish new gift collections instantly, and track total store profits effortlessly.
                        </p>
                    </div>

                    <div className="cs-metrics">
                        <div className="cs-metric-card">
                            <div className="cs-metric-num">85%</div>
                            <div className="cs-metric-label">Reduction in Manual WhatsApp Queries</div>
                        </div>
                        <div className="cs-metric-card">
                            <div className="cs-metric-num">100%</div>
                            <div className="cs-metric-label">Accurate Real-Time Inventory</div>
                        </div>
                        <div className="cs-metric-card">
                            <div className="cs-metric-num">3.5x</div>
                            <div className="cs-metric-label">Increase in Daily Sales Capacity</div>
                        </div>
                    </div>
                </article>

                {/* CASE STUDY 2: KLATAX */}
                <article className="cs-card">
                    <div className="cs-card-header">
                        <div>
                            <span className="cs-card-location">📍 Bhagalpur, Bihar</span>
                            <h2 className="cs-card-client-name">KLATAX Office Platform</h2>
                            <div className="cs-card-category">Enterprise Office Scheduling & Workflow Management</div>
                        </div>
                    </div>

                    <div className="cs-grid">
                        <div className="cs-box-before">
                            <h4>❌ Operational Chaos Before Hikity</h4>
                            <ul className="cs-list">
                                <li><strong>Manual Office Scheduling:</strong> Managing tax client consultations, GST filings, and auditor meetings via paper notebooks and phone calls created severe scheduling overlaps.</li>
                                <li><strong>Document Disorganization:</strong> Client tax documents, income receipts, and compliance files were scattered across physical folders, causing delays.</li>
                                <li><strong>No Automated Status Tracking:</strong> Staff spent hours calling clients individually to collect missing documents or inform them about tax filing status.</li>
                                <li><strong>Unclear Work Progress:</strong> Difficulty tracking task deadlines across team members and managing client follow-ups.</li>
                            </ul>
                        </div>

                        <div className="cs-box-after">
                            <h4>✅ The Hikity Office Solution</h4>
                            <ul className="cs-list">
                                <li><strong>Smart Office Scheduling Platform:</strong> Developed an integrated appointment and resource scheduling calendar for tax advisory.</li>
                                <li><strong>Secure Client Document Portal:</strong> Clients upload financial records and tax documents directly to an organized digital portal.</li>
                                <li><strong>Automated SMS & WhatsApp Status Updates:</strong> Automatic client notifications whenever tax return status or audit stages update.</li>
                                <li><strong>Comprehensive Staff Dashboard:</strong> Real-time task board for office staff to assign, monitor, and finalize client tax filings on time.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cs-solution-section">
                        <h4>💡 Hikity Engineering & Solution Architecture</h4>
                        <p className="cs-solution-desc">
                            Hikity engineered a robust cloud platform custom-tailored for KLATAX's Bhagalpur office. It automated client appointment booking, document organization, and status dispatch, establishing a seamless modern operational workflow.
                        </p>
                    </div>

                    <div className="cs-metrics">
                        <div className="cs-metric-card">
                            <div className="cs-metric-num">90%</div>
                            <div className="cs-metric-label">Reduction in Scheduling Calls</div>
                        </div>
                        <div className="cs-metric-card">
                            <div className="cs-metric-num">100%</div>
                            <div className="cs-metric-label">On-Time Document Processing</div>
                        </div>
                        <div className="cs-metric-card">
                            <div className="cs-metric-num">4.9/5</div>
                            <div className="cs-metric-label">Client Satisfaction Rating</div>
                        </div>
                    </div>
                </article>

                {/* CALL TO ACTION BANNER */}
                <div className="cs-cta-banner">
                    <h3>Ready to Automate Your Business in Bhagalpur & Beyond?</h3>
                    <p>
                        Whether you run a retail shop like Anita Gift House or a professional advisory office like KLATAX, Hikity builds tailor-made web solutions that save time and maximize profit.
                    </p>
                    <Link to="/services" className="cs-cta-button">Get Your Custom Web Solution</Link>
                </div>

            </div>

            {/* ENTERPRISE FOOTER */}
            <div style={{ marginTop: '80px' }}>
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default CaseStudyPage;
