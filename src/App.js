import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import ProfileCard from './Components/ProfileCard';
import RepoList from './Components/RepoList';
import IntroFlow from './Components/IntroFlow';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const searchUser = async (searchName) => {
    setHasSearched(true);
    setLoading(true);
    setError('');
    setUserData(null);
    setRepos([]);

    try {
      const userRes = await fetch(`https://api.github.com/users/${searchName}`);
      if (!userRes.ok) {
        throw new Error('User not found! Please check the username.');
      }

      const user = await userRes.json();
      setUserData(user);

      const repoRes = await fetch(
        `https://api.github.com/users/${searchName}/repos?sort=stars&per_page=5`
      );
      const repoData = await repoRes.json();
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app ${hasSearched ? 'has-search-results' : ''}`}>
      {/* Show intro flow first; reveal main UI only after intro completes */}
      {showIntro && (
        <IntroFlow 
          onIntroComplete={() => setShowIntro(false)}
          onSearch={searchUser}
        />
      )}

      {!showIntro && (
        <>
          <h1 className="title">GitHub Profile Finder</h1>
          <SearchBar onSearch={searchUser} />
        </>
      )}
      {loading && <p className="loading">Searching...</p>}
      {error && <p className="error">{error}</p>}
      {userData && <ProfileCard user={userData} />}
      {repos.length > 0 && <RepoList repos={repos} />}
    </div>
  );
}

export default App;