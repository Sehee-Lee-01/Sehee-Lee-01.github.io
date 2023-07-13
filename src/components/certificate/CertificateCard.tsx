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
      <h3>{name}</h3>
      <b>날짜</b>
      {date} <br />
      <b>기관</b>
      {agency} <br />
    </div>
  );
}

export default CertificateCard;
