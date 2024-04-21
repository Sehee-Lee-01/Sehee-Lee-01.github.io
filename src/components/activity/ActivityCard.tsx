import React from 'react';
import * as si from 'react-icons/si';
import { ActivityInfo } from './Activities';
import './style.css';

type activityProps = {
  activityProps: ActivityInfo;
};

function ActivityCard({ activityProps }: activityProps) {
  const { name, date, agency, work, urls } = activityProps;
  const workList = work.map((item) => <li key={item}>{item}</li>);
  const urlList = urls.map((item) => {
    const icon = si[item.icon as keyof typeof si]({
      className: 'url-icon',
    });
    return (
      <li key={item.url} className="url-list-element">
        {icon} <a href={item.url}>{item.url}</a>
      </li>
    );
  });
  return (
    <div className="inline-card activity-card">
      <h3 className="title">{name}</h3>
      <span className="date">{date}</span>
      <b className="mid-title">{agency}</b>
      <ul className="url-list">{urlList}</ul>
      <ul className="mul-line-list">{workList}</ul>
    </div>
  );
}

export default ActivityCard;
