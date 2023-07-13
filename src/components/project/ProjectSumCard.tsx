import React from 'react';
import './style.css';

interface ProjectSumInfo {
  id: number;
  name: string;
  date: string;
  role: string[];
  keyword: string[];
  url: string;
}

type ProjectSumCardProps = {
  projectSumProps: ProjectSumInfo;
};

function ProjectSumCard({ projectSumProps }: ProjectSumCardProps) {
  const { id, name, date, role, keyword, url } = projectSumProps;

  const roleList = role.map((item) => <li key={item}>{item}</li>);
  const keywordList = keyword.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="inline-card sum-card">
      <h3 className="title">{name}</h3>
      <a href={url}>🔗 Github</a>
      <span className="date">{date}</span>
      <div>
        <ul className="card-list">{keywordList}</ul>
      </div>
      <ul className="mul-line-list">{roleList}</ul>
    </div>
  );
}

export default ProjectSumCard;
