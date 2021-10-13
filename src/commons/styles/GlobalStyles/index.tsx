import { createGlobalStyle } from 'styled-components';

import fonts from '../fonts';
import reset from '../reset';
import variables from '../variables';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${variables}
  ${fonts}
`;

export default GlobalStyles;
