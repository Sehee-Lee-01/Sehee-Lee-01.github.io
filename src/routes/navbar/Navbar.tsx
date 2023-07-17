import React from 'react';
import './style.css';

function Navbar() {
  function downloadPDF() {
    window.print();
  }

  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="/">소개</a>
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
      <button onClick={downloadPDF} className="print" type="button">
        인쇄
      </button>
    </div>
  );
}

export default Navbar;
