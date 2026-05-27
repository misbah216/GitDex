import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import './Screen1_GITDEX.css';

function Screen1_GITDEX({ onComplete }) {
  useEffect(() => {
    // Play entering sound
    const playBeep = () => {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.15);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } catch (e) {
        console.log('Audio context not available');
      }
    };
    
    setTimeout(playBeep, 200);
    const timer = setTimeout(onComplete, 3200);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="screen-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <ParticleBackground />
      
      <motion.div
        className="screen-1-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="title-container">
          {Array.from('GITDEX').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={titleVariants}
              className="title-char"
            >
              {char}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Discover developers beyond the code.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Screen1_GITDEX;
