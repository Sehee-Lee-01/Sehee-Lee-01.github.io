import React from 'react';
import './style.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { SiGithub } from 'react-icons/si';
import { GrDeploy } from 'react-icons/gr';

const { useState } = React;

interface ProjectInfo {
  id: number;
  name: string;
  summary: string;
  date: string;
  scale: string;
  keyword: string[];
  category: string[];
  process: string[][];
  role: string[][];
  trouble: string[][];
  result?: string;
  url: string;
  deployUrl?: string;
}

type projectCardProps = {
  projectProps: ProjectInfo;
};

function ProjectCard({ projectProps }: projectCardProps) {
  const {
    id,
    name,
    summary,
    date,
    scale,
    role,
    keyword,
    category,
    process = [],
    trouble = [],
    result = '',
    url = '',
    deployUrl,
  } = projectProps;
  const [visibleSum, setVisibleSum] = useState(true);
  const keywordList = keyword.map((item) => <li key={item}>{item}</li>);
  const categoryList = category.map((item) => <li key={item}> {item}</li>);
  const processList = process.map((item) => (
    <>
      <li key={item[0]}>
        <span className="role-title">{item[0]}</span>
      </li>
      <span className="role-detail">{item[1]}</span>
    </>
  ));
  const roleList = role.map((item) => (
    <>
      <li key={item[0]}>
        <span className="role-title">{item[0]}</span>
      </li>
      <span className="role-detail">{item[1]}</span>
    </>
  ));
  const troubleList = trouble.map((item) => (
    <>
      <li key={item[0]}>
        <span className="trouble-title">{item[0]}</span>
      </li>
      <span className="trouble-detail">{item[1]}</span>
    </>
  ));
  return (
    <div
      className="inline-card project-card"
      role="presentation"
      id={`project-${id}`}
      key={id}
      onClick={() => setVisibleSum(!visibleSum)}
    >
      <div className="float-left">
        <ul className="card-list category">{categoryList}</ul>
        <div className="date">{date}</div>
        <div className="scale">{scale}</div>
      </div>
      {result === '' ? <br /> : <p className="result">{result}</p>}
      <h3 className="title">{name}</h3>
      <ul className="url-list">
        {deployUrl == null ? null : (
          <li className="url-list-element">
            <GrDeploy className="url-icon" />
            <a href={deployUrl}>{deployUrl}</a>
          </li>
        )}
        <li>
          <SiGithub className="url-icon" />
          <a href={url}>{url}</a>
        </li>
      </ul>
      <div className="summary">{summary}</div>
      <ul className="card-list">{keywordList}</ul>
      <br />
      <div className="description">
        {visibleSum ? (
          <IoIosArrowDown
            style={{
              fill: '#1e90ff',
            }}
          />
        ) : (
          <IoIosArrowUp
            style={{
              fill: '#1e90ff',
            }}
          />
        )}
      </div>

      {visibleSum ? null : (
        <>
          <div className="role list-title">🧩기능 개발</div>
          <ul className="mul-line-list role-list">{roleList}</ul>
          <div className="trouble list-title">🚨문제 해결 및 개선</div>
          <ul className="mul-line-list trouble-list">{troubleList}</ul>
          <div className="role list-title">👣 기타 사항</div>
          <ul className="mul-line-list role-list">{processList}</ul>
        </>
      )}
    </div>
  );
}

export default ProjectCard;
