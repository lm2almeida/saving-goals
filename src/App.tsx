import GlobalStyles from './commons/styles/GlobalStyles';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <div data-testid="greetings-container">Welcome to the Origin THA</div>
    </>
  );
}

export default App;
