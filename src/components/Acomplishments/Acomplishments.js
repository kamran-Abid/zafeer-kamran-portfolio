import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 40, text: "Open Source Projects" },
  { number: 100, text: "Students" },
  { number: 190, text: "Github Followers" },
  { number: 50, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section id='acomplishments'>
    <SectionTitle>Personal Achievement</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
