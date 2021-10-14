import { useState } from 'react';

import SavingGoal from './SavingGoal';
import AmountInput from './AmountInput';
import ReachDateInput from './ReachDateInput';
import MonthlyAmount from './MonthlyAmount';

import * as S from './styles';

function SavingForm(): JSX.Element {
  const today = new Date();
  const [amount, setAmount] = useState('0');
  const [reachDate, setReachDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  return (
    <S.Form>
      <SavingGoal />
      <S.InputsContainer>
        <AmountInput
          id="amount"
          name="amount"
          value={amount}
          onChange={setAmount}
        />
        <ReachDateInput
          id="reachDate"
          name="reachDate"
          onChange={setReachDate}
        />
      </S.InputsContainer>
      <MonthlyAmount totalAmount={+amount} reachGoal={reachDate} />
      <S.Button>Confirm</S.Button>
    </S.Form>
  );
}

export default SavingForm;
