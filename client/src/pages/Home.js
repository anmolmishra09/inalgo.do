import React from 'react';
import './Home.css';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import Portfolio from '../components/Portfolio';
import TargetClients from '../components/TargetClients';
import HubVisualization from '../components/HubVisualization';
import ImageGallery from '../components/ImageGallery';
import Newsletter from '../components/Newsletter';
import GlassBorderButton from '../components/GlassBorderButton';
import AppPromotion from '../components/AppPromotion';
import TeamIntro from '../components/TeamIntro';
import MarqueeTestimonials from '../components/MarqueeTestimonials';
import LogoMarquee from '../components/LogoMarquee';

function Home() {
  return (
    <div className="home">
     {/* Hero Section */}
<section className="hero">
  
  {/* Background Video */}
  <video
    className="hero-video"
    autoPlay
    loop
    muted
    playsInline
    poster="//images.ctfassets.net/un655fb9wln6/1lNzwYsBP3p2rpTZe6ijqn/bb4bcbf22b29d6a812968fa02e640ac8/poster.png"
  >
    <source
      src="//videos.ctfassets.net/un655fb9wln6/7eNjBmqlO8eOOCdZn0MepT/fbb0a51e2da909d3c8e38771fd6fae6b/Homepage-hero-video.mp4"
      type='video/mp4; codecs="hvc1"'
    />
    <source
      src="//videos.ctfassets.net/un655fb9wln6/3wNElEdBiFdK2eauJB7wMp/4112a64b3b6e6a4d1b3c997e9bad2984/Homepage-hero-video.webm"
      type="video/webm"
    />
  </video>

  {/* Dark Overlay */}
  <div className="hero-overlay"></div>

  <div className="container">
    <div className="hero-content">
      <h1 className="hero-title">
        Think It. Type It.{" "}
        <span className="hero-highlight-orange">
          Launch It.
        </span>
      </h1>

      <p className="hero-subtitle">
        Software Solution - Simplify challenges, maximize results,
        and <span className="hero-highlight-underline">
        stay ahead
        </span> in the competitive market.
      </p>

      <div className="hero-buttons">
        <GlassBorderButton variant="purple">
          <a
            href="https://transcript-ai-8.preview.emergentagent.com/"
            style={{ textDecoration:"none", color:"inherit" }}
          >
            Get Started
          </a>
        </GlassBorderButton>

        <a href="ama" className="btn-secondary">
          <span>Learn More</span>

          <svg
            className="btn-arrow"
            width="6"
            height="8"
            viewBox="0 0 6 8"
            fill="none"
          >
            <path
              d="M1.25.5 4.75 4l-3.5 3.5"
              stroke="currentColor"
              strokeOpacity=".4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Hub Visualization */}
      <HubVisualization />

      {/* Image Gallery */}
      <ImageGallery />

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
         
          <h2 className="features-main-title">AI Agents That Automate and Accelerate Growth.</h2>
          <p className="features-description">Streamline operations, boost productivity, and scale effortlessly - all powered by intelligent automation.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>Task Automation</h3>
            <p>Let AI handle the repetitive, time-consuming tasks so your team can stay focused on business growth.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M12 7v5l4 2" />
              </svg>
            </div>
            <h3>Real-Time Monitoring</h3>
            <p>Empower your business by letting AI take over repetitive tasks and freeing your team for high impact work.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.29999 7L12 12L20.7 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Context Awareness</h3>
            <p>AI takes care of the repetitive stuff, so your team can focus on growth and delivering results that matter.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                <path d="M3 12A9 3 0 0 0 21 12" />
              </svg>
            </div>
            <h3>Resource Optimization</h3>
            <p>Empower your business by letting AI take over repetitive tasks and freeing team for high impact work.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </div>
            <h3>Role-Based Access</h3>
            <p>Free your team from manual, repetitive work. Let AI automate the busywork while you focus on scaling.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                <path d="m12 15 5 6H7Z" />
              </svg>
            </div>
            <h3>AI-Agent Collaboration</h3>
            <p>Let AI handle the repetitive, time-consuming tasks so your team can stay focused on business growth.</p>
          </div>
        </div>
      </section>

      {/* Portfolio / Demo Products Section */}
      <div id="portfolio">
        <Portfolio />
      </div>

      {/* Why Choose Inalgo Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose Inalgo</h2>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Experienced Developers</h3>
              <p>Our team brings years of expertise in cutting-edge technologies and best practices.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.29 7 12 12 20.71 7"/>
                  <line x1="12" y1="22" x2="12" y2="12"/>
                </svg>
              </div>
              <h3>Scalable Architecture</h3>
              <p>Build applications that grow with your business, handling increased demand seamlessly.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"/>
                  <path d="M12 6v6l4 2"/>
                  <path d="M16 14a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <h3>Agile Process</h3>
              <p>Flexible development methodology that adapts to your changing needs and delivers faster.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3>Affordable Pricing</h3>
              <p>Competitive rates without compromising on quality or service excellence.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Transparent Communication</h3>
              <p>Stay informed at every step with clear, honest, and regular project updates.</p>
            </div>
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times with focused daily work sessions. Your project moves forward consistently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section - Startups & Local Businesses */}
      <TargetClients />

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">How We Transform Your Vision Into Reality</p>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-number">01</div>
              <div className="process-content">
                <div className="process-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <h3>Discovery</h3>
                <p>We dive deep into understanding your business goals, target audience, and project requirements to set a solid foundation.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">02</div>
              <div className="process-content">
                <div className="process-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"/>
                    <path d="M6 9.01V9"/>
                    <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/>
                  </svg>
                </div>
                <h3>Planning</h3>
                <p>Strategic roadmap creation with defined milestones, timelines, and resource allocation for seamless execution.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">03</div>
              <div className="process-content">
                <div className="process-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3>Design</h3>
                <p>Crafting intuitive and visually stunning interfaces that provide exceptional user experiences aligned with your brand.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">04</div>
              <div className="process-content">
                <div className="process-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <h3>Development</h3>
                <p>Building robust, scalable solutions using cutting-edge technologies and industry best practices for optimal performance.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">05</div>
              <div className="process-content">
                <div className="process-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <h3>Testing</h3>
                <p>Rigorous quality assurance across devices and browsers to ensure flawless functionality and user experience.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-number">06</div>
              <div className="process-content">
                <div className="process-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
                  </svg>
                </div>
                <h3>Launch & Support</h3>
                <p>Smooth deployment to production with ongoing maintenance, updates, and dedicated support for your success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What People Say About Us</h2>
          <p className="section-subtitle">Trusted by professionals and organizations worldwide</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p className="testimonial-text">"The Inalgo team demonstrated exceptional technical skills and professionalism. Their innovative approach to problem-solving and attention to detail resulted in an outstanding final product."</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="author-info">
                  <h4>Dr. Sarah Mitchell</h4>
                  <p>Professor of Computer Science, MIT</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p className="testimonial-text">"Working with this team has been a game-changer. Their agile methodology and transparent communication kept us informed throughout the entire development process. Highly recommended!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="author-info">
                  <h4>James Rodriguez</h4>
                  <p>Tech Lead, Innovation Labs</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <p className="testimonial-text">"Exceptional work quality and dedication to meeting deadlines. The scalable architecture they built has allowed our platform to grow seamlessly. A truly professional team!"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="author-info">
                  <h4>Emily Chen</h4>
                  <p>Senior Developer, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />

      {/* App Promotion Section */}
      <AppPromotion 
        title="Download Our Mobile App"
        description="Take your business on the go with our mobile app for iOS & Android. Manage projects, track progress, and stay connected with your team anywhere."
        buttonText="Join our team"
        buttonLink="/contact"
        googlePlayUrl="#"
        appStoreUrl="#"
      />

      {/* Team Introduction Section */}
      <TeamIntro 
        title="Meet the team Shaping the future."
        description="Our diverse team of engineers and designers are dedicated to building innovative solutions that simplify work and empower businesses worldwide."
        buttonText="Join our team"
        buttonLink="/contact"
      />

      {/* Marquee Testimonials Section */}
      <MarqueeTestimonials />

      {/* Company Logo Marquee Section */}
      <LogoMarquee />

      {/* CTA Section with Gradient */}
      <CTASection 
        badge="Innovation & Excellence"
        title="Join 10,000+ Businesses"
        titleGradient="Transforming Ideas with Inalgo"
        description="Start building amazing web applications with our expert development team today."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  );
}

export default Home;
