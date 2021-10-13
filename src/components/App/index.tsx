import GlobalStyles from '../../commons/styles/GlobalStyles';
import Header from '../Header';
import SavingForm from '../SavingForm';

import * as S from './styles';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <GlobalStyles />
      <S.Main>
        <S.Title>
          Let&apos;s plan your <strong>saving goal</strong>.
        </S.Title>
        <SavingForm />
      </S.Main>
    </>
  );
}

export default App;
