import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants/colors";

const GlobalStyles = createGlobalStyle`
    
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    html {
        font-size: 62.5%;
      
    }

    body {
        background: ${COLORS["dark-purple"]};
        color: inherit;

        span {
        color: ${COLORS.pink};
      }
  
    }
    ::-webkit-scrollbar-thumb {
        background: ${COLORS["grey-200"]};
        border-radius: 20px;
    }
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: ${COLORS["grey-600"]};
    }
`;

export default GlobalStyles;
