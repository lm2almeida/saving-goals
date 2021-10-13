import { render, screen } from '@testing-library/react';

import SavingForm from '.';

describe('components/SavingForm', () => {
  it('should render correctly', () => {
    render(<SavingForm />);

    expect(screen.getByTestId('saving-goal')).toBeInTheDocument();
    expect(screen.getByTestId('input-amount')).toBeInTheDocument();
    expect(screen.getByTestId('input-reachDate')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /confirm/i })
    ).toBeInTheDocument();
  });
});
