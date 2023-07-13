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
      <h3>{name}</h3>
      <b>수상</b>
      {award} <br />
      <b>날짜</b>
      {date} <br />
      <b>기관</b>
      {agency} <br />
    </div>
  );
}

export default AwardCard;
