import React from 'react';
import './ProfileCard.css';

function ProfileCard({ user }) {
  if (!user) {
    return null;
  }

  return (
    <div className="profile-card">
      <img
        src={user.avatar_url}
        alt={user.login || 'GitHub user'}
        className="avatar"
      />

      <div className="profile-info">
        <h2 className="profile-name">{user.name || user.login}</h2>
        <p className="profile-username">@{user.login}</p>

        {user.bio && <p className="profile-bio">{user.bio}</p>}

        {user.location && (
          <p className="profile-location">Location: {user.location}</p>
        )}

        <div className="profile-stats">
          <div className="stat">
            <span className="stat-number">{user.public_repos}</span>
            <span className="stat-label">Repositories</span>
          </div>

          <div className="stat">
            <span className="stat-number">{user.followers}</span>
            <span className="stat-label">Followers</span>
          </div>

          <div className="stat">
            <span className="stat-number">{user.following}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>

        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="profile-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
