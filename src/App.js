import React from 'react';
import menuButton from './menu-alt-512.png'
import './reset.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='responsive-header'>
          <span className='header-text'>Start Bootstrap</span>
          <button className='button responsive-button'>MENU <i class="fas fa-bars"></i></button>
          <ul className='responsive-menu'>
            <li className='menu-item'>SERVICES</li>
            <li className='menu-item'>PORTFOLIO</li>
            <li className='menu-item'>ABOUT</li>
            <li className='menu-item'>TEAM</li>
            <li className='menu-item'>CONTACT</li>
          </ul>
        </div>
        <div className='responsive-banner'>
          <span className='welcome'>Welcome To Our Studio!</span>
          <h1 className='h1'>IT'S NICE TO MEET YOU</h1>
          <button className='button'>TELL ME MORE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
