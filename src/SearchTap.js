import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Banner from './Components/Banner';
import axios from 'axios';
import { set } from 'mongoose';


function Search() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/listings')
    .then(response => setListings(response.data))
    .catch(error => console.error(error));
  }, [])
  return (
    <div>
      {listings.map(listing => (
        <div key={listing.id}>
          <h2>{listing.title}</h2>
          <p>{listing.description}</p>
        </div>
      ))}
      <Header />
      <Banner />
      <SearchBar />
    </div>
  );
}

export default Search;
