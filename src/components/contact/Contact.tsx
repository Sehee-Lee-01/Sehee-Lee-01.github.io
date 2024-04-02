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
        <ul className="card-list">
          <li className="skill-category \">{item.name}</li>
          {skills}
        </ul>
      </li>
    );
  });

  const infoList = InfoJSON.items.map((item) => {
    const icon = si[item.icon as keyof typeof si]({
      style: {
        height: '15px',
        width: '15px',
        marginRight: '5px',
        fill: '#888888',
      },
    });
    return (
      <li key={item.name}>
        {icon} <a href={item.url}>{item.url}</a>
      </li>
    );
  });

  return (
    <>
      <div id="contact" className="bookmark" />
      <div className="contact">
        <div id="info-box">
          <h1 className="name">이 세희</h1>
          <span className="middle-title"> 백엔드 엔지니어</span>
          <p id="introduce">
            <span>
              안정적인 서비스를 위해 <b>테스트 작성</b>을 중요시하며,{' '}
              <b>활발한 커뮤니케이션</b>을 지향하는 <b>백엔드 개발자</b>가 되기
              위해 노력하고 있습니다.
            </span>
          </p>
          <ul className="contact-list">{infoList}</ul>
          <ul className="skill-list">{skillList}</ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
