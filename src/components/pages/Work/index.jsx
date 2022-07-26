import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';
import movie from '../../../img/movie.jpg';
import myPage from '../../../img/myPage.jpg';
import project from '../../../img/project.png';

import Task from '../../../img/Task.png';
import Button from '../../atoms/Button';

function WorkPage() {
  const works = [
    {
      name: 'MovieBooz',
      desc: 'MovieBooz is functional and responsive react application that allows you purchase movie tickets, add payment card,edit profle,add to favourite and other interesting functionalities. Also fetched its data from MovieDB endPoint With redux toolkit',
      netlifyHref: 'https://movieboomz.netlify.app/',
      githubHref: 'https://github.com/unegbuclinton/MovieApp',
      img: movie,
    },
    {
      name: 'My WebPage',
      desc: 'This is a simple functional react application that tells you about my work history,project and experience. ',
      netlifyHref: 'https://movieboomz.netlify.app/',
      githubHref: 'https://github.com/unegbuclinton/TaskTracker',
      img: myPage,
    },
    {
      name: 'Smart-Banking',
      desc: 'SmartBanking is a static web application built using react and styled component',
      netlifyHref: 'https://smartbank.netlify.app/',
      githubHref: 'https://github.com/unegbuclinton/Web-communication',
      img: project,
    },
    {
      name: 'Task Tracker',
      desc: 'Task Tracker is a simple tracking application that allow you add, remove and toggle task/events, using simple react hooks and react router',
      netlifyHref: 'https://trackt.netlify.app/',
      githubHref: 'https://github.com/unegbuclinton/TaskTracker',
      img: Task,
    },
  ];
  return (
    <WorkWrapper>
      <h1 className="work-header">
        work (<span>'selected'</span> )
      </h1>
      <WorkItemContainer>
        {works?.map(({ name, desc, netlifyHref, githubHref, img }) => (
          <div className="work-item">
            <h2 className="work-item__header">{name}</h2>
            <img src={img} alt="" className="img" />
            <p className="work-item__description">{desc}</p>
            <Button className="work-item__btn" auth>
              <a
                className="cta-btn"
                href={netlifyHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </Button>
            <Button className="work-item__btn--github" auth>
              <a
                className="cta-btn"
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>
          </div>
        ))}
      </WorkItemContainer>
    </WorkWrapper>
  );
}

export default WorkPage;

const WorkWrapper = styled.section`
  margin: 0 2rem 0 calc(2rem + 1px);
  padding: 5.4rem 0 0;

  .work-header {
    color: ${COLORS.ivory};
    font-size: ${FONTSIZES.xxlarge};
    font-weight: ${FONTWEIGHTS.bold};
    margin-bottom: 5rem;

    span {
      color: ${COLORS.pink};
    }
  }

  .work-item {
    width: 100%;
    margin-top: 2rem;
    padding: 1.5;

    .img {
      width: 100%;
      height: 20rem;

      background-position: center;
      background-size: cover;
      border-radius: 1rem;

      &:hover {
        transition: transform 0.3s ease-in-out;
        transform: scale(0.9);
      }
    }

    .work-item__header {
      font-size: ${FONTSIZES.base};
      color: ${COLORS.ivory};
      margin-bottom: 1.5rem;
    }

    .work-item__description {
      max-width: 80%;
      font-size: ${FONTSIZES.small};
      color: ${COLORS['pewter-blue']};
      margin: 1rem 0;
    }

    .work-item__btn {
      padding: 1rem;
      background: ${COLORS.pink};
    }
    .work-item__btn--github {
      padding: 1rem;
      background: ${COLORS['light-purple']};
      margin-left: 1.5rem;
    }
  }

  @media only screen and (min-width: 768px) {
    margin: 15rem 20rem 0 calc(35rem + 1px);
    padding: 0rem 0 0;
  }
`;
const WorkItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  .cta-btn {
    text-decoration: none;
    color: ${COLORS.white};
  }
  @media only screen and (min-width: 768px) {
    .work-item {
      .img {
        width: 80%;
        height: 50rem;
        background-position: center;
        background-size: cover;
        border-radius: 1rem;

        &:hover {
          transition: transform 0.3s ease-in-out;
          transform: scale(0.9);
        }
      }
    }
  }
`;
