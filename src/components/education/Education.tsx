import React from 'react';
import './style.css';
import InfoJSON from '../../assets/json/education.json';
import EducationCard from './EducationCard';

function Educations() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <EducationCard educationProps={item} />
    </li>
  ));

  return (
    <div className="educations inline">
      <div id="education" className="bookmark" />
      <h2>교육</h2>
      <ul className=" inline-list education-list">{infoList}</ul>
    </div>
  );
}

export default Educations;

export interface EducationInfo {
  id: number;
  name: string;
  date: string;
  major: string;
}
