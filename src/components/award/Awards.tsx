import React from 'react';
import './style.css';
import InfoJSON from '../../assets/json/award.json';
import AwardCard from './AwardCard';

function Awards() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <AwardCard awardProps={item} />
    </li>
  ));

  return (
    <div className="awards inline">
      <div id="award" className="bookmark" />
      <h2>수상 내역</h2>
      <ul className="inline-list award-list">{infoList}</ul>
    </div>
  );
}

export default Awards;

export interface AwardInfo {
  id: number;
  name: string;
  award: string;
  date: string;
  agency: string;
}
