import React from 'react';
import './App.css';
import HeroesList from './components/HeroesList';

function App() {
  return React.createElement("div", null, React.createElement(HeroesList, null));
}

export default App;