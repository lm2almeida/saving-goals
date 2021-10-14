import { useState } from 'react';

import InputWrapper from '../../InputWrapper';
import { ReactComponent as DollarSVG } from '../../../assets/icons/dollar-sign.svg';

import * as S from './styles';

interface AmountInputProps {
  id: string;
  name: string;
}

function AmountInput({ id, name }: AmountInputProps): JSX.Element {
  const [amount, setAmount] = useState<string | undefined>();
  const button = {
    component: <DollarSVG />,
    props: {
      disabled: true,
      label: 'dollar sign',
    },
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
        onValueChange={(value) => setAmount(value)}
        onBlur={handleBlur}
      />
    </InputWrapper>
  );
}

export default AmountInput;
