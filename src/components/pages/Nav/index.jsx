import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';
import img from '../../../img/logo.png';
import {
  DPIconAbout,
  DPIconContact,
  DPIconProfile,
  DPIconWorks,
} from '../../Icons';

function NavHeader() {
  const [navbar, setNavbar] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  console.log(activeTab);

  const ChangeNavbar = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', ChangeNavbar);

  const buttons = [
    { name: 'Clinton', icon: <DPIconProfile /> },
    { name: 'Work', icon: <DPIconWorks /> },
    { name: 'About', icon: <DPIconAbout /> },
    { name: 'Contact', icon: <DPIconContact /> },
  ];
  return (
    <NavWrapper navbar={navbar}>
      <MobileNavItems>
        {buttons.map(({ name, icon }, index) => (
          <MobileTab
            key={index}
            className="mobile-nav__btn"
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            <span>{icon}</span>
            {name}
          </MobileTab>
        ))}
      </MobileNavItems>
      <NavContainer>
        <div>
          <img src={img} alt="MyLogo" className="header" />
        </div>

        <NavMenu navbar={navbar}>
          <Link to="/">.clinton()</Link>
          <Link to="/work">.Works()</Link>
          <Link to="/about">.about()</Link>
          <Link to="/contact">.contact()</Link>

          <div className="media-icons">
            <a
              href="http://linkedin.com/in/unegbu-clinton-062b181b3"
              rel="noreferrer noopener"
              target="_blank"
              className="media-icon"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/unegbuclinton"
              rel="noreferrer noopener"
              target="_blank"
              className="media-icon"
            >
              <AiFillGithub />
            </a>
          </div>
        </NavMenu>
      </NavContainer>
    </NavWrapper>
  );
}

export default NavHeader;

const NavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: ${COLORS['light-purple']};
  transition: all 0.3s ease-in-out;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    position: sticky;
    top: 0;
    height: 6rem;
    padding: 1.5rem;
    background: ${({ navbar }) => (navbar ? COLORS.ivory : 'transparent')};
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header {
    display: none;
    width: 2rem;
  }
  @media only screen and (min-width: 768px) {
    .header {
      display: block;
      width: 3rem;
    }
  }
  @media only screen and (min-width: 1100px) {
    .header {
      display: block;
      margin-top: -2rem;
      width: 3rem;
    }
  }
`;

const MobileNavItems = styled.div`
  display: flex;

  @media screen and (min-width: 1100px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const MobileTab = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  color: ${COLORS.ivory};
  width: 10rem;
  padding: 1.2rem;
  border: none;
  font-size: ${FONTSIZES.small};

  ${({ active }) =>
    active &&
    css`
      font-weight: ${FONTWEIGHTS.bold};
      
      cursor: default;
      &::after {
        content: '';
         position: absolute;
          top: 0;
          width: 100%;
          left: 0;
        transition:width 0.3s;
        border-top 3px solid ${COLORS.pink};
      }
    `};
`;
const NavMenu = styled.div`
  display: none;

  @media screen and (min-width: 1100px) {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    z-index: 10;
    margin-top: -1.5rem;

    a {
      font-size: ${FONTSIZES.xsmall};
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ navbar }) => (navbar ? COLORS['dark-purple'] : COLORS.ivory)};
      text-decoration: none;
      transition: color 0.3s linear;

      &:hover {
        color: ${COLORS['dark-slay-gray']};
      }
    }
    .media-icons {
      display: flex;
      gap: 1.6rem;
      margin-top: 0.5rem;
      .media-icon {
        font-size: ${FONTSIZES.small};
      }
    }
  }
`;
// const Hamburger = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ navbar }) =>
//       navbar ? COLORS['dark-purple'] : COLORS.ivory};
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;
//   }

//   @media only screen and (min-width: 768px) {
//     height: 2.2rem;
//     display: none;
//   }
// `;

// const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   align-items: center;
//   justify-content: center;
//   background: ${COLORS['dark-purple']};
//   opacity: 0.95;
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease-in-out;
//   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

//   a {
//     font-size: ${FONTSIZES.xxlarge};
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: ${COLORS.ivory};
//     text-decoration: none;
//     transition: color 0.3s linear;

//     &:hover {
//       color: ${COLORS['dark-slay-gray']};
//     }
//   }
//   .media-icons {
//     display: flex;
//     gap: 1.6rem;
//   }
// `;
