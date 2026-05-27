import React from 'react';
import './RepoList.css';

function RepoList({ repos }) {
  if (!repos || repos.length === 0) {
    return null;
  }

    const totalBoxes = 5;
    const items = Array.from({ length: totalBoxes }).map((_, i) => (repos && repos[i] ? repos[i] : null));

    return (
      <div className="repo-section">
        <h3 className="repo-title">Top Repositories</h3>
        <div className="repo-list">
          {items.map((repo, idx) => (
            <div key={repo ? repo.id : `placeholder-${idx}`} className={`repo-card ${repo ? '' : 'repo-placeholder'}`}>
              {repo ? (
                <>
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-name">
                    {repo.name}
                  </a>

                  {repo.description && <p className="repo-desc">{repo.description}</p>}

                  <div className="repo-meta">
                    {repo.language && <span className="repo-lang">{repo.language}</span>}
                    <span className="repo-stars">Stars: {repo.stargazers_count}</span>
                  </div>
                </>
              ) : (
                <div className="repo-empty">No repository</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}

export default RepoList;
