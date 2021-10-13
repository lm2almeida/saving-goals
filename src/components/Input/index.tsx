import React from 'react';

import * as S from './styles';

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

type Button = {
  component: React.ReactElement;
  props: ButtonProps;
};

export type Buttons = {
  left?: Button;
  right?: Button;
};

interface InputProps {
  children: React.ReactNode;
  id: string;
  label: string;
  buttons?: Buttons;
}

function renderActionButton(
  { component, props: { disabled = false, onClick } }: Button,
  isLeft = false
) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <S.ButtonWrapper onClick={handleClick} disabled={disabled} isLeft={isLeft}>
      {component}
    </S.ButtonWrapper>
  );
}

function Input({ children, label, id, buttons }: InputProps): JSX.Element {
  return (
    <S.Container>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.InputWrapper>
        {buttons?.left && renderActionButton(buttons.left, true)}
        {children}
        {buttons?.right && renderActionButton(buttons.right)}
      </S.InputWrapper>
    </S.Container>
  );
}

export default Input;
