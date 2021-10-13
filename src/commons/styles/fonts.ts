import { css } from 'styled-components';

const fonts = css`
  /* rubik-500 - latin */
  @font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 500;
    src: local('Rubik'),
      url('./fonts/rubik/rubik-v14-latin-500.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/rubik/rubik-v14-latin-500.woff2')
        format('woff2'),
      /* Super Modern Browsers */ url('./fonts/rubik/rubik-v14-latin-500.woff')
        format('woff'),
      /* Modern Browsers */ url('./fonts/rubik/rubik-v14-latin-500.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('./fonts/rubik/rubik-v14-latin-500.svg#Rubik') format('svg'); /* Legacy iOS */
  }

  /* work-sans-regular - latin */
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Work Sans'),
      url('./fonts/work-sans/work-sans-v11-latin-regular.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/work-sans/work-sans-v11-latin-regular.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('./fonts/work-sans/work-sans-v11-latin-regular.woff') format('woff'),
      /* Modern Browsers */
        url('./fonts/work-sans/work-sans-v11-latin-regular.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('./fonts/work-sans/work-sans-v11-latin-regular.svg#WorkSans')
        format('svg'); /* Legacy iOS */
  }

  /* work-sans-600 - latin */
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    src: local('Work Sans'),
      url('./fonts/work-sans/work-sans-v11-latin-600.eot?#iefix')
        format('embedded-opentype'),
      /* IE6-IE8 */ url('./fonts/work-sans/work-sans-v11-latin-600.woff2')
        format('woff2'),
      /* Super Modern Browsers */
        url('./fonts/work-sans/work-sans-v11-latin-600.woff') format('woff'),
      /* Modern Browsers */ url('./fonts/work-sans/work-sans-v11-latin-600.ttf')
        format('truetype'),
      /* Safari, Android, iOS */
        url('./fonts/work-sans/work-sans-v11-latin-600.svg#WorkSans')
        format('svg'); /* Legacy iOS */
  }

  body {
    --font-family-default: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    --font-family-work-sans: 'Work Sans', var(--font-family-default);
    --font-family-rubik: 'Rubik', var(--font-family-default);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: var(--font-family-work-sans);
  }
`;

export default fonts;
