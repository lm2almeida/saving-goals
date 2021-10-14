import { useState } from 'react';

import InputWrapper from '../../InputWrapper';
import { ReactComponent as DollarSVG } from '../../../assets/icons/dollar-sign.svg';

import * as S from './styles';

interface AmountInputProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
}

function AmountInput({
  id,
  name,
  value,
  onChange,
}: AmountInputProps): JSX.Element {
  const [amount, setAmount] = useState(value);
  const button = {
    component: <DollarSVG />,
    props: {
      disabled: true,
      label: 'dollar sign',
    },
  };

  const handleChange = (value = '0') => {
    setAmount(value);
    onChange(value);
  };

  const handleBlur = () => {
    if (amount && amount.endsWith('.')) {
      setAmount((prevAmount) => prevAmount + '00');
    }
  };

  return (
    <InputWrapper id={id} label="Total amount" buttons={{ left: button }}>
      <S.Input
        data-testid="input-amount"
        id={id}
        name={name}
        value={amount}
        allowNegativeValue={false}
        onValueChange={(value) => handleChange(value)}
        onBlur={handleBlur}
        maxLength={7}
      />
    </InputWrapper>
  );
}

export default AmountInput;
