import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './BuildTnC.css';

const BuildTnC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="build-tnc-page">
            <nav className="b-nav scrolled">
                <Link to="/" className="b-nav-logo">
                    <div className="b-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY</span>
                </Link>
                <div className="b-nav-links">
                    <Link to="/build" className="b-nav-link">Back to Build</Link>
                    <Link to="/blog" className="b-nav-link" style={{marginLeft: "20px"}}>Blog</Link>
                    <a href="/#contact" className="b-nav-cta">Pitch Us</a>
                </div>
            </nav>

            <main className="b-tnc-content">
                <div className="b-tnc-header">
                    <span className="b-tnc-tag">LEGAL & PARTNERSHIP</span>
                    <h1 className="b-tnc-title">Build Program<br />Terms & Conditions</h1>
                    <p className="b-tnc-subtitle">
                        Please review the foundational terms governing the Hikity & <a href="https://hikat.xyz" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Hikat</a> development partnerships.
                    </p>
                </div>

                <div className="b-tnc-body">
                    <section className="b-tnc-section">
                        <h2>1. Partnership Models Overview</h2>
                        <p>
                            Hikity offers engineering, design, and growth services specifically tailored for innovators and founders. The formal engagement is structured either as a traditional Capital/Fee-for-Service model or an Equity Partnership model managed through our parent company, <strong><a href="https://hikat.xyz" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Hikat (hikat.xyz)</a></strong>.
                        </p>
                    </section>

                    <section className="b-tnc-section">
                        <h2>2. Financial & Equity Determinations</h2>
                        <p>
                            <strong>All final pricing, equity percentages, and royalty structures are exclusively determined by the <a href="https://hikat.xyz" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Hikat</a> executive team.</strong>
                        </p>
                        <p>
                            While we offer the Equity Model to reduce the initial capital burden on founders, these valuations and terms are evaluated on a strict, case-by-case basis. Applying for an Equity Partnership does not guarantee acceptance.
                        </p>
                    </section>

                    <section className="b-tnc-section">
                        <h2>3. The Baseline Fee Provision</h2>
                        <p>
                            Please note a critical condition of our Equity Partnership: <strong>Even in scenarios where a founder provides equity and royalty stakes to <a href="https://hikat.xyz" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Hikat</a>, a small, baseline development fee will still be charged.</strong>
                        </p>
                        <p>
                            This baseline fee functions as a commitment mechanism and covers the immediate, concrete overheads (servers, third-party infrastructure, and immediate technical resources) required to initialize your product's architecture. Equity exchanges subsidize the vast majority of development labor, but they do not negate the baseline initialization fee.
                        </p>
                    </section>

                    <section className="b-tnc-section">
                        <h2>4. Project Scope & Execution</h2>
                        <p>
                            All timelines, deliverables, and exact feature sets will be outlined in a formal Statement of Work (SOW) provided after the initial vision consultation. Any variations or additions to the scope post-signing may alter the baseline fee and timeframe.
                        </p>
                    </section>

                    <div className="b-tnc-contact-prompt">
                        <p>For clarifications on any terms, please reach our architectural board at <strong>hikityofficial@gmail.com</strong> or <strong>contact@hikity.xyz</strong>.</p>
                        <Link to="/build" className="b-btn-primary" style={{ marginTop: '24px' }}>Return to Build</Link>
                    </div>
                </div>
            </main>

            <div className="b-footer-wrapper">
                <EnterpriseFooter onNavigate={() => { }} />
            </div>
        </div>
    );
};

export default BuildTnC;
