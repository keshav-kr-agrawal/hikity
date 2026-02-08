import React, { useEffect, useRef, Fragment } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import EnterpriseFooter from './EnterpriseFooter'
import './App.css'

// Register core high-performance architectural plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * HIKITY ARCHITECTURAL INTERFACE v34.0 - THE MONOLITH
 * * PIPELINE: 
 * 1. Hero Stack (Person -> Mountain Flip)
 * 2. Editorial Grid (White Transition)
 * 3. Peak expansion (Mountain Phase)
 * 4. Cloud Wipe (Smooth Transition - Content Vanishes)
 * 5. Road Image + Contact Form (Final Stage)
 */
function App() {
  const mainRef = useRef(null);
  const heroImgRef = useRef(null);
  const roadImgRef = useRef(null);
  const textBoxRef = useRef(null);
  const whiteLayerRef = useRef(null);
  const parkingZoneRef = useRef(null);
  const logoRef = useRef(null);
  const cloudRef = useRef(null);
  const portalRef = useRef(null);
  const footerRef = useRef(null);

  // Targeted scroll function for CTA sync
  const scrollToContact = () => {
    gsap.to(window, {
      duration: 2.5,
      // Target the contact form phase (approx 90% progress of 1100vh)
      scrollTo: innerHeight * 9.5,
      ease: "power1.inOut"
    });
  };

  // Scroll to top function for logo
  const scrollToTop = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: 0,
      ease: "power1.inOut"
    });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      // MASTER TIMELINE: 1300vh depth - ending at footer
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "1300% top",
          pin: true,
          scrub: 0.3,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Adaptive Branding: Toggles black text for the White Editorial stage
            if (self.progress > 0.04 && self.progress < 0.28) {
              logoRef.current.classList.add('black-text');
            } else {
              logoRef.current.classList.remove('black-text');
            }
          }
        }
      });

        // --- STAGE 1: HERO EXIT PROTOCOL ---
      tl.to([textBoxRef.current, ".hero-tagline", ".hero-subheadline"], { 
          opacity: 0, 
          y: -100, 
          duration: 2,
          ease: "power1.out"
        })
        .to(heroImgRef.current, {
          scale: isMobile ? 0.45 : 0.38,
          borderRadius: "40px",
          duration: 3,
          ease: "power2.inOut"
        })
        .to(heroImgRef.current, {
          rotateY: 180, // Flip transition from Mountain to Scene
          x: () => {
            if (!parkingZoneRef.current || !heroImgRef.current) return 0;
            const zone = parkingZoneRef.current.getBoundingClientRect();
            const img = heroImgRef.current.getBoundingClientRect();
            return (zone.left + zone.width / 2) - (img.left + img.width / 2);
          },
          y: () => {
            if (!parkingZoneRef.current || !heroImgRef.current) return 0;
            const zone = parkingZoneRef.current.getBoundingClientRect();
            const img = heroImgRef.current.getBoundingClientRect();
            return (zone.top + zone.height / 2) - (img.top + img.height / 2);
          },
          duration: 3.5,
          ease: "expo.out"
        }, "-=2")
        .to(".flip-card-front", {
          opacity: 0,
          visibility: "hidden",
          duration: 0.5,
          ease: "power1.in"
        }, "-=3")
        .to(".flip-card-back", {
          opacity: 1,
          visibility: "visible",
          duration: 0.5,
          ease: "power1.out"
        }, "-=3")

        // --- STAGE 2: EDITORIAL REVEAL (WHITE PAGE WITH SCENE IN PLACE) ---
        .to(whiteLayerRef.current, { 
          opacity: 1, 
          duration: 2.5,
          ease: "power1.inOut"
        }, "-=4")
        .to(".mountain-preview", {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power2.out"
        }, "-=2")
        .call(() => {
          if (parkingZoneRef.current) {
            parkingZoneRef.current.classList.add('mountain-visible');
          }
        }, null, "-=2")
        .from(".reveal-item", { 
          opacity: 0, 
          y: 40, 
          stagger: 0.25, 
          duration: 3,
          ease: "power2.out"
        }, "-=2.5")

        // --- STAGE 3: PEAK EXPANSION (SCENE ENLARGES FROM PARKING ZONE) ---
        // Hide preview as the actual image expands
        .to(".mountain-preview", {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          ease: "power1.in"
        }, "+=0.5")
        // Expand the flipped scene image from parking zone to full screen
        .to(heroImgRef.current, {
          width: "100vw", 
          height: "100vh",
          x: 0, 
          y: 0, 
          scale: 1, 
          borderRadius: "0px",
          rotateY: 180, // Keep flipped to show scene
          duration: 5.5, 
          ease: "power2.inOut"
        }, "-=0.5")
        // White layer fades out as mountain expands
        .to(whiteLayerRef.current, { 
          opacity: 0, 
          pointerEvents: "none", 
          duration: 2,
          ease: "power1.inOut"
        }, "-=4")
        // Portal appears after white layer starts fading
        .to(portalRef.current, { 
          autoAlpha: 1, 
          visibility: "visible", 
          pointerEvents: "auto", 
          duration: 1.5,
          ease: "power1.out"
        }, "-=3.5")
        
        // Title appears first from right to left
        .to(".upper-portal .portal-title", { 
          opacity: 1, 
          x: 0, 
          duration: 1.2, 
          ease: "power2.out" 
        }, "+=0.5")
        
        // Review cards appear one by one from right to left with smooth stagger
        .to(".review-card", { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          stagger: 0.4, 
          ease: "power2.out" 
        }, "+=0.6")
        
        // Logo marquee wrapper appears after first review card (with "OUR CLIENTS" title)
        .to(".logo-marquee-wrapper", { 
          opacity: 1, 
          x: 0,
          duration: 1.2,
          ease: "power2.out"
        }, "+=1.2")
        
        // "OUR CLIENTS" title appears first
        .to(".marquee-title", {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=1")
        
        // Then marquees appear (both forward and reverse) - make sure they're visible
        .to(".logo-marquee", {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power2.out"
        }, "-=0.7")
        
        // Ensure marquee tracks and spans are visible
        .set(".marquee-track", {
          opacity: 1,
          visibility: "visible"
        }, "-=0.8")
        
        .set(".marquee-track span", {
          opacity: 1,
          visibility: "visible"
        }, "-=0.8")

        // --- STAGE 4: SMOOTH CLOUD TRANSIT (SEAMLESS TRANSITION) ---
        // First, hide mountain content smoothly before clouds appear
        .to(heroImgRef.current, { 
          opacity: 0, 
          visibility: "hidden", 
          duration: 1.5,
          ease: "power1.in"
        }, "+=0.5")
        .to(".upper-portal", { 
          opacity: 0, 
          y: -30, 
          duration: 1.5, 
          pointerEvents: "none",
          ease: "power1.in"
        }, "-=1.5")
        
        // Then clouds come smoothly and transition peacefully
        .to(cloudRef.current, {
          opacity: 1,
          visibility: "visible",
          y: "-350vh",
          scale: 12,
          duration: 4,
          ease: "power1.inOut"
        }, "+=0.3")
        
        // Road image appears simultaneously with clouds for seamless transition
        .to(roadImgRef.current, { 
          opacity: 1, 
          scale: 1, 
          duration: 4, 
          ease: "power1.inOut" 
        }, "-=4")

        // --- STAGE 5: CLOUDS FADE OUT & CONTACT PAGE APPEARS ---
        // Clouds fade out smoothly after transition
        .to(cloudRef.current, {
          opacity: 0,
          visibility: "hidden",
          duration: 2,
          ease: "power1.in"
        }, "-=1.5")
        
        // Road image subtle zoom for depth (starts earlier)
        .to(roadImgRef.current.querySelector('img'), {
          scale: 1.1,
          duration: 7,
          ease: "power1.out"
        }, "-=3")
        
        // Slide portal to show contact form (smooth)
        .to(portalRef.current, {
          y: "-100vh",
          duration: 2.5,
          ease: "power1.inOut"
        }, "-=2.5")

        // Contact header fades in with gentle slide
        .from(".contact-header", {
          opacity: 0,
          y: 30,
          duration: 2.5,
          ease: "power2.out"
        }, "-=2")

        // Glass form container appears with gentle scale and fade
        .from(".glass-form", {
          opacity: 0,
          scale: 0.95,
          y: 30,
          duration: 2.5,
          ease: "power2.out"
        }, "-=2")

        // Form intro appears smoothly
        .from(".form-intro", {
          opacity: 0,
          y: 15,
          duration: 2,
          ease: "power2.out"
        }, "-=1.5")

        // Form fields reveal with gentle staggered slide animation
        .from(".form-group", {
          opacity: 0,
          x: -30,
          stagger: 0.15,
          duration: 2,
          ease: "power2.out"
        }, "-=1.2")
        
        // Contact info appears smoothly
        .from(".contact-info", {
          opacity: 0,
          y: 15,
          duration: 2,
          ease: "power2.out"
        }, "-=1.5")
        
        // Submit button appears with gentle bounce
        .from(".submit-trigger", {
          opacity: 0,
          scale: 0.9,
          y: 20,
          duration: 2,
          ease: "back.out(1.2)"
        }, "-=1");

      // Separate ScrollTrigger for footer (triggers after pinned section ends)
      if (footerRef.current && mainRef.current) {
        ScrollTrigger.create({
          trigger: mainRef.current,
          start: "bottom bottom",
          onEnter: () => {
            gsap.to(footerRef.current, {
              opacity: 1,
              visibility: "visible",
              duration: 2,
              ease: "power1.out"
            });
            gsap.from(".enterprise-footer-new", {
              opacity: 0,
              y: 60,
              duration: 2.5,
              ease: "power2.out"
            });
          },
          onLeaveBack: () => {
            gsap.to(footerRef.current, {
              opacity: 0,
              visibility: "hidden",
              duration: 0.8,
              ease: "power1.in"
            });
          }
        });
      }

    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <Fragment>
    <div ref={mainRef} className="main-container">
      {/* 1. BRAND NAVIGATION LAYER */}
      <nav className="navbar">
        <div ref={logoRef} className="logo-section" onClick={scrollToTop}>
          <div className="nav-brand-container">
            <img src="/hikity.jpeg" alt="HIKITY" className="nav-logo-img" />
          </div>
          <span className="logo-text">HIKITY</span>
        </div>
        <div className="nav-contact-wrapper">
          <button className="nav-contact" onClick={scrollToContact}>CONTACT</button>
        </div>
      </nav>

      {/* 2. TRANSITIONAL OVERLAYS */}
      <img ref={cloudRef} src="/cloud.png" className="parallax-cloud" alt="Cloud Overlay" />

      {/* 3. PINNED BACKGROUNDS (ROAD LAYER - STAYS VISIBLE) */}
      <div ref={roadImgRef} className="road-background-layer" style={{ opacity: 0 }}>
        <img src="/road.jpg" className="full-img" alt="Road Interface" />
        <div className="road-dark-overlay"></div>
      </div>

      {/* 4. CONTENT HUB (REVIEWS + CONTACT FORM PORTAL) */}
      <div ref={portalRef} className="portal-overlay" style={{ visibility: 'hidden', opacity: 0 }}>
        {/* PHASE A: MOUNTAIN (Customer Reviews + Partner Logos) */}
        <section className="portal-section upper-portal">
          <div className="portal-kinetic-item">
            <h2 className="portal-title">Strategic Feedback</h2>
            <div className="review-container">
              <div className="review-card review-card-1">
                <p>"HIKITY redefined our digital presence with architectural precision."</p>
                <span>— SPARSH MUKTHI</span>
              </div>
              <div className="review-card review-card-2">
                <p>"The kinetic hand-off between phases is a masterclass in UI design."</p>
                <span>— NAVI MEET</span>
              </div>
              <div className="review-card review-card-3">
                <p>"Engineering digital continuity across global ecosystems."</p>
                <span>— HIKAT GLOBAL</span>
              </div>
            </div>
          </div>

          <div className="portal-kinetic-item logo-marquee-wrapper">
            <h3 className="marquee-title">OUR CLIENTS</h3>
            
            {/* First scroller - forward direction */}
            <div className="logo-marquee">
              <div className="marquee-track marquee-forward">
                {['SPARSH MUKTHI', 'NAVI MEET', 'HIKAT GROUP', 'SUKRIT', 'TIZ-GUN'].map((p, i) => (
                  <span key={i}> {p}</span>
                ))}
                {['SPARSH MUKTHI', 'NAVI MEET', 'HIKAT GROUP', 'SUKRIT', 'TIZ-GUN'].map((p, i) => (
                  <span key={i + 100}> {p}</span>
                ))}
              </div>
            </div>
            
            {/* Second scroller - reverse direction */}
            <div className="logo-marquee logo-marquee-reverse">
              <div className="marquee-track marquee-reverse">
                {['SPARSH MUKTHI', 'NAVI MEET', 'HIKAT GROUP', 'SUKRIT', 'TIZ-GUN'].map((p, i) => (
                  <span key={i}> {p}</span>
                ))}
                {['SPARSH MUKTHI', 'NAVI MEET', 'HIKAT GROUP', 'SUKRIT', 'TIZ-GUN'].map((p, i) => (
                  <span key={i + 100}> {p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PHASE B: ROAD TERMINAL (Contact Form) */}
        <section className="portal-section lower-portal">
          <div className="contact-protocol-wrapper">
            <div className="contact-header">
              <h2 className="portal-title">Initiate Protocol</h2>
              <h1 className="hero-text terminal-header" style={{ fontSize: '3.8vw', textAlign: 'left', marginTop: '20px', lineHeight: '1' }}>
                LET'S ARCHITECT<br />YOUR VISION.
              </h1>
              <p className="contact-description">
                Ready to transform your digital presence? We're here to bring your vision to life. 
                Whether you're looking to build something new or elevate what exists, let's start 
                the conversation.
              </p>
              <div className="contact-info">
                <div className="contact-info-item">
                  <span className="info-label">EMAIL</span>
                  <a href="mailto:contact@hikity.xyz" className="info-value">contact@hikity.xyz</a>
                </div>
                <div className="contact-info-item">
                  <span className="info-label">RESPONSE TIME</span>
                  <span className="info-value">Within 24 Hours</span>
                </div>
              </div>
            </div>

            
          </div>
        </section>
      </div>

      {/* 5. EDITORIAL LAYER (WHITE) */}
      <div ref={whiteLayerRef} className="layer white-layer">
        <div className="editorial-layout">
          <div className="content-side">
            <h2 className="reveal-item section-title">ENGINEERING THE NEXT DIMENSION.</h2>
            <div className="reveal-item service-stack">
              <div className="service-row">
                <span className="service-number">01</span>
                <div className="service-content">
                  <p className="service-title">AI AGENTS</p>
                  <p className="service-desc">Custom-trained autonomous intelligence to scale your operations.</p>
                </div>
              </div>
              <div className="service-row">
                <span className="service-number">02</span>
                <div className="service-content">
                  <p className="service-title">SMART AUTOMATION</p>
                  <p className="service-desc">Engineering seamless, zero-overhead digital workflows.</p>
                </div>
              </div>
              <div className="service-row">
                <span className="service-number">03</span>
                <div className="service-content">
                  <p className="service-title">3D INTERACTIVE</p>
                  <p className="service-desc">Immersive WebGL environments that redefine user engagement.</p>
                </div>
              </div>
              <div className="service-row">
                <span className="service-number">04</span>
                <div className="service-content">
                  <p className="service-title">BRAND SYSTEMS</p>
                  <p className="service-desc">High-fidelity visual identities for the tech-forward era.</p>
                </div>
              </div>
            </div>
          </div>
          <div ref={parkingZoneRef} className="parking-zone">
            <img src="/scene.jpg" alt="Scene" className="mountain-preview" />
          </div>
        </div>
      </div>

      {/* 6. HERO STACK (PERSON/MOUNTAIN) */}
      <div className="layer hero-layer">
        <div ref={textBoxRef} className="text-box">
          <h1 className="hero-text">WE BUILD WHAT YOU IMAGINE.</h1>
          <p className="hero-subheadline">Where High-Fidelity 3D Interactivity Meets Autonomous AI Intelligence.</p>
          <p className="hero-tagline">Future-Proofing Digital Architecture.</p>
        </div>

        <div className="perspective-wrapper">
          <div ref={heroImgRef} className="flip-card">
            <div className="flip-card-front">
              <img src="/mountain.png" className="full-img" alt="the " />
            </div>
            <div className="flip-card-back">
              <img src="/scene.jpg" className="full-img" alt="Scene" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FOOTER - APPEARS BELOW ROAD IMAGE (OUTSIDE PINNED CONTAINER) */}
    <div ref={footerRef} className="footer-section-wrapper" style={{ opacity: 0, visibility: 'hidden' }}>
      <EnterpriseFooter onNavigate={(p) => console.log(`Nav: ${p}`)} />
    </div>
    </Fragment>
  )
}

export default App;