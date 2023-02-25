import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+923040550911">+92 304 055 0911</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:kamran.abid5er@gmail.com">
            kamran.abid5er@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>skype</LinkTitle>
          <LinkItem href="https://join.skype.com/invite/X516f8iRLqM2">
            zkabid911
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <div>
        <SocialContainer>
          <Slogan>Entertaining all web development projects.</Slogan>
        </SocialContainer>
        <SocialIcons href="https://github.com/kamran-Abid">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/zafeer-kamran-abid-074308196/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/zkabid247/">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
