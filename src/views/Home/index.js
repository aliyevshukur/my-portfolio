import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CustomButton } from "../../components";
import { NavContext } from "../../components/LeftNavigation/NavContext";
import Switch from "../../components/Switch/index.js";
import GithubLogo from "../../img/github.png";
import GmailLogo from "../../img/gmail.png";
import LinkedinLogo from "../../img/linkedin.png";
import WebDev from "../../img/web-dev.svg";

import {
  ContentHeader,
  ContentImage,
  ContentText,
  HomeAbout,
  HomeButtons,
  HomeContent,
  Name,
  ReferanceLink,
  ReferanceLinkImage,
  HomeWrapper as Wrapper,
} from "./style";
import { ThemeToggleContext } from "./themeContext";

export const Home = () => {
  const { navItems } = useContext(NavContext);
  const history = useHistory();
  const { isDarkMode, toggleTheme } = useContext(ThemeToggleContext);

  return (
    <Wrapper>
      <Switch onClick={toggleTheme} isDarkMode={isDarkMode} />

      <HomeAbout>
        <ContentHeader>
          Hi, I'm <Name>Shukur</Name> Aliyev
        </ContentHeader>
        <ContentText>
          I'm a junior front-end developer passionate about creating engaging
          and user-friendly web experiences.
        </ContentText>
        <ContentText>
          I focus on clean code and responsive design to bring ideas to life.
          Here, you’ll find a showcase of my projects, skills. Let’s collaborate
          and transform your vision into a stunning reality!
        </ContentText>
        <HomeButtons>
          <CustomButton
            title='See Projects'
            width='140px'
            height='55px'
            type='action'
            onClick={() => {
              history.push(navItems[1]?.to);
            }}
          />
          <ReferanceLink href='https://github.com/aliyevshukur' target='_blank'>
            <ReferanceLinkImage src={GithubLogo} alt='Github logo' />
          </ReferanceLink>
          <ReferanceLink
            href='https://www.linkedin.com/in/shukur-aliyev/'
            target='_blank'
          >
            <ReferanceLinkImage src={LinkedinLogo} alt='Linkedin logo' />
          </ReferanceLink>
          <Link to='/contact'>
            <ReferanceLinkImage src={GmailLogo} alt='Gmail logo' />
          </Link>
        </HomeButtons>
      </HomeAbout>
      <ContentImage src={WebDev} />
    </Wrapper>
  );
};
