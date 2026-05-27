import React, { useEffect } from 'react';
import '../SplashScreen.css';

function SplashScreen({ onComplete }) {
  useEffect(() => {
    // Play entering sound effect
    const playBeep = () => {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      } catch (e) {
        console.log('Audio context error:', e);
      }
    };
    
    // Play sound with slight delay for better UX
    const soundTimer = setTimeout(playBeep, 100);
    
    // Auto-transition to main app after animations complete
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // 3.5 seconds to allow animations to finish
    
    return () => {
      clearTimeout(soundTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="splash-title">
          {'GITDEX'.split('').map((char, index) => (
            <span key={index} className="letter" style={{ '--letter-index': index }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}

export default SplashScreen;
