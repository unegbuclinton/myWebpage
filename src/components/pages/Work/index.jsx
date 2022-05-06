import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../constants/colors";
import { FONTSIZES, FONTWEIGHTS } from "../../../constants/fonts";

function WorkPage() {
  return (
    <WorkWrapper>
      <h1 className="work-header">
        work (<span>'selected'</span> )
      </h1>
    </WorkWrapper>
  );
}

export default WorkPage;

const WorkWrapper = styled.div`
  margin: 0 2rem 0 calc(2rem + 1px);
  padding: 18.4rem 0 0;

  .work-header {
    color: ${COLORS.ivory};
    font-size:${FONTSIZES.xlarge};
    font-weight: ${FONTWEIGHTS.bold};

    span {
      color: ${COLORS.pink};
    }
  }
`;
