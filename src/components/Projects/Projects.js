import React from 'react';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  const aimlProjects = projects.filter((p) => p.type === 'aiml');
  const webProjects = projects.filter((p) => p.type === 'web');

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>AIML Projects</SectionTitle>

      {/* AIML PROJECTS */}
      <GridContainer>
        {aimlProjects.map((p, i) => (
          <BlogCard key={i}>
            <Img src={p.image} alt={p.title} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>

            <CardInfo className="card-info">{p.description}</CardInfo>

            <UtilityList>
              {p.source && (
                <ExternalLinks href={p.source} target="_blank" rel="noreferrer">
                  Code
                </ExternalLinks>
              )}
              {p.visit && (
                <ExternalLinks href={p.visit} target="_blank" rel="noreferrer">
                  Live Demo
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>

      {/* FULL-STACK PROJECTS */}
      <SectionTitle style={{ marginTop: '3rem' }} main>
        Full-Stack Projects
      </SectionTitle>

      <GridContainer>
        {webProjects.map((p, i) => (
          <BlogCard key={i}>
            <Img src={p.image} alt={p.title} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>

            <CardInfo className="card-info">{p.description}</CardInfo>

            <UtilityList>
              {p.source && (
                <ExternalLinks href={p.source} target="_blank" rel="noreferrer">
                  Code
                </ExternalLinks>
              )}
              {p.visit && (
                <ExternalLinks href={p.visit} target="_blank" rel="noreferrer">
                  Live Demo
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
