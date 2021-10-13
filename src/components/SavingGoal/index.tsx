import { ReactComponent as HouseSVG } from '../../assets/icons/buy-a-house.svg';

import * as S from './styles';

function SavingGoal(): JSX.Element {
  return (
    <S.Container data-testid="saving-goal">
      <HouseSVG />
      <S.TitleContainer>
        <S.Title>Buy a house</S.Title>
        <S.Subtitle>Saving goal</S.Subtitle>
      </S.TitleContainer>
    </S.Container>
  );
}

export default SavingGoal;
