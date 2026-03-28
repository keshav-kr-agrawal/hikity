import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from './EnterpriseFooter';
import './BlogPage.css';

const BlogPage = () => {
    // Scroll reveal logic
    const [visibleSections, setVisibleSections] = useState({});
    const sectionRefs = useRef([]);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.15 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        const handleScroll = () => {
            const nav = document.querySelector('.blog-nav');
            if (nav) {
                if (window.scrollY > 50) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const blogPosts = [
        // Placeholder for future blog posts
    ];

    return (
        <div className="blog-page">
            {/* Navigation */}
            <nav className="blog-nav">
                <Link to="/" className="blog-nav-logo">
                    <div className="blog-nav-logo-circle">
                        <img src="/assets/hikity.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY</span>
                </Link>
                <div className="blog-nav-links">
                    <Link to="/" className="blog-nav-link">Home</Link>
                    <Link to="/links" className="blog-nav-link">Network</Link>
                    <a href="/#contact" className="blog-nav-cta">Work With Us</a>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="blog-hero">
                <div className="blog-hero-bg">
                    <div className="blog-hero-gradient" />
                    <div className="blog-hero-dots" />
                </div>
                <div className="blog-container">
                    <div className="blog-hero-content">
                        <div className="blog-hero-badge">
                            <span className="blog-hero-badge-dot" />
                            ENGINEERING & DESIGN
                        </div>
                        <h1 className="blog-hero-title">
                            The Hikity <span className="blog-hero-title-accent">Blog</span>
                        </h1>
                        <p className="blog-hero-subtitle">
                            Insights directly from our engineering and design teams. Deep dives into enterprise architecture, AI automation, and high-conversion web development.
                        </p>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <section
                id="blog-content"
                className={`blog-section main-content ${visibleSections['blog-content'] ? 'visible' : ''}`}
                ref={addToRefs}
            >
                <div className="blog-container">
                    <div className="blog-empty-state">
                        <div className="empty-icon">✍️</div>
                        <h2 className="empty-title">Articles Coming Soon</h2>
                        <p className="empty-desc">
                            We are currently compiling our best technical insights and case studies. Check back later for in-depth articles.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="blog-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default BlogPage;
