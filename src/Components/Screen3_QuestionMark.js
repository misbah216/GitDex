import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Screen3_QuestionMark.css';

function Screen3_QuestionMark({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const questionVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 50,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.3,
      transition: {
        duration: 0.5,
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  const shakeVariants = {
    shake: {
      rotate: [0, -1, 1, -1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <motion.div
      className="screen-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="question-mark-container"
        variants={questionVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="question-mark"
          variants={pulseVariants}
          initial="initial"
          animate="pulse"
        >
          <motion.span
            variants={shakeVariants}
            animate="shake"
          >
            ?
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Screen3_QuestionMark;
