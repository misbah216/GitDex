import React from 'react';
import './ParticleBackground.css';

function ParticleBackground() {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 250 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? 'rgba(88, 166, 255, 0.1)' : 'rgba(200, 100, 255, 0.1)',
  }));

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: `radial-gradient(circle, ${particle.color}, transparent)`,
            filter: `blur(${Math.random() * 60 + 40}px)`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default ParticleBackground;
