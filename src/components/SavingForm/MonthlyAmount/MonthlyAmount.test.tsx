import { render, screen } from '@testing-library/react';

import MonthlyAmount from '.';

describe('components/SavingForm/MonthlyAmount', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 9, 1));
  });

  it('should render formatted values', () => {
    render(
      <MonthlyAmount totalAmount={12000} reachGoal={{ year: 2022, month: 9 }} />
    );

    expect(screen.getByText(/\$923/i)).toBeInTheDocument();
    expect(screen.getByText(/13 monthly deposits/i)).toBeInTheDocument();
    expect(screen.getByText(/\$12,000/i)).toBeInTheDocument();
  });
});
