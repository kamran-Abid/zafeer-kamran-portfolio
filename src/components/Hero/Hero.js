import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Zafeer Kamran Portfolio 
      </SectionTitle>
      <SectionText>
        The purpose of JavaScript Mastery is to help aspiring and established developers to take there development skills to the next level and build awesome apps.
      </SectionText>
      <Button onClick={()=>{ window.location = 'https://www.upwork.com/freelancers/~01443dbb00255b2e42'}}>Learn more </Button>
    </LeftSection> 
  </Section>
);

export default Hero;