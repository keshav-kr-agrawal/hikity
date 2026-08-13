import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import './CommercePage.css';

const CommercePage = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Hikity Commerce | Launch Your Online Store";

        const handleScroll = () => {
            if (window.scrollY > 60) setScrolled(true);
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

    const featuresList = [
        {
            category: "storefront",
            title: "Storefront & Customer Experience",
            icon: "🛍️",
            items: [
                "Premium storefront architecture",
                "Hero showcase & campaign banners",
                "Editable real-time announcement ticker",
                "Product category navigation",
                "Live instant search & autocomplete",
                "Price range filtering & sorting",
                "In-stock filtering toggle",
                "Product image galleries & multi-photo cards",
                "Fullscreen high-res image zoom",
                "Product badges (New, Trending, Sale)",
                "Urgency indicators (Low Stock alerts)",
                "Editor's Choice merchandising highlights",
                "Mobile-first responsive experience"
            ]
        },
        {
            category: "sharing",
            title: "Product Sharing Infrastructure",
            tagline: "Turn every product into something you can share.",
            icon: "📲",
            items: [
                "Individual direct product URLs",
                "One-click WhatsApp product sharing",
                "Native mobile system sharing",
                "One-click link copying",
                "Rich social preview cards",
                "OpenGraph meta product previews for socials"
            ]
        },
        {
            category: "management",
            title: "Product Catalog Management",
            tagline: "Add products directly from your phone, photograph inventory using your camera, arrange product images and keep your catalog synchronized.",
            icon: "📦",
            items: [
                "Multi-photo product upload workflow",
                "Direct camera capture from mobile device",
                "Cloudinary high-speed image CDN",
                "Cover image selection & reordering",
                "Instant image deletion & updates",
                "Custom product specifications & attributes",
                "Real-time Supabase database synchronization"
            ]
        },
        {
            category: "admin",
            title: "Business Admin Dashboard",
            tagline: "Your store. Your control.",
            icon: "⚡",
            items: [
                "Cost Price / MRP / Selling Price management",
                "Real-time inventory stock management",
                "Product priority scoring & placement",
                "Inline catalog editing",
                "Bulk discount applications",
                "Bulk category & merchandising updates",
                "One-click product deletion & archiving",
                "Promotional hero banner controls",
                "Coupon creation & discount rules"
            ]
        },
        {
            category: "analytics",
            title: "Business Profit Analytics",
            icon: "📊",
            items: [
                "Gross profit tracking per item & total",
                "Net profit tracking after operational overheads",
                "Cost price (CP) & margin monitoring",
                "Overhead expense tracking (Rent, Electricity)",
                "Packaging expense tracking",
                "Delivery tips & logistics cost logging",
                "Monthly financial performance summaries",
                "Historical data archival & secure purge"
            ]
        },
        {
            category: "accounts",
            title: "Customer Accounts & Portals",
            icon: "👤",
            items: [
                "Customer signup & fast login",
                "Mobile OTP / Email authentication",
                "Order history & track past purchases",
                "Saved delivery addresses & multi-address book",
                "Live order status update tracking",
                "Personalized customer account dashboard"
            ]
        },
        {
            category: "checkout",
            title: "Orders & Frictionless Checkout",
            tagline: "UPI payments included. Payment gateway integration available separately.",
            icon: "💳",
            items: [
                "Dynamic shopping cart with instant totals",
                "Quantity management & stock validation",
                "Gift packing option & customized notes",
                "Instant coupon code verification",
                "Automated delivery fee calculation",
                "UPI QR Code direct payment display",
                "UPI ID copy & payment link protocol",
                "Payment reference number submission",
                "Payment screenshot upload workflow",
                "Merchant manual verification dashboard",
                "Live order tracking timeline",
                "Printable PDF tax invoice generation"
            ]
        },
        {
            category: "delivery",
            title: "Delivery & Fulfillment",
            icon: "🚚",
            items: [
                "Parcel Delivery: Integration with Delhivery where applicable",
                "Local Store Pickup: Self-pickup scheduling & verification workflows",
                "Custom shipping rules based on location/weight",
                "Automated customer dispatch SMS/WhatsApp notices"
            ]
        },
        {
            category: "engagement",
            title: "Customer Engagement & Trust",
            tagline: "Keep the conversation close to the customer.",
            icon: "💬",
            items: [
                "Customer product reviews & rating stars",
                "Verified buyer badge authentication",
                "Direct WhatsApp support button",
                "Floating quick-connect action widget",
                "Social proof & customer testimonial highlights"
            ]
        },
        {
            category: "tech",
            title: "Managed Infrastructure",
            tagline: "Powered by Hikity",
            icon: "🛠️",
            items: [
                "Vercel enterprise cloud deployment",
                "Supabase real-time database & authentication",
                "Cloudinary global image CDN optimization",
                "Continuous security updates & zero-downtime maintenance",
                "Technical support & ongoing bug fixes",
                "Performance & page speed enhancements"
            ]
        }
    ];

    const womenVerticals = [
        { icon: "👗", title: "Boutiques & Fashion", desc: "Ethnic wear, western apparel, handloom sarees, designer suits, and custom fashion lines." },
        { icon: "💎", title: "Jewellery & Accessories", desc: "Handcrafted jewellery, silver, artisan beads, bridal collections, and accessories." },
        { icon: "🎁", title: "Gift Shops & Curations", desc: "Custom hampers, curated gifts, festive packaging, and personalized keepsakes." },
        { icon: "🎨", title: "Handmade & Crafts", desc: "Artisanal crafts, pottery, macramé, resin art, candles, and handmade decor." },
        { icon: "🍰", title: "Food & Home Bakeries", desc: "Home bakeries, specialty food products, regional spices, organic treats, and cloud kitchens." },
        { icon: "🌿", title: "Beauty & Organic Care", desc: "Natural skincare, herbal hair oils, handmade soaps, and wellness products." },
        { icon: "🏠", title: "Home Decor & Living", desc: "Interior accessories, handwoven rugs, ceramic planters, and home styling accents." },
        { icon: "✨", title: "Specialty Brands", desc: "Independent creations, niche products, and passion-driven commerce." }
    ];

    return (
        <div className="commerce-page">
            {/* NAVIGATION BAR */}
            <nav className={`commerce-nav ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/" className="commerce-nav-logo">
                    <div className="commerce-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY COMMERCE</span>
                </Link>
                <div className="commerce-nav-links">
                    <Link to="/" className="commerce-nav-link">Home</Link>
                    <Link to="/services" className="commerce-nav-link">Services</Link>
                    <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="commerce-nav-link">Pricing</a>
                    <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }} className="commerce-nav-link">Features</a>
                    <a href="#contact-form" onClick={(e) => { e.preventDefault(); scrollToSection('contact-form'); }} className="commerce-nav-cta">Build My Store</a>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="commerce-hero">
                <div className="commerce-hero-bg">
                    <div className="commerce-hero-glow" />
                    <div className="commerce-hero-grid" />
                </div>
                <div className="commerce-container">
                    <div className="commerce-hero-content">
                        <div className="commerce-badge-wrapper">
                            <span className="commerce-hero-badge">MANAGED COMMERCE PLATFORM</span>
                            <span className="commerce-price-pill">From ₹30,000/year</span>
                        </div>
                        <h1 className="commerce-hero-title">
                            Your business deserves its <span className="commerce-title-accent">own online store.</span>
                        </h1>
                        <p className="commerce-hero-subtitle">
                            Launch a professional e-commerce store without the heavy ₹1–3 lakh upfront investment or the headache of managing technology yourself.
                        </p>
                        <div className="commerce-hero-actions">
                            <button className="commerce-btn-primary" onClick={() => scrollToSection('contact-form')}>
                                Build My Store →
                            </button>
                            <button className="commerce-btn-secondary" onClick={() => scrollToSection('value-prop')}>
                                See What's Included
                            </button>
                        </div>

                        {/* STORE INTERACTIVE PREVIEW MOCKUP */}
                        <div className="commerce-hero-mockup-wrapper">
                            <div className="mockup-frame">
                                <div className="mockup-bar">
                                    <div className="mockup-dots">
                                        <span className="dot red"></span>
                                        <span className="dot yellow"></span>
                                        <span className="dot green"></span>
                                    </div>
                                    <div className="mockup-address">
                                        <span>https://yourbrand.hikity.com</span>
                                    </div>
                                </div>
                                <div className="mockup-screen">
                                    <div className="mockup-store-header">
                                        <div className="mockup-ticker">✨ FREE SHIPPING ACROSS INDIA ON ORDERS ABOVE ₹999 ✨</div>
                                        <div className="mockup-store-nav">
                                            <div className="mockup-store-brand">ANITA GIFT HOUSE</div>
                                            <div className="mockup-store-menu">
                                                <span>Catalog</span>
                                                <span>Bestsellers</span>
                                                <span>Categories</span>
                                                <span className="cart-badge-ui">Cart (2)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mockup-store-grid">
                                        <div className="mockup-item">
                                            <div className="mockup-img-placeholder p1">
                                                <span className="item-badge">In Stock</span>
                                            </div>
                                            <div className="mockup-details">
                                                <h4>Handcrafted Brass Diya Set</h4>
                                                <div className="price-row">
                                                    <span className="selling-price">₹1,299</span>
                                                    <span className="mrp">₹1,800</span>
                                                    <span className="discount">27% OFF</span>
                                                </div>
                                                <button className="mockup-add-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className="mockup-item">
                                            <div className="mockup-img-placeholder p2">
                                                <span className="item-badge trending">Bestseller</span>
                                            </div>
                                            <div className="mockup-details">
                                                <h4>Royal Silk Gift Hamper</h4>
                                                <div className="price-row">
                                                    <span className="selling-price">₹2,499</span>
                                                    <span className="mrp">₹3,200</span>
                                                    <span className="discount">22% OFF</span>
                                                </div>
                                                <button className="mockup-add-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className="mockup-item hide-mobile">
                                            <div className="mockup-img-placeholder p3">
                                                <span className="item-badge new">New Arrival</span>
                                            </div>
                                            <div className="mockup-details">
                                                <h4>Artisanal Scented Candles</h4>
                                                <div className="price-row">
                                                    <span className="selling-price">₹899</span>
                                                    <span className="mrp">₹1,200</span>
                                                    <span className="discount">25% OFF</span>
                                                </div>
                                                <button className="mockup-add-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE PROPOSITION COMPARISON */}
            <section id="value-prop" className="commerce-value-prop">
                <div className="commerce-container">
                    <div className="section-header-center">
                        <span className="section-eyebrow">THE BETTER WAY TO SELL ONLINE</span>
                        <h2 className="section-title-large">
                            Everything you need to sell online.<br />
                            <span className="accent-text">Nothing you need to manage.</span>
                        </h2>
                        <p className="section-subtitle-center">
                            Traditional e-commerce development requires huge upfront money, complex servers, maintenance contracts, and juggling multiple vendors. Hikity replaces the chaos with one managed solution.
                        </p>
                    </div>

                    <div className="comparison-grid">
                        <div className="comparison-card traditional">
                            <div className="card-tag negative">TRADITIONAL SETUP</div>
                            <h3 className="card-headline">Fragmented & Expensive</h3>
                            <ul className="comparison-list">
                                <li>❌ Heavy upfront development costs (₹1,000,000 – ₹3,000,000)</li>
                                <li>❌ Separate hosting & server management fees</li>
                                <li>❌ Database setup & maintenance hassles</li>
                                <li>❌ Image CDN & media storage configuration</li>
                                <li>❌ Ongoing technical maintenance & security patches</li>
                                <li>❌ Multiple monthly bills from different providers</li>
                                <li>❌ Constant technical breakdown worries</li>
                            </ul>
                        </div>

                        <div className="comparison-card hikity-solution">
                            <div className="card-tag positive">THE HIKITY WAY</div>
                            <h3 className="card-headline">One Managed Commerce Solution</h3>
                            <ul className="comparison-list">
                                <li>✓ Starts from just ₹30,000/year</li>
                                <li>✓ Complete storefront & mobile-first customer app</li>
                                <li>✓ Managed database & high-speed image CDN included</li>
                                <li>✓ Merchant admin control dashboard & profit analytics</li>
                                <li>✓ UPI payment workflows & order verification built-in</li>
                                <li>✓ Continuous maintenance, security & technical support</li>
                                <li>✓ 100% technology managed for you by Hikity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE GRID SECTION */}
            <section id="features" className="commerce-features-section">
                <div className="commerce-container">
                    <div className="section-header-center">
                        <span className="section-eyebrow">BUILT-IN CAPABILITIES</span>
                        <h2 className="section-title-large">
                            Engineered for high-conversion e-commerce
                        </h2>
                        <p className="section-subtitle-center">
                            Explore the complete suite of features included in the Hikity Commerce platform.
                        </p>
                    </div>

                    <div className="features-grid">
                        {featuresList.map((block, idx) => (
                            <div className="feature-block-card" key={idx}>
                                <div className="feature-card-header">
                                    <span className="feature-icon">{block.icon}</span>
                                    <h3 className="feature-block-title">{block.title}</h3>
                                </div>
                                {block.tagline && (
                                    <p className="feature-tagline">"{block.tagline}"</p>
                                )}
                                <ul className="feature-items-list">
                                    {block.items.map((item, itemIdx) => (
                                        <li key={itemIdx}>
                                            <span className="check-mark">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* "NO TECH HEADACHE" VISUAL SECTION */}
            <section className="no-tech-section">
                <div className="commerce-container">
                    <div className="no-tech-card">
                        <div className="no-tech-badge">ZERO OVERHEAD INFRASTRUCTURE</div>
                        <h2 className="no-tech-title">
                            You run the business.<br />
                            <span className="highlight">We handle the technology.</span>
                        </h2>
                        <p className="no-tech-desc">
                            You shouldn't have to learn servers, databases, CDNs, deployments or technical infrastructure just to sell your products online. With Hikity Commerce, the technical layer is fully architected and managed for you.
                        </p>
                        <div className="tech-stack-row">
                            <div className="tech-chip">⚡ Deployed on Vercel</div>
                            <div className="tech-chip">🗄️ Powered by Supabase DB</div>
                            <div className="tech-chip">🖼️ Cloudinary Image CDN</div>
                            <div className="tech-chip">🛡️ Managed Security & Patches</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WOMEN ENTREPRENEUR DEDICATED SECTION ON /COMMERCE */}
            <section className="women-commerce-section">
                <div className="commerce-container">
                    <div className="women-commerce-card">
                        <div className="women-tag-pill">SPECIAL INITIATIVE FOR EMERGING BRANDS</div>
                        <h2 className="women-commerce-title">
                            Built for businesses that are <span className="rose-accent">just getting started.</span>
                        </h2>
                        <p className="women-commerce-desc">
                            Many women across India are building thriving businesses from home, from boutique stores, and through Instagram, WhatsApp and local communities. The next step shouldn't require ₹1–3 lakh in upfront technology costs.
                        </p>
                        <div className="women-quote-box">
                            "Start smaller. Build professionally. Grow from there."
                        </div>

                        <h3 className="verticals-heading">Ideal for growing product categories:</h3>
                        <div className="verticals-grid">
                            {womenVerticals.map((v, i) => (
                                <div className="vertical-card" key={i}>
                                    <span className="vertical-icon">{v.icon}</span>
                                    <h4 className="vertical-title">{v.title}</h4>
                                    <p className="vertical-desc">{v.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="women-commerce-action">
                            <button className="commerce-btn-primary" onClick={() => scrollToSection('contact-form')}>
                                Start Your Store →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDY SECTION: ANITA GIFT HOUSE */}
            <section className="case-study-section">
                <div className="commerce-container">
                    <div className="section-header-center">
                        <span className="section-eyebrow">REAL IMPLEMENTATION SHOWCASE</span>
                        <h2 className="section-title-large">
                            See Hikity Commerce in Action
                        </h2>
                        <p className="section-subtitle-center">
                            Case Study: <strong>Anita Gift House</strong> — A real Hikity Commerce deployment.
                        </p>
                    </div>

                    <div className="case-study-card">
                        <div className="case-study-header">
                            <div className="case-meta">
                                <span className="case-badge">LIVE STORE</span>
                                <h3 className="case-brand-name">Anita Gift House</h3>
                                <p className="case-sub">Handmade Gifts, Festive Hampers & Ethnic Home Decor</p>
                            </div>
                        </div>

                        <div className="case-study-features-grid">
                            <div className="case-feat-item">
                                <h4>🛍️ Multi-Category Catalog</h4>
                                <p>Organized collections for hampers, brass decor, candles, and customized gifting items.</p>
                            </div>
                            <div className="case-feat-item">
                                <h4>📸 Rich Product Galleries</h4>
                                <p>Multi-photo product showcases with mobile camera uploads & Cloudinary image delivery.</p>
                            </div>
                            <div className="case-feat-item">
                                <h4>📲 Direct WhatsApp Sharing</h4>
                                <p>One-click product sharing enabling direct customer conversations and quick orders.</p>
                            </div>
                            <div className="case-feat-item">
                                <h4>💳 UPI QR Verification</h4>
                                <p>Direct UPI payment QR workflow with reference number and screenshot verification.</p>
                            </div>
                            <div className="case-feat-item">
                                <h4>🚚 Pickup & Parcel Options</h4>
                                <p>Support for local store pickup and direct parcel shipping options for customers.</p>
                            </div>
                            <div className="case-feat-item">
                                <h4>📊 Admin Profit Tracking</h4>
                                <p>Gross and net profit calculations logging CP, MRP, packaging, and store overhead expenses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section id="pricing" className="commerce-pricing-section">
                <div className="commerce-container">
                    <div className="section-header-center">
                        <span className="section-eyebrow">TRANSPARENT PRICING</span>
                        <h2 className="section-title-large">
                            Professional commerce without the ₹1–3 lakh upfront burden.
                        </h2>
                    </div>

                    <div className="pricing-box">
                        <div className="pricing-header">
                            <h3 className="pricing-tier-title">Hikity Managed Commerce</h3>
                            <div className="pricing-amount">
                                <span className="currency">₹</span>
                                <span className="val">30,000 – 80,000</span>
                                <span className="period">/ year</span>
                            </div>
                            <p className="pricing-factors">
                                Exact pricing depends on store complexity, catalog size, custom functionality, integrations, and business requirements.
                            </p>
                        </div>

                        <div className="pricing-breakdown-grid">
                            <div className="breakdown-col included">
                                <h4>✓ Included in Hikity Commerce</h4>
                                <ul>
                                    <li>E-commerce storefront design & development</li>
                                    <li>Merchant Admin Control Dashboard</li>
                                    <li>Product & catalog management suite</li>
                                    <li>Customer accounts & order management</li>
                                    <li>UPI payment QR & manual verification workflow</li>
                                    <li>Gross & Net Profit analytics dashboard</li>
                                    <li>Product sharing & WhatsApp integration</li>
                                    <li>Deployment on Vercel + Supabase database setup</li>
                                    <li>Continuous maintenance & technical support</li>
                                </ul>
                            </div>

                            <div className="breakdown-col separate">
                                <h4>ℹ️ Paid Separately (When Required)</h4>
                                <p className="separate-note">
                                    To maintain total transparency, third-party operational costs are paid directly to providers when applicable:
                                </p>
                                <ul>
                                    <li>Payment Gateway transaction charges (if optional gateway added)</li>
                                    <li>Third-party API charges (SMS, specialized services)</li>
                                    <li>Shipping & logistics partner fees (e.g. Delhivery charges)</li>
                                    <li>Custom domain name registration (if custom domain is purchased)</li>
                                </ul>
                            </div>
                        </div>

                        {/* OPTIONAL FLEXIBLE PAYMENT OPTIONS */}
                        <div className="payment-options-banner">
                            <h4 className="banner-title">Choose How You Pay</h4>
                            <div className="options-grid">
                                <div className="option-pill">
                                    <strong>Annual Plan</strong>
                                    <span>Pay once for the full year & enjoy complete managed peace of mind.</span>
                                </div>
                                <div className="option-pill">
                                    <strong>Monthly Plan</strong>
                                    <span>Structured monthly payment options available upon evaluation.</span>
                                </div>
                                <div className="option-pill highlight">
                                    <strong>Growth Plan</strong>
                                    <span>Flexible growth-based plans available for selected businesses.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY HIKITY SECTION */}
            <section className="why-hikity-section">
                <div className="commerce-container">
                    <div className="section-header-center">
                        <span className="section-eyebrow">THE DIFFERENCE</span>
                        <h2 className="section-title-large">Why Hikity Commerce?</h2>
                    </div>

                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-number">01</div>
                            <h3>Not just a website</h3>
                            <p>A complete, integrated e-commerce operational system including customer storefront, admin controls, profit tracking, and order fulfillment.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">02</div>
                            <h3>Not a generic SaaS template</h3>
                            <p>Hikity builds, customizes, and manages the solution tailored around your business brand, products, and specific workflows.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">03</div>
                            <h3>No infrastructure headache</h3>
                            <p>Servers, databases, image CDNs, deployments, and security updates are 100% handled by our engineering team.</p>
                        </div>
                        <div className="why-card">
                            <div className="why-number">04</div>
                            <h3>Designed to grow with you</h3>
                            <p>Start with commerce today and seamlessly add AI customer support, smart automation, and business intelligence as your revenues expand.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HIKITY ECOSYSTEM PROGRESSION */}
            <section className="ecosystem-section">
                <div className="commerce-container">
                    <div className="section-header-center">
                        <span className="section-eyebrow">HIKITY ECOSYSTEM</span>
                        <h2 className="section-title-large">Start with Commerce. Grow into more.</h2>
                        <p className="section-subtitle-center">
                            Commerce is just your digital foundation. As your business grows, scale effortlessly across the Hikity technology stack.
                        </p>
                    </div>

                    <div className="ecosystem-flow">
                        <div className="eco-step active">
                            <span className="step-num">STAGE 1</span>
                            <h4>Commerce</h4>
                            <p>Digital Storefront & Orders</p>
                        </div>
                        <div className="eco-arrow">→</div>
                        <div className="eco-step">
                            <span className="step-num">STAGE 2</span>
                            <h4>Automation</h4>
                            <p>Automated Workflows & SMS</p>
                        </div>
                        <div className="eco-arrow">→</div>
                        <div className="eco-step">
                            <span className="step-num">STAGE 3</span>
                            <h4>AI</h4>
                            <p>Smart Sales Assistance</p>
                        </div>
                        <div className="eco-arrow">→</div>
                        <div className="eco-step">
                            <span className="step-num">STAGE 4</span>
                            <h4>AI Agents</h4>
                            <p>Autonomous Operations</p>
                        </div>
                        <div className="eco-arrow">→</div>
                        <div className="eco-step">
                            <span className="step-num">STAGE 5</span>
                            <h4>Business Intelligence</h4>
                            <p>Enterprise Analytics</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA & CONTACT FORM */}
            <section id="contact-form" className="commerce-final-cta">
                <div className="commerce-container">
                    <div className="final-cta-card">
                        <div className="final-cta-header">
                            <h2 className="final-cta-title">Ready to take your business online?</h2>
                            <p className="final-cta-subtitle">
                                Tell us what you sell. We'll figure out the technology.
                            </p>
                        </div>

                        <form action="https://formsubmit.co/hikityofficial@gmail.com" method="POST" className="commerce-form">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="c-name">YOUR NAME / IDENTIFIER</label>
                                    <input type="text" id="c-name" name="name" required placeholder="e.g. Priya Sharma" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="c-email">EMAIL ADDRESS</label>
                                    <input type="email" id="c-email" name="email" required placeholder="you@company.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="c-phone">PHONE / WHATSAPP NUMBER</label>
                                    <input type="tel" id="c-phone" name="phone" required placeholder="+91 98765 43210" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="c-business">BUSINESS NAME & WHAT YOU SELL</label>
                                    <input type="text" id="c-business" name="business_type" required placeholder="e.g. Anita Gift House (Handmade Decor & Hampers)" />
                                </div>

                                <div className="form-group full">
                                    <label htmlFor="c-msg">TELL US ABOUT YOUR STORE VISION</label>
                                    <textarea id="c-msg" name="message" rows="4" placeholder="Mention your product catalog size, current sales channels (Instagram, WhatsApp, shop), or specific questions..."></textarea>
                                </div>
                            </div>

                            <input type="hidden" name="service_type" value="Hikity Managed Commerce Platform" />

                            <div className="form-actions-row">
                                <button type="submit" className="commerce-btn-primary">
                                    Start Your Store →
                                </button>
                                <a href="mailto:hikityofficial@gmail.com" className="commerce-btn-secondary">
                                    Talk to Hikity
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* ENTERPRISE FOOTER */}
            <div className="commerce-footer-wrapper">
                <EnterpriseFooter onNavigate={() => {}} />
            </div>
        </div>
    );
};

export default CommercePage;
