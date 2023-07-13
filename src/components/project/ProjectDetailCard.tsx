import React from 'react';
import './style.css';

interface ProjectDetailInfo {
  id: number;
  name: string;
  summary: string;
  date: string;
  scale: string;
  role: string[];
  keyword: string[];
  trouble: string[];
  result: string;
  url: string;
}

type projectDetailCardProps = {
  projectDetailProps: ProjectDetailInfo;
};

function ProjectDetailCard({ projectDetailProps }: projectDetailCardProps) {
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
  } = projectDetailProps;

  const roleList = role.map((item) => <li key={item}>{item}</li>);
  const keywordList = keyword.map((item) => <li key={item}>{item}</li>);
  const troubleList = trouble.map((item) => <li key={item}>{item}</li>);
  return (
    <div className="inline-card project-card">
      <h3 className="title">{name}</h3>
      <a href={url}>🔗 Github</a>
      <div className="float-left">
        <p className="date">{date}</p>
        <p className="scale">{scale}</p>
      </div>

      <div className="summary">{summary}</div>
      <ul className="card-list">{keywordList}</ul>
      <br />
      <ul className="mul-line-list">{roleList}</ul>
      <ul className="mul-line-list trouble-list">{troubleList}</ul>
      <p>🏆 {result}</p>
    </div>
  );
}

export default ProjectDetailCard;
