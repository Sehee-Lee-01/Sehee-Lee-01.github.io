import React from 'react';
import './style.css';

function Navbar() {
  function downloadPDF() {
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // public
    link.download = 'Resume-temp.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

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
      <button onClick={downloadPDF} className="pdf" type="button">
        PDF
      </button>
    </div>
  );
}

export default Navbar;
