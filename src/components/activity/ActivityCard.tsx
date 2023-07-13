import React from 'react';
import { ActivityInfo } from './Activities';
import './style.css';

type activityProps = {
  activityProps: ActivityInfo;
};

function ActivityCard({ activityProps }: activityProps) {
  const { id, name, date, agency, work } = activityProps;
  const workList = work.map((item) => <li key={item}>{item}</li>);

  return (
    <div className="inline-card activity-card">
      <h3>{name}</h3>
      <p>
        <b>기간</b>
        {date}
      </p>
      <p>
        <b>기관</b>
        {agency}
      </p>
      <b>활동</b>
      <ul className="mul-line-list">{workList}</ul>
    </div>
  );
}

export default ActivityCard;
