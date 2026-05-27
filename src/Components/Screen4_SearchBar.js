import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Screen4_SearchBar.css';

function Screen4_SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        stiffness: 60,
      },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  return (
    <motion.div
      className="screen-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
    >
      <motion.div
        className="search-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="search-title">GITDEX</h1>
        
        <form className="search-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            className="search-input"
            placeholder="Search any GitHub developer..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileFocus={{ scale: 1.02 }}
          />
          
          <motion.button
            type="submit"
            className="search-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </form>

        <motion.p
          className="search-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Discover developers beyond the code.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Screen4_SearchBar;
