import styled from 'styled-components';

import media from '../../../commons/styles/utils/media';

const CustomInput = styled.div`
  flex: 1;
  position: relative;
`;

const Input = styled.input`
  border: none;
  color: transparent;
  font-size: 20px;
  padding: var(--spacing-medium) 0;
  text-align: center;
  width: 100%;

  ${media.desktop`
    font-size: 24px;
    width: 135px;
  `}
`;

const TextGroup = styled.div`
  font-size: 14px;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);

  ${media.desktop`
    font-size: 16px;
  `}
`;

const InputMonth = styled.span`
  color: var(--colors-blue-gray-900);
  display: block;
  font-weight: 600;
  margin-bottom: var(--spacing-xxsmall);

  ${media.desktop`
    margin-bottom: var(--spacing-xsmall);
  `}
`;

const InputYear = styled.span`
  color: var(--colors-blue-gray-400);
`;

export { CustomInput, Input, TextGroup, InputMonth, InputYear };
