import SavingGoal from './SavingGoal';
import AmountInput from './AmountInput';
import ReachDateInput from './ReachDateInput';
import MonthlyAmount from './MonthlyAmount';

import * as S from './styles';

function SavingForm(): JSX.Element {
  return (
    <S.Form>
      <SavingGoal />
      <S.InputsContainer>
        <AmountInput id="amount" name="amount" />
        <ReachDateInput id="reachDate" name="reachDate" />
      </S.InputsContainer>
      <MonthlyAmount totalAmount={0} reachGoal={{ year: 2021, month: 9 }} />
      <S.Button>Confirm</S.Button>
    </S.Form>
  );
}

export default SavingForm;
