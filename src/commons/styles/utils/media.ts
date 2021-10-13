import { css, FlattenSimpleInterpolation } from 'styled-components';

import { DESKTOP_SIZE } from '../variables';

const media = {
  desktop: (content: TemplateStringsArray): FlattenSimpleInterpolation =>
    css`
      @media screen and (min-width: ${DESKTOP_SIZE}) {
        ${css(content)}
      }
    `,
};

export default media;
