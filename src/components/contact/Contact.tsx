import React from 'react';
import './style.css';
import * as si from 'react-icons/si';
import InfoJSON from '../../assets/json/contact.json';
import skillJSON from '../../assets/json/skill.json';

function Contact() {
  const skillList = skillJSON.item.map((item) => {
    const skills = item.skill.map((skill) => {
      return <li key={skill}>{skill}</li>;
    });
    return (
      <li key={item.id}>
        <b>{item.name}</b>
        <ul className="card-list">{skills}</ul>
      </li>
    );
  });

  const infoList = InfoJSON.items.map((item) => {
    const icon = si[item.icon as keyof typeof si]({
      style: {
        height: '20px',
        width: '20px',
        fill: '#888888',
      },
    });
    return (
      <li key={item.name}>
        <a href={item.url} className="icon">
          {icon}
        </a>
      </li>
    );
  });

  return (
    <>
      <div id="contact" className="bookmark" />
      <div className="contact">
        <div id="img-box">
          <img id="my-img" src="profile.png" alt="It's Me." />
        </div>

        <div id="info-box">
          <h1>이 세희</h1>
          <ul className="contact-list">{infoList}</ul>
          <p id="introduce">
            <b>실시간 데이터</b>를 효율적으로 처리하는 <b>백엔드 개발자</b>가
            되고 싶습니다. <br />
            사회 문제를 해결하는 개발자를 꿈꾸고 있습니다.
          </p>
          <ul className="skill-list">{skillList}</ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
