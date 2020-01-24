import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';
import SearchResults from './SearchResults';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
