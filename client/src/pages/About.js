import React, { useState } from 'react';
import './About.css';
import CTASection from '../components/CTASection';

function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About Inalgo</h1>
          <p className="lead">Innovative solutions for the modern web</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="video-content-wrapper">
            <div className="video-card" onClick={openVideo}>
              <img 
                className="video-image"
                src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                alt="What we do" 
              />
              <div className="play-button">
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
                    fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" 
                  />
                </svg>
              </div>
            </div>
            <div className="video-text-content">
              <h2 className="section-subtitle">What we do?</h2>
              <div className="gradient-line"></div>
              <p className="video-paragraph">
                Inalgo helps you build faster by transforming your design vision into fully functional,
                production-ready UI components.
              </p>
              <p className="video-paragraph">
                Whether you're launching a SaaS app, landing page or dashboard, our collection of modern
                components is crafted to boost your development speed and improve user experience.
              </p>
              <p className="video-paragraph">
                From UI design systems to automation-ready layouts, Inalgo empowers you to build
                beautifully and scale effortlessly.
              </p>
              <a href="#services" className="read-more-btn">
                <span>Read more</span>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                    fill="#fff" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-content">
        <div className="container">
          <div className="story-section">
            <h2 className="story-title">Our Story</h2>
            <div className="story-content">
              <p>
                Inalgo was born from a simple yet powerful vision: to bridge the gap between innovative ideas 
                and digital reality. In an era where technology evolves at lightning speed, businesses often 
                struggle to keep pace with digital transformation.
              </p>
              <p>
                We recognized that traditional development approaches weren't meeting the demands of modern 
                businesses. Companies needed a partner who could deliver cutting-edge solutions quickly, 
                without compromising on quality or scalability. That's why we created Inalgo.
              </p>
              <p>
                Our name, Inalgo, represents "Innovation in Algorithms" – a testament to our commitment to 
                leveraging smart technology and intelligent automation to solve complex business challenges. 
                We believe that every business, regardless of size, deserves access to world-class digital 
                solutions that drive growth and success.
              </p>
              <p>
                Today, Inalgo stands at the intersection of affordability and excellence. We work with startups 
                building their first MVP, local businesses establishing their online presence, and agencies 
                scaling their operations. Our approach is simple: deliver professional-grade solutions at 
                prices that make sense for growing businesses, all while maintaining the direct communication 
                and flexibility that larger firms can't match.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-block">
              <h2>Our Mission</h2>
              <p>
                To empower businesses with innovative digital solutions that accelerate growth, 
                enhance efficiency, and deliver measurable results. We're committed to transforming 
                complex challenges into elegant, scalable solutions through cutting-edge technology 
                and exceptional service.
              </p>
            </div>
            
            <div className="content-block">
              <h2>Our Vision</h2>
              <p>
                To be the global leader in digital innovation, recognized for delivering transformative 
                solutions that shape the future of business technology. We envision a world where every 
                organization can leverage the power of intelligent automation and modern web technologies 
                to achieve extraordinary success.
              </p>
            </div>
            

            
            <div className="content-block">
              <h2>Core Values</h2>
              <ul>
                <li><strong>Innovation:</strong> Constantly pushing boundaries and embracing new technologies</li>
                <li><strong>Excellence:</strong> Uncompromising quality in every line of code we write</li>
                <li><strong>Integrity:</strong> Transparent, honest communication in all client relationships</li>
                <li><strong>Collaboration:</strong> Building strong partnerships for mutual success</li>
                <li><strong>Agility:</strong> Adapting quickly to changing needs and market demands</li>
              </ul>
            </div>

            
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section">
        <div className="container">
          <h2 className="section-title">Meet Our Founder</h2>
          <div className="founder-content">
            {/* Image */}
      <div className="founder-image-wrapper">
        <div className="founder-avatar">
          <img 
