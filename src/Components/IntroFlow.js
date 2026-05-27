import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Screen1_GITDEX from './Screen1_GITDEX';
import Screen2_PaperRain from './Screen2_PaperRain';
import Screen3_QuestionMark from './Screen3_QuestionMark';
import Screen4_SearchBar from './Screen4_SearchBar';

function IntroFlow({ onIntroComplete, onSearch }) {
  const [stage, setStage] = useState('screen1');
  const [nextStage, setNextStage] = useState(null);

  // Delay the actual stage change to allow exit animation to complete
  useEffect(() => {
    if (!nextStage) return;
    
    const timer = setTimeout(() => {
      setStage(nextStage);
      setNextStage(null);
    }, 600); // Wait for exit animation to complete (0.5s) + buffer (0.1s)
    
    return () => clearTimeout(timer);
  }, [nextStage]);

  const handleScreen1Complete = () => {
    setNextStage('screen2');
  };

  const handleScreen2Complete = () => {
    setNextStage('screen3');
  };

  const handleScreen3Complete = () => {
    setNextStage('screen4');
  };

  const handleSearch = (query) => {
    onIntroComplete();
    onSearch(query);
  };

  return (
    <div className="intro-flow">
      <AnimatePresence mode="wait">
        {stage === 'screen1' && (
          <Screen1_GITDEX key="screen1" onComplete={handleScreen1Complete} />
        )}
        {stage === 'screen2' && (
          <Screen2_PaperRain key="screen2" onComplete={handleScreen2Complete} />
        )}
        {stage === 'screen3' && (
          <Screen3_QuestionMark key="screen3" onComplete={handleScreen3Complete} />
        )}
        {stage === 'screen4' && (
          <Screen4_SearchBar key="screen4" onSearch={handleSearch} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default IntroFlow;
