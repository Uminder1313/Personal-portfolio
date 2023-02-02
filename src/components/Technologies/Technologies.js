import React from 'react';
import { DiFirebase, DiReact, DiSpark } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Technologies</SectionTitle>
 <SectionText>
  I've Worked in Various other technologies such as Python
  , HTML, CSS, Js etc. and will be best suited to undertake any task.
 </SectionText>
 <List>
  <ListItem>
    <DiReact size="3rem"/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
       Experience with <br />
       React Js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem"/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
       Experience with <br />
       Node Js and Databases
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiSpark size="3rem"/>
    <ListContainer>
      <ListTitle>Youtuber</ListTitle>
      <ListParagraph>
       Experience with <br />
       Youtube
      </ListParagraph>
    </ListContainer>
  </ListItem>
 </List>
 </Section>
);

export default Technologies;
