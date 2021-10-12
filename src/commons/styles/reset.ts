import { css } from 'styled-components';
import cssReset from 'styled-reset';

const reset = css`
  ${cssReset}

  :root {
    box-sizing: border-box;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  /* 👇 styles related to main container #root 👇 */
  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }
`;

export default reset;
