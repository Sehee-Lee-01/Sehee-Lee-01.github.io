import React from 'react';
import { ActivityInfo } from './Activities';
import './style.css';

type activityProps = {
  activityProps: ActivityInfo;
};

function ActivityCard({ activityProps }: activityProps) {
  const { name, date, agency, work } = activityProps;
  const workList = work.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="inline-card activity-card">
      <h3 className="title">{name}</h3>
      <span className="date">{date}</span>
      <b className="mid-title">{agency}</b>
      <ul className="mul-line-list">{workList}</ul>
    </div>
  );
}

export default ActivityCard;
