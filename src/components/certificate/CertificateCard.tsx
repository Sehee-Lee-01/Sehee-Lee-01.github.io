import React from 'react';
import { CertificateInfo } from './Certificates';
import './style.css';

type certificateProps = {
  certificateProps: CertificateInfo;
};

function CertificateCard({ certificateProps }: certificateProps) {
  const { id, name, date, agency } = certificateProps;
  return (
    <div className="mini-card certificate-card">
      <h3 className="title">{name}</h3>
      <span className="date">{date}</span>
      <span className="agency">{agency}</span>
    </div>
  );
}

export default CertificateCard;
