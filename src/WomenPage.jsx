import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';
import './WomenPage.css';

const WomenPage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [visibleSections, setVisibleSections] = useState({});
    const sectionsRef = useRef([]);

    // Navbar scroll tint
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll-reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.08 }
        );
        const currentRefs = sectionsRef.current;
        currentRefs.forEach((el) => { if (el) observer.observe(el); });
        return () => currentRefs.forEach((el) => { if (el) observer.unobserve(el); });
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    const businesses = [
        { icon: '👗', title: 'Fashion & Apparel', desc: 'Boutiques, ethnic wear, western fashion, handloom sarees, designer suits, kurtis, streetwear, and everything in between.' },
        { icon: '💎', title: 'Jewellery & Accessories', desc: 'Handcrafted jewellery, silver, gold, artificial, beaded, bridal collections, handbags, and artisan accessories.' },
        { icon: '☕', title: 'Cafés & Bakeries', desc: 'Home bakeries, cloud kitchens, café businesses, dessert studios, chai spots, and specialty food ventures.' },
        { icon: '🌿', title: 'Beauty & Wellness', desc: 'Skincare brands, natural cosmetics, hair care, salons, spas, holistic wellness, and herbal product lines.' },
        { icon: '🎨', title: 'Art & Handicrafts', desc: 'Handmade art, pottery, candles, home décor, resin crafts, macramé, and artisanal gifting brands.' },
        { icon: '📚', title: 'Education & Coaching', desc: 'Online tutoring, skill workshops, language classes, career coaching, parenting courses, and upskilling ventures.' },
        { icon: '🍽️', title: 'Food & Home Cooking', desc: 'Tiffin services, homemade food brands, meal prep, regional cuisine delivery, and specialty food products.' },
        { icon: '🏠', title: 'Home Décor & Interior', desc: 'Interior styling, décor brands, furniture upcycling, plant businesses, and lifestyle product lines.' },
        { icon: '📸', title: 'Photography & Creative', desc: 'Photography studios, content creation, graphic design, social media management, and digital creative services.' },
        { icon: '👶', title: 'Kids & Parenting', desc: 'Baby products, kids clothing, educational toys, parenting blogs, childcare services, and maternity care brands.' },
        { icon: '💪', title: 'Fitness & Health', desc: 'Yoga studios, personal training, nutrition coaching, dance classes, Zumba, pilates, and wellness retreats.' },
        { icon: '🌐', title: 'Tech & Digital', desc: 'Women-led tech startups, freelancing, virtual assistant services, app development, and digital consulting.' },
    ];

    const stages = [
        {
            tag: 'PLANNING STAGE',
            title: 'Your Idea Deserves a Digital Home',
            desc: "Even if you haven't launched yet, Hikity helps you establish your brand identity, claim your digital space, and build a waitlist or coming-soon page that creates buzz before day one.",
            points: ['Brand naming & identity design', 'Coming-soon website & landing page', 'Pre-launch marketing strategy', 'Social media profile setup'],
        },
        {
            tag: 'EARLY STAGE',
            title: 'Turn Your Launch Into a Movement',
            desc: "You've started. Now let's make sure the world knows about it. We build your full digital presence — website, social media strategy, and the tools to convert visitors into loyal customers.",
            points: ['Professional website & online store', 'Brand storytelling & content strategy', 'Instagram & social media setup', 'WhatsApp Business integration'],
        },
        {
            tag: 'GROWING STAGE',
            title: 'Scale Locally, Think Globally',
            desc: "Your business is gaining momentum. We take it to the next level with advanced digital marketing, SEO, automation tools, and systems that free you to focus on what you love.",
            points: ['SEO & Google visibility', 'E-commerce optimization', 'Automated customer journeys', 'Analytics & business insights'],
        },
        {
            tag: 'EXPANSION STAGE',
            title: 'Go Global, Stay Authentic',
            desc: "Ready to reach customers beyond borders? Hikity architects your global digital infrastructure — multilingual websites, international payment gateways, and worldwide brand positioning.",
            points: ['International website localization', 'Global e-commerce & payments', 'Multi-market ad campaigns', 'Brand partnerships & PR'],
        },
    ];

    const hikitySupports = [
        { number: '01', title: 'Digital Identity & Branding', desc: 'A complete brand system — logo, colors, typography, and voice — crafted to make you unforgettable in your market.' },
        { number: '02', title: 'Website & Online Store', desc: 'Beautiful, fast, mobile-first websites and e-commerce stores that sell for you 24/7, even while you sleep.' },
        { number: '03', title: 'Social Media Presence', desc: 'Consistent, stunning content strategies for Instagram, Facebook, Pinterest, and beyond to grow your community.' },
        { number: '04', title: 'SEO & Google Visibility', desc: 'Get found by customers actively searching for what you offer. We optimize your digital presence for discoverability.' },
        { number: '05', title: 'Global Market Reach', desc: 'From local success to international recognition — we set up the infrastructure to sell and serve customers worldwide.' },
        { number: '06', title: 'Automation & AI Tools', desc: 'Smart tools that handle routine tasks — order tracking, customer replies, inventory alerts — so you can focus on growth.' },
        { number: '07', title: 'Content & Storytelling', desc: 'Your story is your superpower. We craft compelling narratives, product descriptions, and campaigns that connect.' },
        { number: '08', title: 'Analytics & Growth Insights', desc: "Clear dashboards and reports showing what's working, what's not, and the precise steps to accelerate growth." },
    ];

    const testimonials = [
        { quote: 'I started my jewellery brand from home. Hikity built me a website and Instagram strategy that got me 3,000 followers in two months. I now ship internationally.', name: 'Priya M.', business: 'Handcrafted Jewellery, Mumbai' },
        { quote: 'My cloud kitchen was invisible online. Hikity redesigned everything — within 6 weeks, orders doubled and I expanded to 3 new localities.', name: 'Divya R.', business: 'Cloud Kitchen, Bengaluru' },
        { quote: 'Hikity understood my vision for my boutique without me having to explain everything twice. The website they built feels exactly like me.', name: 'Aisha K.', business: 'Fashion Boutique, Delhi' },
    ];

    return (
        <div className="women-page">

            {/* ── NAVIGATION ── */}
            <nav className={`women-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="women-nav-logo">
                    <div className="women-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity" />
                    </div>
                    <span>HIKITY</span>
                </Link>
                <div className="women-nav-links">
                    <Link to="/" className="women-nav-link">Home</Link>
                    <Link to="/" className="women-nav-cta">Contact Us</Link>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section className="women-hero">
                <div className="women-hero-bg">
                    <div className="women-hero-gradient" />
                    <div className="women-hero-dots" />
                </div>

                <div className="women-hero-content">
                    <div className="women-hero-badge">
                        <span className="women-hero-badge-dot" />
                        <span>HIKITY FOR WOMEN FOUNDERS</span>
                    </div>

                    <h1 className="women-hero-title">
                        Your Business.<br />
                        <span className="women-hero-title-accent">Your Empire.</span><br />
                        Built for the World.
                    </h1>

                    <p className="women-hero-subtitle">
                        From your first idea to your global breakthrough — Hikity is the digital partner built for women who are building something extraordinary. Whether you're running a home kitchen, a jewellery brand, a fashion boutique, a salon, or a tech startup, we architect your digital presence so your business can thrive, scale, and go global.
                    </p>

                    <div className="women-hero-actions">
                        <a href="mailto:contact@hikity.xyz" className="women-btn-primary">
                            <span>Start Your Journey</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <Link to="/" className="women-btn-secondary">Explore Hikity</Link>
                    </div>

                    <div className="women-hero-stats">
                        <div className="women-stat">
                            <span className="women-stat-number">50+</span>
                            <span className="women-stat-label">Business Verticals Served</span>
                        </div>
                        <div className="women-stat-divider" />
                        <div className="women-stat">
                            <span className="women-stat-number">100%</span>
                            <span className="women-stat-label">Digital-First Approach</span>
                        </div>
                        <div className="women-stat-divider" />
                        <div className="women-stat">
                            <span className="women-stat-number">Global</span>
                            <span className="women-stat-label">Market Access</span>
                        </div>
                    </div>
                </div>

                <div className="women-hero-visual">
                    <div className="women-hero-card-stack">
                        <div className="women-float-card card-1">
                            <span className="card-icon">💎</span>
                            <span>Jewellery Brand</span>
                        </div>
                        <div className="women-float-card card-2">
                            <span className="card-icon">☕</span>
                            <span>Café &amp; Bakery</span>
                        </div>
                        <div className="women-float-card card-3">
                            <span className="card-icon">👗</span>
                            <span>Fashion Boutique</span>
                        </div>
                        <div className="women-float-card card-4">
                            <span className="card-icon">🌿</span>
                            <span>Wellness Brand</span>
                        </div>
                    </div>
                </div>

                <div className="women-hero-scroll-indicator">
                    <div className="scroll-line" />
                    <span>SCROLL TO EXPLORE</span>
                </div>
            </section>

            {/* ── MANIFESTO TICKER ── */}
            <div className="women-manifesto">
                <div className="women-manifesto-inner">
                    {['FASHION', 'JEWELLERY', 'FOOD', 'BEAUTY', 'WELLNESS', 'EDUCATION', 'ART', 'TECH', 'HOME DÉCOR', 'FITNESS', 'KIDS', 'COACHING'].map((item, i) => (
                        <span key={i} className="women-manifesto-item">
                            {item} <span className="manifesto-dot">✦</span>
                        </span>
                    ))}
                    {/* duplicate for seamless loop */}
                    {['FASHION', 'JEWELLERY', 'FOOD', 'BEAUTY', 'WELLNESS', 'EDUCATION', 'ART', 'TECH', 'HOME DÉCOR', 'FITNESS', 'KIDS', 'COACHING'].map((item, i) => (
                        <span key={`dup-${i}`} className="women-manifesto-item" aria-hidden="true">
                            {item} <span className="manifesto-dot">✦</span>
                        </span>
                    ))}
                </div>
            </div>

            {/* ── BUSINESSES ── */}
            <section
                id="businesses"
                className={`women-section women-businesses ${visibleSections['businesses'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="women-container">
                    <div className="women-section-header">
                        <span className="women-tag">EVERY BUSINESS MATTERS</span>
                        <h2 className="women-section-title">
                            Whatever You Build,<br />We're Behind You
                        </h2>
                        <p className="women-section-subtitle">
                            Hikity serves women entrepreneurs across every industry. From artisan crafts to tech startups — if you're building it, we're here to amplify it.
                        </p>
                    </div>

                    <div className="women-businesses-grid">
                        {businesses.map((biz, i) => (
                            <div key={i} className="women-biz-card">
                                <div className="women-biz-icon">{biz.icon}</div>
                                <h3 className="women-biz-title">{biz.title}</h3>
                                <p className="women-biz-desc">{biz.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="women-businesses-more">
                        <p>And many more — <strong>if you're running a business, Hikity is for you.</strong></p>
                    </div>
                </div>
            </section>

            {/* ── STAGES ── */}
            <section
                id="stages"
                className={`women-section women-stages-section ${visibleSections['stages'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="women-container">
                    <div className="women-section-header">
                        <span className="women-tag">AT EVERY STAGE</span>
                        <h2 className="women-section-title">
                            We Meet You Where You Are
                        </h2>
                        <p className="women-section-subtitle">
                            Whether you have a dream, a side hustle, a growing brand, or an established empire — Hikity has the exact support you need right now.
                        </p>
                    </div>

                    <div className="women-stages-grid">
                        {stages.map((stage, i) => (
                            <div key={i} className="women-stage-card">
                                <div className="women-stage-number">{String(i + 1).padStart(2, '0')}</div>
                                <div className="women-stage-tag">{stage.tag}</div>
                                <h3 className="women-stage-title">{stage.title}</h3>
                                <p className="women-stage-desc">{stage.desc}</p>
                                <ul className="women-stage-points">
                                    {stage.points.map((pt, j) => (
                                        <li key={j} className="women-stage-point">
                                            <span className="point-check">✓</span>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW HIKITY HELPS ── */}
            <section
                id="how-hikity-helps"
                className={`women-section women-services-section ${visibleSections['how-hikity-helps'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="women-container">
                    <div className="women-section-header">
                        <span className="women-tag">WHAT WE DO</span>
                        <h2 className="women-section-title">
                            How Hikity Powers<br />Your Business
                        </h2>
                        <p className="women-section-subtitle">
                            A full-stack digital partner — from your very first website to a globally recognized brand with systems running 24/7.
                        </p>
                    </div>

                    <div className="women-services-list">
                        {hikitySupports.map((s, i) => (
                            <div key={i} className="women-service-row">
                                <div className="women-service-num">{s.number}</div>
                                <div className="women-service-content">
                                    <h3 className="women-service-title">{s.title}</h3>
                                    <p className="women-service-desc">{s.desc}</p>
                                </div>
                                <div className="women-service-arrow">→</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── GLOBAL REACH ── */}
            <section
                id="global-reach"
                className={`women-section women-global-section ${visibleSections['global-reach'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="women-global-bg">
                    <div className="women-global-glow" />
                </div>
                <div className="women-container">
                    <div className="women-global-content">
                        <div className="women-global-text">
                            <span className="women-tag">THINK GLOBAL</span>
                            <h2 className="women-section-title">
                                Your Business<br />Has No Borders
                            </h2>
                            <p className="women-section-subtitle">
                                The women building the future aren't limited to one city or one country. With Hikity, your handmade jewellery can ship to Tokyo, your coaching program can reach clients in Toronto, and your fashion boutique can have customers in Paris.
                            </p>
                            <div className="women-global-pillars">
                                <div className="women-global-pillar">
                                    <div className="pillar-icon">🌏</div>
                                    <div>
                                        <h4>International Websites</h4>
                                        <p>Multi-language, multi-currency websites built to serve global audiences.</p>
                                    </div>
                                </div>
                                <div className="women-global-pillar">
                                    <div className="pillar-icon">🛍️</div>
                                    <div>
                                        <h4>Global E-Commerce</h4>
                                        <p>Accept payments from anywhere in the world. Sell in USD, EUR, GBP, and more.</p>
                                    </div>
                                </div>
                                <div className="women-global-pillar">
                                    <div className="pillar-icon">📱</div>
                                    <div>
                                        <h4>Social Media Globally</h4>
                                        <p>Strategies that grow your brand across international audiences on every platform.</p>
                                    </div>
                                </div>
                                <div className="women-global-pillar">
                                    <div className="pillar-icon">🤝</div>
                                    <div>
                                        <h4>Global Brand Positioning</h4>
                                        <p>Your brand story crafted to resonate with customers everywhere, not just locally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="women-global-visual">
                            <div className="women-global-orbit">
                                <div className="orbit-ring orbit-1" />
                                <div className="orbit-ring orbit-2" />
                                <div className="orbit-ring orbit-3" />
                                <div className="orbit-center">
                                    <span>HIKITY</span>
                                    <span className="orbit-center-sub">Global</span>
                                </div>
                                <div className="orbit-node node-1"><span>🇮🇳</span></div>
                                <div className="orbit-node node-2"><span>🇺🇸</span></div>
                                <div className="orbit-node node-3"><span>🇬🇧</span></div>
                                <div className="orbit-node node-4"><span>🇦🇪</span></div>
                                <div className="orbit-node node-5"><span>🇸🇬</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section
                id="testimonials"
                className={`women-section women-testimonials ${visibleSections['testimonials'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="women-container">
                    <div className="women-section-header">
                        <span className="women-tag">REAL STORIES</span>
                        <h2 className="women-section-title">
                            Women Who Chose<br />to Build With Hikity
                        </h2>
                    </div>

                    <div className="women-testimonials-grid">
                        {testimonials.map((t, i) => (
                            <div key={i} className="women-testimonial-card">
                                <div className="testimonial-quote-mark">"</div>
                                <p className="testimonial-text">{t.quote}</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar" />
                                    <div>
                                        <span className="testimonial-name">{t.name}</span>
                                        <span className="testimonial-business">{t.business}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section
                id="cta"
                className={`women-section women-cta-section ${visibleSections['cta'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="women-cta-bg" />
                <div className="women-container">
                    <div className="women-cta-content">
                        <span className="women-tag">READY TO BEGIN?</span>
                        <h2 className="women-cta-title">
                            Your Business Deserves<br />to Be Seen by the World.
                        </h2>
                        <p className="women-cta-desc">
                            Join women entrepreneurs who are building fearlessly, growing rapidly, and reaching globally — with Hikity as their digital backbone. Let's build something extraordinary together.
                        </p>
                        <div className="women-cta-actions">
                            <a href="mailto:contact@hikity.xyz" className="women-btn-primary large">
                                <span>Write to Us</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <Link to="/" className="women-btn-outline large">Back to Home</Link>
                        </div>
                        <p className="women-cta-email">
                            Or reach us directly: <a href="mailto:contact@hikity.xyz">contact@hikity.xyz</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FOOTER (same as main page) ── */}
            <div className="women-footer-wrapper">
                <EnterpriseFooter onNavigate={() => { }} />
            </div>

        </div>
    );
};

export default WomenPage;
