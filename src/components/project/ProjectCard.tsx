import React from 'react';
import { ProjectInfo } from './Projects';
import './style.css';

type ProjectCardProps = {
  projectProps: ProjectInfo;
};

function ProjectCard({ projectProps }: ProjectCardProps) {
  const {
    id,
    name,
    summary,
    date,
    scale,
    role,
    keyword,
    trouble,
    result,
    url,
  } = projectProps;

  const roleList = role.map((item) => <li key={item}>{item}</li>);
  const keywordList = keyword.map((item) => <li key={item}>{item}</li>);
  const troubleList = trouble.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="inline-card project-card">
      <h3>{name}</h3>
      <a href={url}>🔗 Github</a>
      <div className="project-summary">{summary}</div>
      <p>
        <b>기간</b>
        {date}
      </p>
      <p>
        <b>인원</b>
        {scale}
      </p>
      <div>
        <b>기술</b>
        <ul className="keyword-list card-list">{keywordList}</ul>
      </div>
      <b>경험</b>
      <ul className="mul-line-list">{roleList}</ul>
      <b>개선</b>
      <ul className="mul-line-list">{troubleList}</ul>
      <p>
        <b>성과</b>
        {result}
      </p>
    </div>
  );
}

export default ProjectCard;
