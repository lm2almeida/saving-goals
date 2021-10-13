import GlobalStyles from './commons/styles/GlobalStyles';
import Header from './components/Header';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <GlobalStyles />
      <div data-testid="greetings-container">Welcome to the Origin THA</div>
    </>
  );
}

export default App;
