import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from './blogData';
import EnterpriseFooter from '../EnterpriseFooter';
import './BlogPostPage.css';

const BlogPostPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!post) {
            navigate('/blog', { replace: true });
        }
    }, [slug, post, navigate]);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = (window.scrollY / totalHeight) * 100;
                setScrollProgress(progress);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) return null;

    return (
        <div className="blog-post-page">
            <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
            
            <nav className="blog-nav scrolled">
                <Link to="/" className="blog-nav-logo">
                    <div className="blog-nav-logo-circle">
                        <img src="/hikity_logo.jpeg" alt="Hikity Logo" />
                    </div>
                    <span>HIKITY</span>
                </Link>
                <div className="blog-nav-links">
                    <Link to="/" className="blog-nav-link">Home</Link>
                    <Link to="/services" className="blog-nav-link">Services</Link>
                    <Link to="/commerce" className="blog-nav-link">Commerce</Link>
                    <Link to="/case-studies" className="blog-nav-link">Case Studies</Link>
                    <Link to="/blog" className="blog-nav-link">Blog</Link>
                </div>
                <button className="blog-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`blog-mobile-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
            <div className={`blog-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="blog-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/services" className="blog-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
                <Link to="/commerce" className="blog-nav-link" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                <Link to="/case-studies" className="blog-nav-link" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
                <Link to="/blog" className="blog-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            </div>

            <Link to="/blog" className="blog-back-button">← Back to Hub</Link>

            <article className="blog-post-container">
                <div className="blog-post-header">
                    <div className="blog-post-meta">
                        <span className="blog-post-capsule">{post.category} &bull; {post.date}</span>
                    </div>
                    <h1 className="blog-post-title">{post.title}</h1>
                </div>

                <div className="blog-post-image-wrapper">
                    <img src={post.image} alt={post.title} className="blog-post-image" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.marginBottom = '20px'; }} />
                </div>

                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            <div className="blog-footer-wrapper">
                <EnterpriseFooter />
            </div>
        </div>
    );
};

export default BlogPostPage;
