import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/logo-origin-black.svg';
import media from '../../commons/styles/utils/media';

const Header = styled.header`
  background-color: var(--colors-netrual-white);
  padding: var(--spacing-medium);

  ${media.desktop`
    padding: var(--spacing-xlarge);
  `}
`;

const Logo = styled(LogoSVG)`
  height: 24px;
  width: 75px;

  ${media.desktop`
    height: 32px;
    width: 100px;
  `}
`;

export { Header, Logo };
