import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FaBrain } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work with a range of technologies in AI, machine learning and full-stack development,
      focusing on building intelligent and practical solutions.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaBrain size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>AI / Machine Learning</ListTitle>
          <ListParagraph>
            Python, TensorFlow, Keras, CNN, Computer Vision, NLP
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript, React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End / Databases</ListTitle>
          <ListParagraph>
            Node.js, REST APIs, MongoDB, SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
