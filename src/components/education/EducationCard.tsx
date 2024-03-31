import React from 'react';
import { EducationInfo } from './Education';
import './style.css';

type educationProps = {
  educationProps: EducationInfo;
};

function EducationCard({ educationProps }: educationProps) {
  const { name, date, major, grade } = educationProps;
  return (
    <div className="inline-card education-card">
      <h3 className="title">{name}</h3>
      <div>
        <div className="date">{date}</div>
        <div className="grade">{grade}</div>
      </div>
      <b className="mid-title">{major}</b>
    </div>
  );
}

export default EducationCard;
