import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import img from "../../../img/logo.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FONTSIZES } from "../../../constants/fonts";

function NavHeader() {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleHamburger = () => {
    setOpen((prev) => !prev);
  };

  const toggleCloseHamburger = () => {
    setOpen(false);
  };

  const ChangeNavbar = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", ChangeNavbar);

  return (
    <NavWrapper navbar={navbar}>
      <NavContainer>
        <div>
          <img src={img} alt="MyLogo" className="header" />
        </div>

        <NavMenu navbar={navbar}>
          <Link to="/" onClick={toggleCloseHamburger}>
            .clinton()
          </Link>
          <Link to="/work" onClick={toggleCloseHamburger}>
            .Works()
          </Link>
          <Link to="/about" onClick={toggleCloseHamburger}>
            .about()
          </Link>
          <Link to="/contact" onClick={toggleCloseHamburger}>
            .contact()
          </Link>

          <div className="media-icons" onClick={toggleCloseHamburger}>
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
        <Hamburger onClick={toggleHamburger} navbar={navbar}>
          <div />
          <div />
          <div />
        </Hamburger>
      </NavContainer>

      <StyledMenu open={open}>
        <Link to="/" onClick={toggleCloseHamburger}>
          clinton();
        </Link>
        <Link to="/work" onClick={toggleCloseHamburger}>
          Works();
        </Link>
        <Link to="/about" onClick={toggleCloseHamburger}>
          about();
        </Link>
        <Link to="/contact" onClick={toggleCloseHamburger}>
          contact();
        </Link>

        <div className="media-icons" onClick={toggleCloseHamburger}>
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
      </StyledMenu>
    </NavWrapper>
  );
}

export default NavHeader;

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  padding: 1.5rem;
  background: ${({ navbar }) => (navbar ? COLORS.ivory : "transparent")};
  transition: all 0.3s ease-in-out;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    height: 6rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header {
    width: 2rem;
  }
  @media only screen and (min-width: 768px) {
    .header {
      width: 3rem;
    }
  }
  @media only screen and (min-width: 1100px) {
    .header {
      margin-top: -2rem;
    }
  }
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
      color: ${({ navbar }) => (navbar ? COLORS["dark-purple"] : COLORS.ivory)};
      text-decoration: none;
      transition: color 0.3s linear;

      &:hover {
        color: ${COLORS["dark-slay-gray"]};
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
const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ navbar }) =>
      navbar ? COLORS["dark-purple"] : COLORS.ivory};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }

  @media only screen and (min-width: 768px) {
    height: 2.2rem;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: ${COLORS["dark-purple"]};
  opacity: 0.95;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  a {
    font-size: ${FONTSIZES.xxlarge};
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${COLORS.ivory};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${COLORS["dark-slay-gray"]};
    }
  }
  .media-icons {
    display: flex;
    gap: 1.6rem;
  }
`;
