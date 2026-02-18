import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EnterpriseFooter.css';

/**
 * HIKITY EXECUTIVE FOOTER v17.0 | KINETIC FOUNDATION
 * Logic: Sequential staggering & Integrated HIKAT Linkage.
 */
const EnterpriseFooter = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const containerVars = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 30, filter: "blur(10px)" },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
    }
  };

  return (
    <footer className="enterprise-footer-new">

      {/* 1. ARCHITECTURAL WATERMARK */}
      <div className="footer-watermark-new">
        <h2 className="watermark-text-new">
          HIKITY
        </h2>
      </div>

      {/* 2. ATMOSPHERIC GLOW */}
      <div className="footer-glow-new" />

      <motion.div
        variants={containerVars}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="footer-content-wrapper-new"
      >
        <div className="footer-grid-new">

          {/* BRAND PILLAR: Including HIKAT Linkage */}
          <motion.div variants={itemVars} className="footer-brand-section-new">
            <div className="footer-brand-header-new" onClick={() => onNavigate('main')}>
              <div className="footer-logo-container-new">
                <img src="/hikity.jpeg" alt="HIKITY Falcon Logo" className="footer-logo-img-new" />
              </div>
              <div className="footer-brand-text-new">
                <h2 className="footer-brand-title-new">HIKITY</h2>
                <span className="footer-brand-subtitle-new">Ref: Architectural Division</span>
              </div>
            </div>

            <div className="footer-brand-content-new">
              <p className="footer-description-new">
                A specialized venture under
                <a
                  href="https://hikat.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-hikat-link"
                >
                  HIKAT
                </a>.
                Maintaining architectural integrity across every digital landscape.
              </p>

              {/* HIKAT EXTERNAL PROTOCOL LINK */}
              <motion.a
                href="https://hikat.xyz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="footer-protocol-link-new"
              >
                <span>Access Parent Protocol</span>
                <div className="footer-protocol-line-new" />
              </motion.a>
            </div>
          </motion.div>

          {/* CAPABILITIES PILLAR */}
          <motion.div variants={itemVars} className="footer-capabilities-section-new">
            <h4 className="footer-section-title-new">Capabilities</h4>
            <ul className="footer-capabilities-list-new">
              {['Agentic Systems', 'Immersive Engineering', 'Digital Continuity', 'Automations', 'Digital Presence'].map((cap) => (
                <li key={cap} className="footer-capability-item-new">
                  {cap}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RESOLUTION PILLAR */}
          <motion.div variants={itemVars} className="footer-resolution-section-new">
            <h4 className="footer-section-title-new">Resolution</h4>
            <div className="footer-resolution-content-new">
              <motion.a
                whileHover={{ x: -10 }}
                href="mailto:contact@hikity.xyz"
                className="footer-email-new"
              >
                contact@hikity.xyz
              </motion.a>
              <div className="footer-email-meta-new">
                <div className="footer-meta-line-new" />
                <p className="footer-meta-text-new">Global Ops // 2026</p>
              </div>

              <motion.a
                href="https://www.linkedin.com/in/hikity/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -10 }}
                className="footer-linkedin-link-new"
              >
                <span>Connect via LinkedIn</span>
                <div className="footer-protocol-line-new" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/hikityofficial/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -10 }}
                className="footer-instagram-link"
              >
                <span>Connect via Instagram</span>
                <div className="footer-protocol-line-new" />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=61587760536147"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -10 }}
                className="footer-facebook-link"
              >
                <span>Connect via Facebook</span>
                <div className="footer-protocol-line-new" />
              </motion.a>

            </div>
          </motion.div>
        </div>

        {/* 3. LEGAL FOUNDATION */}
        <motion.div
          variants={itemVars}
          className="footer-bottom-new"
        >
          <div className="footer-bottom-left-new">
            <p className="footer-copyright-new">
              © {currentYear} HIKITY ARCHITECTURAL
            </p>
            {/* <span className="footer-build-ref-new">Ref: 2029_v12</span> */}
          </div>

          <div className="footer-legal-new">
            <Link to="/t&c" className="footer-legal-link-new">
              TERMS & CONDITIONS
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default EnterpriseFooter;
