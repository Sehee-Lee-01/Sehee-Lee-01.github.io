import React from 'react';
import { EducationInfo } from './Education';
import './style.css';

type educationProps = {
  educationProps: EducationInfo;
};

function EducationCard({ educationProps }: educationProps) {
  const { id, name, date, major } = educationProps;
  return (
    <div className="inline-card education-card">
      <h3 className="title">{name}</h3>
      <span className="date">{date}</span>
      <b className="mid-title">{major}</b>
    </div>
  );
}

export default EducationCard;
