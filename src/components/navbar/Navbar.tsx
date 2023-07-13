import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#contact">Main</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#certificate">Certificates</a>
        </li>
        <li>
          <a href="#award">Awards</a>
        </li>
        <li>
          <a href="#activity">Activities</a>
        </li>
        <li>
          <a href="#education">Educations</a>
        </li>
      </ul>
      <button className="pdf" type="button">
        PDF
      </button>
    </div>
  );
}

export default Navbar;
