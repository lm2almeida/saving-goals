import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputWrapper, { Buttons } from '.';

function setup(buttons?: Buttons): RenderResult {
  return render(
    <InputWrapper id="test" label="test" buttons={buttons || {}}>
      <input id="test" name="test" />
    </InputWrapper>
  );
}

describe('components/InputWrapper', () => {
  it('should render component', () => {
    const { asFragment } = setup();

    expect(screen.getByText(/test/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render buttons and call onClick', () => {
    const mockLeftClick = jest.fn();
    const mockRightClick = jest.fn();
    const buttons = {
      left: {
        component: <span>click left</span>,
        props: {
          onClick: mockLeftClick,
        },
      },
      right: {
        component: <span>click right</span>,
        props: {
          onClick: mockRightClick,
        },
      },
    };

    setup(buttons);

    userEvent.click(screen.getByRole('button', { name: /click left/ }));
    userEvent.click(screen.getByRole('button', { name: /click right/ }));

    expect(mockLeftClick).toHaveBeenCalled();
    expect(mockRightClick).toHaveBeenCalled();
  });

  it('should render buttons and call not onClick if disabled or no onClick', () => {
    const mockLeftClick = jest.fn();
    const mockRightClick = jest.fn();
    const buttons = {
      left: {
        component: <span>click left</span>,
        props: {},
      },
      right: {
        component: <span>click right</span>,
        props: {
          onClick: mockRightClick,
          disabled: true,
        },
      },
    };

    setup(buttons);

    userEvent.click(screen.getByRole('button', { name: /click left/ }));
    userEvent.click(screen.getByRole('button', { name: /click right/ }));

    expect(mockLeftClick).not.toHaveBeenCalled();
    expect(mockRightClick).not.toHaveBeenCalled();
  });
});
