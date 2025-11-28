import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, CertImage, CertTitle } from './AcomplishmentsStyles';

const certificates = [
  {
    title: 'Applied Neural Networks & Deep Learning – Infosys Springboard',
    image: '/images/cert-deeplearning.png',
    link: '#',
  },
  {
    title: 'Database Management Systems1 – Infosys Springboard',
    image: '/images/cert-dbms1.png',
    link: '#',
  },
  {
    title: 'Database Management Systems2 – Infosys Springboard',
    image: '/images/cert-dbms2.png',
    link: '#',
  },
  {
    title: 'Natural Language Processing – Infosys Springboard',
    image: '/images/cert-nlp.png',
    link: '#',
  },
  {
    title: 'Linux Fundamentals – Infosys Springboard',
    image: '/images/cert-linux.png',
    link: '#',
  },
  {
    title: 'ICAT  – ICAT Certifation',
    image: '/images/cert-ICAT.png',
    link: '#',
  },
];

const Acomplishments = () => (
  <Section id="certificates">
    <SectionDivider />
    <SectionTitle>Certificates</SectionTitle>

    <Boxes>
      {certificates.map((cert, index) => (
        <Box
          key={index}
          onClick={() => cert.link && window.open(cert.link, '_blank')}
        >
          <CertImage src={cert.image} alt={cert.title} />
          <CertTitle>{cert.title}</CertTitle>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