src="https://media.licdn.com/dms/image/v2/D5603AQE08OG9IJtAJw/profile-displayphoto-scale_400_400/B56Z0RO3x1JMAg-/0/1774110609883?e=1778112000&v=beta&t=8iP5NM-za55nvJ0qQe-exGz6cvDnPKruSUwZmEYDbHI"
alt="Adarsh Mishra - CTO"
            className="founder-img"
          />
        </div>
      </div>
            {/* <div className="founder-image-wrapper">
              <div className="founder-avatar">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div> */}
            <div className="founder-info">
              <h3>Anmol Mishra</h3>
              <p className="founder-title">Founder & CEO</p>
              <div className="founder-bio">
                <p>
                  Anmol is a visionary technologist and entrepreneur with a passion for creating digital 
                  solutions that make a real difference. With extensive experience in full-stack development 
                  and a deep understanding of modern web technologies, Anmol founded Inalgo to help businesses 
                  navigate the complexities of digital transformation.
                </p>
                <p>
                  Drawing from years of hands-on experience in software development, Anmol recognized the need 
                  for a development partner that could deliver both innovation and reliability. Under his 
                  leadership, Inalgo has grown into a trusted partner for businesses seeking cutting-edge 
                  digital solutions.
                </p>
                <p>
                  Anmol's philosophy is simple: technology should empower, not complicate. This belief drives 
                  every project at Inalgo, ensuring that our solutions are not only powerful but also intuitive 
                  and user-friendly.
                </p>
              </div>
              <div className="founder-social">
                <a href="https://www.linkedin.com/in/anmolmishra09/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://github.com/anmolmishra09" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </a>
                <a href="https://instagram.com/anmolmishra09"  target="_blank" rel="noopener noreferrer" className="social-link">
  <svg xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37a4 4 0 1 1-7.74-1.37 4 4 0 0 1 7.74 1.37z"/>
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
  </svg>
</a>

{/* <a 
  href="" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
</a> */}
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTO Section */}
<section className="founder-section">
  <div className="container">
    <h2 className="section-title">Meet Our CTO</h2>

    <div className="founder-content">
      
      {/* Image */}
      <div className="founder-image-wrapper">
        <div className="founder-avatar">
          <img 
            src="https://media.licdn.com/dms/image/v2/D5603AQFu1lnVyRqtqw/profile-displayphoto-scale_400_400/B56Zxx9ptKIcAg-/0/1771438514908?e=1778112000&v=beta&t=GyG600RqhSOsxa8wTnMVPG4KnpC5STtVsNnPK37Ssjc"
            alt="Adarsh Mishra - CTO"
            className="founder-img"
          />
        </div>
      </div>

      {/* Info */}
      <div className="founder-info">
        <h3>Adarsh Mishra</h3>
        <p className="founder-title">Chief Technology Officer (CTO)</p>

        <div className="founder-bio">
          <p>
            Adarsh Mishra is a passionate technology leader specializing in scalable systems, 
            backend architecture, and modern cloud-based solutions. As CTO of Inalgo, he 
            leads the technical vision and ensures the delivery of secure, high-performance, 
            and innovative digital products.
          </p>

          <p>
            With strong expertise in full-stack development and system design, Adarsh has 
            played a key role in building robust and efficient platforms that solve real-world 
            problems and drive business growth.
          </p>

          <p>
            His vision is to create future-ready technology that empowers businesses to scale 
            effortlessly while maintaining simplicity, performance, and reliability.
          </p>
        </div>

        {/* Social Links */}
        <div className="founder-social">
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/adarshmishra09/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/adarshmishra09" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5-.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5"/>
            </svg>
          </a>
          {/* Instagram */}
          <a 
  href="https://instagram.com/" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="social-link"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37a4 4 0 1 1-7.74-1.37 4 4 0 0 1 7.74 1.37z"/>
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
  </svg>
</a>
         
        </div>

      </div>
    </div>
  </div>
</section>
      
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        badge="Ready to Start?"
        title="Let's Build Something"
        titleGradient="Amazing Together"
        description="Partner with Inalgo to bring your vision to life with cutting-edge technology."
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-close-btn" onClick={closeVideo}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="video-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Inalgo Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
