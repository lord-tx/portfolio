import React from 'react';
import './App.css';
import "./assets/styles/main.scss";

function App() {
  return (
    <div className="navHeader">
      <h1>Logo</h1>
      <ul className='navList'>
        <li><a href="default.asp">Services</a></li>
        <li><a href="news.asp">Projects</a></li>
        <li><a href="contact.asp">Skills</a></li>
        <li><a href="about.asp">About Me</a></li>
      </ul>
      <button>
        Contact Now
      </button>
    </div>
  );
}

export default App;
