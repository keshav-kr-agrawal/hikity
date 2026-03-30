import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import EnterpriseFooter from '../EnterpriseFooter';
import { blogPosts } from './blogData';
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
                    <Link to="/services" className="blog-nav-link">Services</Link>
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
                    <div className="bento-grid">
                        {blogPosts.map((post) => (
                            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                                <div className="blog-card-image">
                                    <img src={post.image} alt={post.title} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.display = 'none'; }} />
                                </div>
                                <div className="blog-card-content">
                                    <div className="blog-card-meta">
                                        <span className="blog-card-category">{post.category}</span>
                                        <span className="blog-card-date">{post.date}</span>
                                    </div>
                                    <h2 className="blog-card-title">{post.title}</h2>
                                    <div className="blog-card-footer">
                                        <span className="blog-card-author">{post.author} &bull; {post.readingTime}</span>
                                        <span className="blog-card-arrow">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
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
