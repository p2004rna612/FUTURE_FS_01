// src/components/Hero/Hero.js
import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {
  LeftSection,
  ProfileImage,
  NameText,
  Tagline,
  ButtonWrapper,
} from './HeroStyles';

const Hero = () => {
  const handleResumeClick = () => {
    // resume.pdf should be inside /public
    window.open('/resume.pdf', '_blank');
  };

  return (
    <Section row nopadding style={{ paddingTop: '0.2rem' }}>
      <LeftSection>
        <SectionTitle
          main
          center
          style={{ fontSize: '30px', marginBottom: '0.4rem' }}
        >
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>

        <ProfileImage src="/images/profile.jpeg" alt="Poornapragna GB" />

        <NameText>Poornapragna GB</NameText>

        <Tagline>
          Exploring AI. Engineering Solutions. Creating Impact.
        </Tagline>

        <ButtonWrapper>
          <Button onClick={handleResumeClick}>Visit My Resume</Button>
        </ButtonWrapper>
      </LeftSection>
    </Section>
  );
};

export default Hero;
