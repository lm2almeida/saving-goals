import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SavingForm from '.';

describe('components/SavingForm', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 9, 1));
  });

  it('should render correct results when user interacts', () => {
    render(<SavingForm />);

    const incrementButton = screen.getByLabelText(/increment month/i);
    const decrementButton = screen.getByLabelText(/decrement month/i);
    const reachGoalInput = screen.getByLabelText(/reach goal by/i);

    userEvent.type(screen.getByLabelText(/total amount/i), '10000');
    userEvent.click(incrementButton);
    userEvent.click(incrementButton);

    reachGoalInput.focus();
    userEvent.keyboard('[ArrowRight]');

    expect(screen.getByText(/january 2022/i)).toBeInTheDocument();

    userEvent.click(decrementButton);

    reachGoalInput.focus();
    userEvent.keyboard('[ArrowLeft]');

    expect(screen.getByText(/november 2021/i)).toBeInTheDocument();
    expect(screen.getByText(/\$5,000/i)).toBeInTheDocument();
    expect(screen.getByText(/2 monthly deposits/i)).toBeInTheDocument();
    expect(screen.getByText(/\$10,000/i)).toBeInTheDocument();
  });
});
