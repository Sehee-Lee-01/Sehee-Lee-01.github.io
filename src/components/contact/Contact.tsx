import React from 'react';
import './style.css';
import myImage from '../../assets/images/profile.png';
import InfoJSON from '../../assets/json/contact.json';

function Contact() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.name}>
      <a href={item.url}>{item.name}</a>
    </li>
  ));

  return (
    <>
      <div id="contact" className="bookmark" />
      <div className="contact">
        <div id="img-box">
          <img id="my-img" src={myImage} alt="It's Me." />
        </div>
        <div id="info-box">
          <h1>이 세희 (Sehee Lee)</h1>
          <p id="introduce">
            <b>실시간 데이터</b>를 효율적으로 처리하는 <b>백엔드 개발자</b>가
            되고 싶습니다. <br />
            사회 문제를 해결하는 개발자를 꿈꾸고 있습니다.
          </p>
          <ul className="contact-list">{infoList}</ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
