import { cssVar, rgba } from 'polished';
import { css } from 'styled-components';

const variables = css`
  :root {
    --colors-blue-gray-10: #f4f8fa;
    --colors-blue-gray-50: #e9eef2;
    --colors-blue-gray-100: #cbd5dc;
    --colors-blue-gray-400: #708797;
    --colors-blue-gray-600: #4d6475;
    --colors-blue-gray-900: #1e2a32;
    --colors-brand-primary: #1b31a8;
    --colors-brand-secondary: #0079ff;
    --colors-neutral-white: #ffffff;

    --spacing-small: 12px;
    --spacing-medium: 16px;
    --spacing-large: 20px;
    --spacing-xlarge: 24px;
    --spacing-xxlarge: 32px;
    --spacing-xxxlarge: 48px;

    --border-radius-small: 4px;
    --border-radius-large: 8px;

    --shadow: 0px 16px 32px
      ${rgba(cssVar('--colors-blue-gray-900', '#1e2a32'), 0.08)};
  }
`;

export default variables;
