import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('returns the text', () => {
    const component = render(<App />);

    expect(component.getByTestId('greetings-container').innerHTML).toBe(
      'Welcome to the Origin THA'
    );
  });
});
