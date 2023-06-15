import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <h1>This is a header</h1>
      <p>The body goes here...</p>
      <h3>Goodluck is back to Readems. Thank God</h3>

      <ul>
        <li>Create your website</li>
        <li>Make a name</li>
        <li>Study physics and chemistry</li>
        <li>Go to work</li>
        <li>Cook some food</li>
        <li>Go to confession</li>
      </ul>
    </div>
  );
}

export default App;
