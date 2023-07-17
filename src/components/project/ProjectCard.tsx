import React from 'react';
import './style.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const { useState } = React;

interface ProjectInfo {
  id: number;
  name: string;
  summary: string;
  date: string;
  scale: string;
  keyword: string[];
  category: string[];
  role: string[][];
  trouble: string[][];
  result?: string;
  url: string;
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
    trouble,
    result = '',
    url,
  } = projectProps;
  const [visibleSum, setVisibleSum] = useState(true);
  const keywordList = keyword.map((item) => <li key={item}>{item}</li>);
  const categoryList = category.map((item) => <li key={item}> {item}</li>);
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
        <p className="date">{date}</p>
        <p className="scale">{scale}</p>
      </div>
      {result === '' ? <br /> : <p className="result">🏆 {result}</p>}
      <h3 className="title">
        <a href={url}>{name}🔗</a>
      </h3>
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
          {trouble.length === 0 ? null : (
            <>
              <div className="trouble list-title">🚨문제 해결 및 개선</div>
              <ul className="mul-line-list trouble-list">{troubleList}</ul>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default ProjectCard;
