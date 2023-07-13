import React from 'react';
import './style.css';
import InfoJSON from '../../assets/json/skill.json';

function Skills() {
  const infoList = InfoJSON.item.map((item) => (
    <li key={item.id}>
      <div>
        <b>{item.name}</b>
        {item.skill}
      </div>
    </li>
  ));
  return (
    <div className="skills inline">
      <div id="skill" className="bookmark" />
      <h2>사용 기술</h2>
      <ul className="inline-card ">{infoList}</ul>
    </div>
  );
}

export default Skills;
export interface SkillInfo {
  id: number;
  name: string;
  skill: string;
}
