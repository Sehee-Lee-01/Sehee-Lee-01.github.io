import React from 'react';
import { EducationInfo } from './Education';
import './style.css';

type educationProps = {
  educationProps: EducationInfo;
};

function EducationCard({ educationProps }: educationProps) {
  const { name, date, major, grade } = educationProps;
  const majors = major.map((item) => (
    <li key={item.type}>
      <b className="major-type">{item.type}</b>
      <span>{item.name}</span>
    </li>
  ));
  return (
    <div className="inline-card education-card">
      <h3 className="title">{name}</h3>
      <div className="float-left">
        <div className="date">{date}</div>
        <div className="grade">{grade}</div>
      </div>
      <ul className="majors">{majors}</ul>
    </div>
  );
}

export default EducationCard;
