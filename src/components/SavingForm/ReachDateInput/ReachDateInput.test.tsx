import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ReachDateInput from '.';

describe('components/SavingAmount/ReachDateInput', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 9, 1));
  });

  it('should not change value when typing', () => {
    render(<ReachDateInput id="test" name="test" />);

    const input = screen.getByLabelText(/reach goal by/i);

    userEvent.type(input, 'hello test');

    expect(input).toHaveValue('');
  });

  it('should not change value for past months', () => {
    render(<ReachDateInput id="test" name="test" />);

    userEvent.click(screen.getByLabelText(/decrement month/i));

    expect(screen.getByText(/october/i)).toBeInTheDocument();
  });

  it('should increment/decrement month and year', () => {
    render(<ReachDateInput id="test" name="test" />);

    const incrementButton = screen.getByLabelText(/increment month/i);
    const decrementButton = screen.getByLabelText(/decrement month/i);

    expect(screen.getByText(/october/i)).toBeInTheDocument();

    userEvent.click(incrementButton);

    expect(screen.getByText(/november/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/)).toBeInTheDocument();

    userEvent.click(incrementButton);
    userEvent.click(incrementButton);

    expect(screen.getByText(/january/i)).toBeInTheDocument();
    expect(screen.getByText(/2022/)).toBeInTheDocument();

    userEvent.click(decrementButton);

    expect(screen.getByText(/december/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/)).toBeInTheDocument();
  });

  it('should increment/decrement month and year using keyboard', () => {
    render(<ReachDateInput id="test" name="test" />);

    screen.getByLabelText(/reach goal by/i).focus();

    expect(screen.getByText(/october/i)).toBeInTheDocument();

    userEvent.keyboard('[ArrowRight]');

    expect(screen.getByText(/november/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/)).toBeInTheDocument();

    userEvent.keyboard('[ArrowRight]');
    userEvent.keyboard('[ArrowRight]');

    expect(screen.getByText(/january/i)).toBeInTheDocument();
    expect(screen.getByText(/2022/)).toBeInTheDocument();

    userEvent.keyboard('[ArrowLeft]');

    expect(screen.getByText(/december/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/)).toBeInTheDocument();
  });
});
