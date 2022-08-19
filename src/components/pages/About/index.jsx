import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomePageSection>
      <HomeWrapper>
        *
        <HomeIntro>
          <div data-aos="fade-up" className="intro-text">
            Curriculum.<span>vitae( )</span>
          </div>
          <p data-aos="fade-down">
            I am a Frontend developer with three years experience working with,
            and learning web development technologies. I work with
            <span> HTML, CSS, JAVASCRIPT, REACT,NodeJs, REDUX </span> Also
            comfortable using <span>UI</span> technologies, like{' '}
            <span> FIGMA</span> and it's plugins.
          </p>
        </HomeIntro>
        <div data-aos="fade-down" className="active">
          Active (2019-2022)
        </div>
        <HomeIntro>
          <p>
            Joined Zuri internship in 2021 where I learnt new web technologies,
            brainstormed and collaborated with other solid developers to solve
            problems and work on interesting projects. I also interned at
            curacel as a growth engineer in 2020. This is me.
          </p>
        </HomeIntro>
      </HomeWrapper>
    </HomePageSection>
  );
}

export default AboutPage;

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
        content: '';
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
    content: '';
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
  padding: 5.4rem 0 0;

  .home-header {
    margin-bottom: 10rem;

    .text-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: ${FONTSIZES.lg};
      margin-bottom: 2rem;

      .static {
        color: ${COLORS['pewter-blue']};
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
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            background: ${COLORS['dark-purple']};
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
      color: ${COLORS['ivory']};
      margin-bottom: 3rem;

      span {
        color: ${COLORS.pink};
      }
    }

    .secondary-text {
      font-size: ${FONTSIZES.xlarge};
      font-weight: ${FONTWEIGHTS.medium};
      color: ${COLORS['ivory']};
      margin-bottom: 1.1rem;
    }
    /* .sub--secondary__text {
      font-size: ${FONTSIZES.base};
      font-weight: ${FONTWEIGHTS.normal};
      color: ${COLORS['ash-grey']};
      margin-bottom: 2rem;
    } */
  }

  .active {
    font-size: ${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.medium};
    color: ${COLORS['ivory']};
    margin-bottom: 5rem;
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
    margin: 15rem 20rem 0 calc(35rem + 1px);
    padding: 0rem 0 0;
  }
`;

const HomeIntro = styled.div`
  font-size: ${FONTSIZES.xlarge};
  font-weight: ${FONTWEIGHTS.medium};
  color: ${COLORS['pewter-blue']};
  word-spacing: 0.3rem;
  line-height: 3.8rem;
  margin-bottom: 5rem;

  .intro-text {
    font-size: ${FONTSIZES.xxlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS['ivory']};
    margin-bottom: 5rem;
  }

  /* @media only screen and (min-width: 768px) {
  } */
  /* @media only screen and (min-width:1100px){


} */
`;
