import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HubVisualization.css';

function HubVisualization() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 1,
      title: 'Web Development',
      icon: '🌐',
      color: '#4f46e5',
      angle: 0,
      description: 'Full-stack web applications with modern frameworks',
      link: '/services'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      icon: '📱',
      color: '#7c3aed',
      angle: 51.43,
      description: 'Native and cross-platform mobile solutions',
      link: '/services'
    },
    {
      id: 3,
      title: 'AI Integration',
      icon: '🤖',
      color: '#ec4899',
      angle: 102.86,
      description: 'Smart automation with AI-powered features',
      link: '/services'
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      icon: '☁️',
      color: '#f59e0b',
      angle: 154.29,
      description: 'Scalable cloud infrastructure and deployment',
      link: '/services'
    },
    {
      id: 5,
      title: 'E-commerce',
      icon: '🛒',
      color: '#ef4444',
      angle: 205.71,
      description: 'Complete online store solutions',
      link: '/services'
    },
    {
      id: 6,
      title: 'API Development',
      icon: '⚡',
      color: '#8b5cf6',
      angle: 257.14,
      description: 'RESTful APIs and backend services',
      link: '/services'
    },
    {
      id: 7,
      title: 'UI/UX Design',
      icon: '🎨',
      color: '#06b6d4',
      angle: 308.57,
      description: 'Beautiful, user-centered design',
      link: '/services'
    }
  ];

  return (
    <section className="hub-visualization">
      <div className="container">
        <div className="hub-header">
          <h2 className="hub-title">Our Expertise</h2>
          <p className="hub-subtitle">
            Comprehensive digital solutions tailored for startups and growing businesses
          </p>
        </div>

        <div className="hub-container">
          {/* SVG for connection lines */}
          <svg className="hub-connections" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {nodes.map(node => (
                <linearGradient
                  key={`gradient-${node.id}`}
                  id={`gradient-${node.id}`}
                  gradientUnits="userSpaceOnUse"
                  x1="400"
                  y1="400"
                  x2={400 + Math.cos((node.angle * Math.PI) / 180) * 250}
                  y2={400 + Math.sin((node.angle * Math.PI) / 180) * 250}
                >
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
                  <stop offset="100%" stopColor={node.color} stopOpacity="0.8" />
                </linearGradient>
              ))}
            </defs>

            {/* Connection lines */}
            {nodes.map(node => {
              const x = 400 + Math.cos((node.angle * Math.PI) / 180) * 250;
              const y = 400 + Math.sin((node.angle * Math.PI) / 180) * 250;
              const isActive = activeNode === node.id;

              return (
                <g key={`line-${node.id}`}>
                  <line
                    x1="400"
                    y1="400"
                    x2={x}
                    y2={y}
                    stroke={`url(#gradient-${node.id})`}
                    strokeWidth={isActive ? "3" : "2"}
                    className={`hub-line ${isActive ? 'active' : ''}`}
                  />
                  {/* Animated dot on line */}
                  {isActive && (
                    <circle
                      className="hub-line-dot"
                      r="4"
                      fill={node.color}
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={`M 400 400 L ${x} ${y}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Center hub */}
          <div className="hub-center">
            <div className="hub-center-ring"></div>
            <div className="hub-center-content">
              <div className="hub-logo">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="15" width="12" height="70" fill="url(#logoGradient)" rx="2"/>
                  <circle cx="26" cy="25" r="3" fill="#fff"/>
                  <circle cx="26" cy="40" r="3" fill="#fff"/>
                  <circle cx="26" cy="55" r="3" fill="#fff"/>
                  <circle cx="26" cy="70" r="3" fill="#fff"/>
                  <path d="M35 30 L55 30 L55 35 L40 35 L40 50 L52 50 L52 55 L40 55 L40 70 L55 70 L55 75 L35 75 Z" fill="url(#logoGradient)"/>
                  <rect x="60" y="30" width="12" height="45" fill="url(#logoGradient)" rx="2"/>
                </svg>
              </div>
              <h3 className="hub-center-title">Inalgo</h3>
            </div>
          </div>

          {/* Node circles */}
          {nodes.map(node => {
            const radius = 250;
            const x = Math.cos((node.angle * Math.PI) / 180) * radius;
            const y = Math.sin((node.angle * Math.PI) / 180) * radius;
            const isActive = activeNode === node.id;

            return (
              <Link
                key={node.id}
                to={node.link}
                className={`hub-node ${isActive ? 'active' : ''}`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  '--node-color': node.color
                }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="hub-node-inner">
                  <div className="hub-node-icon" style={{ backgroundColor: node.color }}>
                    <span>{node.icon}</span>
                  </div>
                  <div className="hub-node-content">
                    <h4 className="hub-node-title">{node.title}</h4>
                    {isActive && (
                      <p className="hub-node-description">{node.description}</p>
                    )}
                  </div>
                </div>
                <div 
                  className="hub-node-glow" 
                  style={{ backgroundColor: node.color }}
                ></div>
              </Link>
            );
          })}
        </div>

        <div className="hub-footer">
          <p className="hub-footer-text">
            Click on any service to learn more about our offerings
          </p>
        </div>
      </div>
    </section>
  );
}

export default HubVisualization;
