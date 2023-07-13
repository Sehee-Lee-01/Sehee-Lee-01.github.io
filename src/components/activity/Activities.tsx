import React from 'react';
import './style.css';
import InfoJSON from '../../assets/json/activity.json';
import ActivityCard from './ActivityCard';

function Activities() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <ActivityCard activityProps={item} />
    </li>
  ));

  return (
    <div className="activities inline">
      <div id="activity" className="bookmark" />
      <h2>활동</h2>
      <ul className="inline-list activity-list">{infoList}</ul>
    </div>
  );
}

export default Activities;

export interface ActivityInfo {
  id: number;
  name: string;
  date: string;
  agency: string;
  work: string[];
}
