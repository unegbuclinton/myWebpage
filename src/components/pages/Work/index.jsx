import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';
import project from '../../../img/project.png';
import shop from '../../../img/shop.png';

import Task from '../../../img/Task.png';
import Button from '../../atoms/Button';

function WorkPage() {
  return (
    <WorkWrapper>
      <h1 className="work-header">
        work (<span>'selected'</span> )
      </h1>
      <WorkItemContainer>
        <div className="work-item">
          <h2 className="work-item__header">Smart-Banking</h2>
          <div className="work-item__1"></div>
          <p className="work-item__description">
            This is a static <span>Smart banking</span> web application built
            using react and styled component
          </p>
          <Button className="work-item__btn" auth>
            <a
              className="cta-btn"
              href="https://smartbank.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </Button>
          <Button className="work-item__btn--github" auth>
            <a
              className="cta-btn"
              href="https://github.com/unegbuclinton/Web-communication"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </div>
        <div className="work-item">
          <h2 className="work-item__header">E-commerce Store</h2>
          <div className="work-item__2"></div>
          <p className="work-item__description">
            An <span>E-store</span> application created with react and also used
            data froma a free API. With great functionality to add and remove
            from cart,sum up etc
          </p>
          <Button className="work-item__btn" auth>
            <a
              className="cta-btn"
              href="https://ccart.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </Button>
          <Button className="work-item__btn--github" auth>
            <a
              className="cta-btn"
              href="https://github.com/unegbuclinton/shopCart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </div>
        <div className="work-item">
          <h2 className="work-item__header">Task Tracker</h2>
          <div className="work-item__3"></div>
          <p className="work-item__description">
            A simple <span>Task Tracker</span> application with functionality to
            add and remove tasks and also toogle,created using react.
          </p>
          <Button className="work-item__btn" auth>
            <a
              className="cta-btn"
              href="https://github.com/unegbuclinton/TaskTracker"
              target="_blank"
              rel="noopener noreferrer"
              a
            >
              Demo
            </a>
          </Button>
          <Button className="work-item__btn--github" auth>
            <a
              className="cta-btn"
              href="https://trackt.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </div>
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

    .work-item__1 {
      width: 80%;
      height: 20rem;
      background-position: center;
      background-image: url(${project});
      background-size: cover;
      border-radius: 1rem;

      &:hover {
        transition: transform 0.3s ease-out;
        transform: scale(0.9);
      }
    }
    .work-item__2 {
      width: 80%;
      height: 20rem;
      background-position: center;
      background-image: url(${shop});
      background-size: cover;
      border-radius: 1rem;

      &:hover {
        transition: transform 0.3s ease-out;
        transform: scale(0.9);
      }
    }
    .work-item__3 {
      width: 80%;
      height: 20rem;
      background-position: center;
      background-image: url(${Task});
      background-size: cover;
      border-radius: 1rem;

      &:hover {
        transition: transform 0.3s ease-out;
        transform: scale(0.9);
      }
    }
    .work-item__header {
      font-size: ${FONTSIZES.base};
      color: ${COLORS.ivory};
      margin-bottom: 1.5rem;
    }

    .work-item__description {
      font-size: ${FONTSIZES.small};
      color: ${COLORS['pewter-blue']};
      margin: 1rem 0;
    }

    .work-item__btn {
      padding: 1rem;
      background: ${COLORS['light-purple']};
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
`;
