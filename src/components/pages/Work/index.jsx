import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';
import { FONTSIZES, FONTWEIGHTS } from '../../../constants/fonts';
import project from '../../../img/project.png';
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
          <div className="work-item"></div>
          <p className="work-item__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            sit eveniet obcaecati incidunt voluptatem enim expedita inventore,
            tenetur nisi laborum.
          </p>
          <Button className="work-item__btn" auth>
            Demo
          </Button>
          <Button className="work-item__btn--github" auth>
            Github
          </Button>
        </div>
        <div className="work-item">
          <h2 className="work-item__header">Smart-Banking</h2>
          <div className="work-item"></div>
          <p className="work-item__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            sit eveniet obcaecati incidunt voluptatem enim expedita inventore,
            tenetur nisi laborum.
          </p>
          <Button className="work-item__btn" auth>
            Demo
          </Button>
          <Button className="work-item__btn--github" auth>
            Github
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
    font-size: ${FONTSIZES.xlarge};
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

    .work-item {
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
`;
