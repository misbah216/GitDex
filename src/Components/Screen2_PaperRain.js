import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './Screen2_PaperRain.css';

function FallingCard({ delay, duration, randomX, randomRotation, randomSize, randomOpacity }) {
  return (
    <motion.div
      className="falling-card"
      style={{
        width: randomSize,
        height: randomSize,
      }}
      initial={{
        y: -200,
        x: randomX,
        rotate: randomRotation,
        opacity: randomOpacity,
      }}
      animate={{
        y: window.innerHeight + 200,
        x: randomX + (Math.random() * 50 - 25),
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
      }}
    >
      <div className="card-content">
        <div className="card-avatar" style={{
          width: randomSize * 0.4,
          height: randomSize * 0.4,
        }}>
          <div className="avatar-placeholder" />
        </div>
        <div className="card-info">
          <p className="card-username">User {Math.floor(Math.random() * 10000)}</p>
          <div className="card-stats">
            <span className="stat">Repos: {Math.floor(Math.random() * 150 + 5)}</span>
            <span className="stat">Followers: {Math.floor(Math.random() * 5000 + 10)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Screen2_PaperRain({ onComplete }) {
  const cards = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      delay: (i % 20) * 0.05,
      duration: Math.random() * 6 + 4,
      randomX: Math.random() * (window.innerWidth - 100),
      randomRotation: Math.random() * 30 - 15,
      randomSize: Math.random() * 70 + 80,
      randomOpacity: Math.random() * 0.4 + 0.6,
    }));
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="screen-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="rain-container">
        {cards.map((card) => (
          <FallingCard
            key={card.id}
            delay={card.delay}
            duration={card.duration}
            randomX={card.randomX}
            randomRotation={card.randomRotation}
            randomSize={card.randomSize}
            randomOpacity={card.randomOpacity}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Screen2_PaperRain;
