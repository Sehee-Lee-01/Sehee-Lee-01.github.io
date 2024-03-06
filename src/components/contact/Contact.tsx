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
        {/* <div id="img-box">
          <img id="my-img" src="profile.png" alt="It's Me." />
        </div> */}

        <div id="info-box">
          <h1>이 세희</h1>
          <ul className="contact-list">{infoList}</ul>
          <p id="introduce">
            <span>
              탄탄한 기본기를 중요시하는 <b>백엔드 개발자</b>가 되기 위해
              노력하고 있습니다.
            </span>
            <ol id="myRule">
              <li>
                작은 기술이더라도 정확하게 알고 사용하기 위해 <b>공식 문서</b>나{' '}
                <b>소스 코드</b>를 먼저 찾아봅니다.
              </li>
              <li>
                개발자의 입장이 아닌 <b>사용자의 입장</b>을 생각하며 서비스를
                개발합니다.
              </li>
              <li>
                <b>활발한 커뮤니케이션</b>을 지향하며 팀원들과 적극적으로
                소통합니다.
              </li>
            </ol>
          </p>
          <ul className="skill-list">{skillList}</ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
