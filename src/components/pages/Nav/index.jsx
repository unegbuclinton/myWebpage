import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-scroll';
import styled from 'styled-components';
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

  const ChangeNavbar = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', ChangeNavbar);

  const buttons = [
    {
      name: 'Clinton',
      icon: <DPIconProfile className="dpi-icon" />,
      to: 'home',
    },
    {
      name: 'Work',
      icon: <DPIconWorks className="dpi-icon" />,
      to: 'work',
    },
    {
      name: 'About',
      icon: <DPIconAbout className="dpi-icon" />,
      to: 'about',
    },
    {
      name: 'Contact',
      icon: <DPIconContact className="dpi-icon" />,
      to: 'contact',
    },
  ];

  return (
    <NavWrapper navbar={navbar}>
      <MobileNavItems>
        {buttons.map(({ name, icon, to }, index) => (
          <MobileTab key={index} className="mobile-nav__btn">
            <Link
              className="active-link"
              activeClass="active"
              to={to}
              spy={true}
              smooth={true}
            >
              <span>{icon}</span>
              {name}
            </Link>
          </MobileTab>
        ))}
      </MobileNavItems>
      <NavContainer>
        <div>
          <img src={img} alt="MyLogo" className="header" />
        </div>

        <NavMenu navbar={navbar}>
          <Link spy={true} activeClass="active-class" smooth={true} to="home">
            .clinton()
          </Link>
          <Link spy={true} activeClass="active-" smooth={true} to="work">
            .Works()
          </Link>
          <Link spy={true} activeClass="active-" smooth={true} to="about">
            .about()
          </Link>
          <Link spy={true} activeClass="active-" smooth={true} to="contact">
            .contact()
          </Link>

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

  .active-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .active {
    font-weight: ${FONTWEIGHTS.bold};
    cursor: default;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      left: 0;
      transition: width 0.3s;
      border-top: 3px solid ${COLORS.pink};
    }
  }
  @media screen and (min-width: 1100px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const MobileTab = styled.li`
  list-style: none;
  position: relative;
  background: transparent;
  color: ${COLORS.ivory};
  width: 10rem;
  padding: 1.2rem;
  border: none;
  font-size: ${FONTSIZES.small};
`;
const NavMenu = styled.div`
  cursor: pointer;
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
