import React from 'react';
import { DiFirebase, DiMozilla, DiReact, DiZend, DiJavascript, DiDotnet } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm working on multiple technologies of Web Designing and Development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle >Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle >Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js with Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle >Database</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB and Ms SQL Server
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDotnet size="3rem" />
        <ListContainer>
          <ListTitle >.NET Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            ASP.NET
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiMozilla size="3rem" />
        <ListContainer>
          <ListTitle >Web API</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and ASP.NET
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <DiZend size="3rem" />
        <ListContainer>
          <ListTitle >UI / UX Design</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
