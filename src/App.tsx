import React from 'react';
import logo from './logo.svg';
import PeopleListContainer from './domains/PeopleList/PeopleListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Counter /> */}
        <PeopleListContainer />
      </header>
    </div>
  );
}

export default App;
