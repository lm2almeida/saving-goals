import SavingGoal from '../SavingGoal';

import * as S from './styles';

function SavingForm(): JSX.Element {
  return (
    <S.Form>
      <SavingGoal />
      <div data-testid="input-amount" />
      <div data-testid="input-reachDate" />
      <button>Confirm</button>
    </S.Form>
  );
}

export default SavingForm;
