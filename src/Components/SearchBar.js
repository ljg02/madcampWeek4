import React from 'react';
// import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <h2>어떤 집을 찾고 계세요?</h2>
      <div className="search-input">
        <input
          type="text"
          placeholder="원하시는 지역명, 단지명을 입력해주세요"
        />
        <button>검색</button>
      </div>
    </div>
  );
};

export default SearchBar;
