import React from 'react';
import './style.css';

function Navbar() {
  const portfolio = document.getElementById('project-details');
  const resume = document.getElementById('resume');

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
          <a href="/">소개</a>
        </li>
        <li>
          <a href="/#skill">사용 기술</a>
        </li>
        <li>
          <a href="/#project">프로젝트</a>
        </li>
        <li>
          <a href="/#certificate">자격증</a>
        </li>
        <li>
          <a href="/#award">수상 내역</a>
        </li>
        <li>
          <a href="/#activity">활동</a>
        </li>
        <li>
          <a href="/#education">교육</a>
        </li>
      </ul>
      <button onClick={downloadPDF} className="pdf" type="button">
        PDF
      </button>
    </div>
  );
}

export default Navbar;
