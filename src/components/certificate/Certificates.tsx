import React from 'react';
import './style.css';
import CertificateCard from './CertificateCard';
import InfoJSON from '../../assets/json/certificate.json';

function Certificates() {
  const infoList = InfoJSON.items.map((item) => (
    <li key={item.id}>
      <CertificateCard certificateProps={item} />
    </li>
  ));

  return (
    <div className="certificates inline">
      <div id="certificate" className="bookmark" />
      <h2>자격증</h2>
      <ul className="mini-list certificate-list">{infoList}</ul>
    </div>
  );
}

export default Certificates;

export interface CertificateInfo {
  id: number;
  name: string;
  date: string;
  agency: string;
}
