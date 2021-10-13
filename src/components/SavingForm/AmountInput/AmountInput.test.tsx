import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AmountInput from '.';

describe('components/SavingForm/AmountInput', () => {
  it('should only accepts numbers and not negatives', () => {
    render(<AmountInput id="test" name="test" />);

    const input = screen.getByRole('textbox', { name: /total amount/i });

    userEvent.type(input, 'hello test');

    expect(input).toHaveValue('');

    userEvent.type(input, '-30');

    expect(input).toHaveValue('30');
  });

  it('should add trailing zeros on blur', () => {
    render(<AmountInput id="test" name="test" />);

    const input = screen.getByRole('textbox', { name: /total amount/i });

    userEvent.type(input, '10.');
    input.blur();

    expect(input).toHaveValue('10.00');
  });
});
