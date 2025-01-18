import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <a href="#apartments">아파트</a>
        <a href="#villas">빌라, 투룸+</a>
        <a href="#one-room">원룸</a>
        <a href="#officetel">오피스텔</a>
        <a href="#stores">상가</a>
      </nav>
    </header>
  );
};

export default Header;
