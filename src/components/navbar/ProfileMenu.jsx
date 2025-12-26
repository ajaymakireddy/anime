
import React, { useEffect, useRef, useState } from 'react';
import './ProfileMenu.css';
import { FaUserCircle } from 'react-icons/fa';

export default function ProfileMenu({ user: propUser, onLogout }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // prefer prop user, fallback to localStorage
  const user = propUser ?? (() => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
      return null;
    }
  })();

  useEffect(() => {
    function handleOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  if (!user) return null; // don't render anything if no user

  const handleLogout = () => {
    // call outside handler if provided
    if (typeof onLogout === 'function') {
      onLogout();
    } else {
      // default behaviour: clear user and reload
      localStorage.removeItem('user');
      window.location.reload();
    }
  };

  const displayName = user.name || user.username || user.email || 'User';

  return (
    <div className="profile-menu" ref={containerRef}>
      <button
        type="button"
        className="profile-btn"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
      >
        {/* use react-icons if available, otherwise simple circle */}
        {user.avatar ? (
          <img src={user.avatar} alt="profile" className="profile-avatar" />
        ) : (
          <FaUserCircle size={28} />
        )}
      </button>

      {open && (
        <div className="profile-popup" role="menu">
          <div className="profile-welcome">Welcome, <span className="profile-name">{displayName}</span></div>
          <div className="profile-actions">
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ===== ProfileMenu.css =====
Place this content in a file named `ProfileMenu.css` alongside ProfileMenu.jsx
You asked for plain CSS — no frameworks used. Feel free to tweak spacing/colors.
*/

/* ProfileMenu.css */
