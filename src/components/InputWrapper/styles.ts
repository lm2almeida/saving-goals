import styled from 'styled-components';

import media from '../../commons/styles/utils/media';

interface ButtonWrapperProps {
  disabled: boolean;
  isLeft: boolean;
}

const Container = styled.fieldset`
  &:not(:last-of-type) {
    margin-bottom: var(--spacing-medium);

    ${media.desktop`
      margin-bottom: 0;
      margin-right: var(--spacing-medium);
    `}
  }
`;

const InputWrapper = styled.div`
  border: var(--border-default);
  border-radius: var(--border-radius-small);
  display: flex;
  overflow: hidden;
  width: 100%;

  > * {
    border: none;
    background-color: var(--neutral-white);
  }
`;

const Label = styled.label`
  color: var(--colors-gray-900);
  display: block;
  font-size: 12px;
  margin-bottom: var(--spacing-xxsmall);

  ${media.desktop`
    font-size: 14px;
  `}
`;

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  --padding-left: ${({ isLeft }) =>
    isLeft ? 'var(--spacing-small)' : 'var(--spacing-xsmall)'};
  --padding-right: ${({ isLeft }) =>
    isLeft ? 'var(--spacing-xsmall)' : 'var(--spacing-small)'};
  padding: var(--spacing-small) var(--padding-right) var(--spacing-small)
    var(--padding-left);

  svg {
    --size: 24px;
    height: var(--size);
    width: var(--size);

    path {
      --fill: ${({ disabled }) =>
        disabled
          ? 'var(--colors-blue-gray-100)'
          : 'var(--colors-blue-gray-300)'};
      fill: var(--fill) !important;
    }
  }
`;

export { Container, InputWrapper, Label, ButtonWrapper };
