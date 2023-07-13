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
      <h3>{name}</h3>
      <b>학위</b>
      {major}
      <br />
      <b>기간</b>
      {date}
    </div>
  );
}

export default EducationCard;
