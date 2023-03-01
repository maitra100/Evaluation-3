import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
  const navigate = useNavigate();
  function navigateTo() {
    navigate('/');
  }
  return (
    <header>
      <div id="heading" onClick={navigateTo}>
        EVENTIFY
      </div>
    </header>
  );
}

export default Header;
