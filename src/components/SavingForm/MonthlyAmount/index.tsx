import { MONTHS } from '../ReachDateInput/utils';

import { monthDiff } from './utils';
import * as S from './styles';

interface MonthlyAmountInterface {
  totalAmount: number;
  reachGoal: {
    year: number;
    month: number;
  };
}

function MonthlyAmount({
  totalAmount,
  reachGoal: { year, month },
}: MonthlyAmountInterface): JSX.Element {
  const today = new Date();
  const reachDate = new Date(year, month, 1);
  const totalMonths = monthDiff(today, reachDate) + 1;
  const amountPerMonth = (totalAmount / totalMonths).toLocaleString('default', {
    maximumFractionDigits: 0,
  });
  const formattedTotalAmount = totalAmount.toLocaleString('default');

  return (
    <S.Container>
      <S.AmountHeader>
        <S.Title>Monthly amount</S.Title>
        <S.TotalAmount>${amountPerMonth}</S.TotalAmount>
      </S.AmountHeader>
      <S.AmountInfo>
        <p>
          You&apos;re planning <strong>{totalMonths} monthly deposits</strong>{' '}
          to reach your <strong>${formattedTotalAmount}</strong> goal by{' '}
          <strong>
            {MONTHS[month]} {year}
          </strong>
          .
        </p>
      </S.AmountInfo>
    </S.Container>
  );
}

export default MonthlyAmount;
