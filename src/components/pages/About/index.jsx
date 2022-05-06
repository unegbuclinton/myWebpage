import React, { useEffect } from "react";
import styled from "styled-components";
import img from "../../../img/poort.png";
import { COLORS } from "../../../constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "../../../constants/fonts";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";

function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AboutWrapper>
      <AboutSection>
        <div data-aos="fade-up" className="about-header">
          About ( )
        </div>

        <p data-aos="fade-down" className="description">
          I am a creative frontend developer,with intensive knowledge of web
          development and technologies, from Nigeria. Based in Lagos.
        </p>

        <div data-aos="fade-left" className="media-icons">
          <a
            href="https://github.com/unegbuclinton"
            rel="noreferrer noopener"
            target="_blank"
            className="media-icon"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://twitter.com/nwa_achina"
            rel="noreferrer noopener"
            target="_blank"
            className="media-icon"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="http://linkedin.com/in/unegbu-clinton-062b181b3"
            rel="noreferrer noopener"
            target="_blank"
            className="media-icon"
          >
            <AiFillLinkedin />
          </a>
        </div>

        <Button className="about-btn">
          <Link
            className="btn-download"
            to="/files/resume.pdf"
            target="_blank"
            download
          >
            Download Resume
          </Link>
        </Button>

        <div className="about-content">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="about-content__header"
          >
            Main Skills
          </h1>
          <p data-aos="fade-left" className="about-content__text">
            Frontend Development,
            <br /> UI/ UX designer
          </p>

          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="about-content__header"
          >
            Tools/Years
          </h1>
          <div data-aos="fade-left">
            <p className="about-content__text">HTML /3 </p>
            <p className="about-content__text">CSS /3 </p>
            <p className="about-content__text">JAVASCRIPT /1+ </p>
            <p className="about-content__text"> REACT /1+ </p>
          </div>

          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="about-content__header"
          >
            Language
          </h1>
          <p data-aos="fade-left" className="about-content__text">
            English Language
          </p>

          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="about-content__header"
          >
            Also Busy With
          </h1>
          <div>
            <p className="about-content__text"> Playing Chess</p>
            <p className="about-content__text">Watching Movies</p>
            <p className="about-content__text">Video games</p>
          </div>
        </div>
      </AboutSection>
    </AboutWrapper>
  );
}

export default AboutPage;

const AboutWrapper = styled.div`
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 80vh;
    position: absolute;
    top: -127px;
    z-index: -3;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        to bottom,
        rgba(33, 22, 62, 0) 24%,
        rgba(22, 15, 41, 1)
      ),
      url(${img});
  }

  @media only screen and (min-width: 768px) {
    padding: 50.4rem 0 0;
    overflow: hidden;
    &::before {
      content: "";
      width: 100%;
      height: 80vh;
      position: absolute;
      top: -127px;
      z-index: -3;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      background-image: linear-gradient(
          to bottom,
          rgba(33, 22, 62, 0) 24%,
          rgba(22, 15, 41, 1)
        ),
        url(${img});
    }
  }
  @media only screen and (min-width: 1100px) {
    padding: 25.4rem 0 0;
    overflow: hidden;
    &::before {
      content: "";
      display: block;
      width: 40%;
      height: 100%;
      position: fixed;

      left: 0;
      top: 0;
      z-index: -3;
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: cover;
      background-image: linear-gradient(
          to bottom,
          rgba(33, 22, 62, 0) 24%,
          rgba(22, 15, 41, 1)
        ),
        url(${img});
    }
  }
`;
const AboutSection = styled.div`
  margin: 0 2rem 0 calc(2rem + 1px);
  padding: 18.4rem 0 0;

  .about-header {
    font-size: ${FONTSIZES.xxlarge};
    font-weight: ${FONTWEIGHTS.bold};
    color: ${COLORS["ivory"]};
    margin-bottom: 3rem;
  }

  .description {
    font-size: ${FONTSIZES.small};
    color: ${COLORS["pewter-blue"]};
    line-height: 2.5rem;
  }

  .about-btn {
    display: block;
    width: fit-content;
    padding: 1rem;
    text-align: center;
    margin: 2rem auto;
    border-radius: 3px;

    .btn-download {
      text-decoration: none;
      color: ${COLORS.ivory};
      font-size: ${FONTSIZES.xsmall};
    }
  }
  .media-icons {
    display: flex;
    justify-content: center;
    gap: 1.6rem;

    .media-icon {
      color: ${COLORS.ivory};
      font-size: ${FONTSIZES.xxlarge};
    }
  }

  .about-content {
    &__header {
      color: ${COLORS.pink};
      font-size: ${FONTSIZES.lg};
      font-weight: ${FONTWEIGHTS.medium};
      margin-bottom: 2rem;
    }

    &__text {
      color: ${COLORS["pewter-blue"]};
      font-size: ${FONTSIZES.small};
      font-weight: ${FONTWEIGHTS.normal};
      margin-bottom: 2rem;
    }
  }
  @media only screen and (min-width: 768px) {
    margin: 0 2rem 0 calc(6rem + 1px);
    padding: 10.4rem 0 0;

    .description {
      font-size: ${FONTSIZES.xlarge};
      margin-bottom: 5rem;
    }

    .about-content {
      &__header {
        color: ${COLORS.pink};
        font-size: ${FONTSIZES.xlarge};
        font-weight: ${FONTWEIGHTS.medium};
        margin-bottom: 2rem;
      }

      &__text {
        color: ${COLORS["pewter-blue"]};
        font-size: ${FONTSIZES.base};
        font-weight: ${FONTWEIGHTS.normal};
        margin-bottom: 2rem;
      }
    }

    .about-btn {
      .btn-download {
        font-size: ${FONTSIZES.base};
      }
    }

    .about-header {
      font-size: ${FONTSIZES["logo-large"]};
    }
  }

  @media only screen and (min-width: 1100px) {
    margin: 0rem 20rem 0 calc(24rem + 1px);
    padding: 0rem 0 0;
  }
`;
