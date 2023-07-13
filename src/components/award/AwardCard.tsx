import React from 'react';
import { AwardInfo } from './Awards';
import './style.css';

type awardProps = {
  awardProps: AwardInfo;
};

function AwardCard({ awardProps }: awardProps) {
  const { id, name, award, date, agency } = awardProps;
  return (
    <div className="inline-card award-card">
      <h3 className="title">{name}</h3>
      <span className="date">{date}</span>
      <br />
      <b className="mid-title">{award}</b>
      <span className="agency">{agency}</span>
    </div>
  );
}

export default AwardCard;
