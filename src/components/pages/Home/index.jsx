import React, { useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "../../../constants/fonts";
import Button from "../../atoms/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomePageSection>
      <div data-aos="zoom-out" className="animation-container">
        <div className="home-circle"></div>
        <div className="home-inner__circle">
          <p>
            Welcome To My<span> Space!</span>
          </p>
        </div>
      </div>
      <HomeWrapper>
        <div className="home-header">
          <div data-aos="fade-down" className="primary-text">
            Clinton<span>.me( )</span>
          </div>
          <h2 ata-aos="fade-up" className="secondary-text">
            Unegbu Clinton Chigozie
          </h2>
          {/* <p className="sub--secondary__text"> Dynamic Frontend Developer </p> */}
          <div className="text-wrapper">
            <div className="static"> I am a </div>
            <ul className="dynamic">
              <li>
                <span> Developer</span>
              </li>
              <li>
                <span> Designer</span>
              </li>
            </ul>
          </div>

          <Button className="home-btn" pill>
            <Link
              className="btn-download"
              to="/files/resume.pdf"
              target="_blank"
              download
            >
              Download Resume
            </Link>
          </Button>
        </div>

        <HomeIntro>
          <div data-aos="fade-up" className="intro-text">
            Curriculum.<span>vitae( )</span>
          </div>
          <p data-aos="fade-down">
            I have two years experience working with, and learning web
            development technologies. Began to build using
            <span> Html and css</span>, which brought me to the big reveal of
            <span> javascript</span>.
          </p>
        </HomeIntro>

        <div data-aos="fade-down" className="active">
          Active (2020-2022)
        </div>

        <HomeIntro>
          <p>
            Couple of while later I began to build interesting projects using
            <span> React.</span> I have also Interned with Curacel. <br />
            This is me.
            <span>( )</span>
          </p>
        </HomeIntro>
      </HomeWrapper>
    </HomePageSection>
  );
}

export default HomePage;

const HomePageSection = styled.div`
  .animation-container {
    position: absolute;
    left: 11rem;

    .home-circle {
      position: relative;
      width: 18rem;
      height: 18rem;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top: 2px solid ${COLORS.pink};
      z-index: 2;
      animation: animate 4s linear infinite;

      &::before {
        content: "";
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        top: 1.2rem;
        right: 2.3rem;
        border-radius: 50%;
        background: ${COLORS.ivory};
      }
    }
    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .home-inner__circle {
      position: absolute;
      top: 0;
      width: 18rem;
      height: 18rem;
      border-radius: 50%;
      border: 2px solid ${COLORS.ivory};
      color: ${COLORS.ivory};

      p {
        margin-top: 70px;
        font-size: ${FONTSIZES.xlarge};
        font-weight: ${FONTWEIGHTS.bold};
        color: ${{ COLORS }};
        word-break: break-word;
        text-align: center;
      }
    }
  }
  &::before {
    content: "";
    width: 100%;
    height: 84vh;
    position: absolute;
    top: -141px;
    left: -5px;
    z-index: -3;
  }
  @media only screen and (min-width: 768px) {
    .animation-container {
      position: absolute;
      left: 27rem;
    }
  }

  @media only screen and (min-width: 1100px) {
    .animation-container {
      position: absolute;
      left: 50rem;
    }
  }
`;
const HomeWrapper = styled.div`
  margin: 0 2rem 0 calc(2rem + 1px);
  padding: 20.4rem 0 0;

  .home-header {
    margin-bottom: 10rem;

    .text-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: ${FONTSIZES.lg};
      margin-bottom: 2rem;

      .static {
        color: ${COLORS["pewter-blue"]};
      }
      .dynamic {
        line-height: 1.9rem;
        height: 1.9rem;
        overflow: hidden;

        li {
          list-style: none;
          position: relative;
          top: 0;
          animation: slide 6.5s steps(2) infinite;

          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            background: ${COLORS["dark-purple"]};
            border-left: 2px solid ${COLORS.pink};
            animation: typing 3s steps(19) infinite;
          }
        }
      }
      @keyframes slide {
        100% {
          top: -3.8rem;
        }
      }

      @keyframes typing {
        40%,
        60% {
          left: calc(100% + 3px);
        }
        100% {
          left: 0;
        }
      }
    }
    .home-btn {
      width: fit-content;
      padding: 1rem;
      background: ${COLORS.pink};

      .btn-download {
        text-decoration: none;
        color: ${COLORS.ivory};
        font-size: ${FONTSIZES.xsmall};
      }
    }

    .primary-text {
      font-size: ${FONTSIZES.xxlarge};
      font-weight: ${FONTWEIGHTS.bold};
      color: ${COLORS["ivory"]};
      margin-bottom: 3rem;

      span {
        color: ${COLORS.pink};
      }
    }

    .secondary-text {
      font-size: ${FONTSIZES.xlarge};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS["ivory"]};
      margin-bottom: 1.1rem;
    }
    /* .sub--secondary__text {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.normal};
      color: ${COLORS["ash-grey"]};
      margin-bottom: 2rem;
    } */
  }

  .active {
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS["ivory"]};
    margin-bottom: 12rem;
  }

  @media only screen and (min-width: 768px) {
    margin: 0 2rem 0 calc(6rem + 1px);

    .home-header {
      .home-btn {
        .btn-download {
          text-decoration: none;
          color: ${COLORS.ivory};
          font-size: ${FONTSIZES.small};
        }
      }
    }
  }

  @media only screen and (min-width: 1100px) {
    margin: 10rem 10rem 0 calc(24rem + 1px);
    padding: 24.4rem 0 0;
  }
`;

const HomeIntro = styled.div`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS["pewter-blue"]};
  word-spacing: 0.3rem;
  line-height: 3.8rem;
  margin-bottom: 12rem;

  .intro-text {
    font-size: ${FONTSIZES.xxlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS["ivory"]};
    margin-bottom: 5rem;
  }

  /* @media only screen and (min-width: 768px) {
  } */
  /* @media only screen and (min-width:1100px){
 
 
} */
`;
