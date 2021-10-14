import { useEffect, useRef, useState, useCallback } from 'react';

import { MONTHS } from './utils';
import InputWrapper from '../../InputWrapper';
import { ReactComponent as ChevronLeftSVG } from '../../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRightSVG } from '../../../assets/icons/chevron-right.svg';

import * as S from './styles';

interface ReachDateInputProps {
  id: string;
  name: string;
  onChange: (value: { year: number; month: number }) => void;
}

const DECEMBER_MONTH = 11;
const JANUARY_MONTH = 0;

function ReachDateInput({
  id,
  name,
  onChange,
}: ReachDateInputProps): JSX.Element {
  const todayDate = new Date();
  const currentYear = todayDate.getFullYear();
  const currentMonth = todayDate.getMonth();
  const [inputValue, setInputValue] = useState('');
  const [monthValue, setMonthValue] = useState(currentMonth);
  const [yearValue, setYearValue] = useState(currentYear);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    setInputValue('');
  };

  const handleIncrementMonth = useCallback(() => {
    setMonthValue((prevMonth) => {
      const newMonth = prevMonth + 1;

      if (newMonth > DECEMBER_MONTH) {
        setYearValue(yearValue + 1);

        return JANUARY_MONTH;
      }

      return newMonth;
    });
  }, [yearValue]);

  const handleDecrementMonth = useCallback(() => {
    setMonthValue((prevMonth) => {
      const newMonth = prevMonth - 1;
      const isNewMonthBeforeCurrentMont = newMonth < currentMonth;
      const isYearValueEqualCurrentYear = yearValue === currentYear;

      if (isNewMonthBeforeCurrentMont && isYearValueEqualCurrentYear) {
        return prevMonth;
      }

      if (newMonth < JANUARY_MONTH) {
        setYearValue(yearValue - 1);

        return DECEMBER_MONTH;
      }

      return newMonth;
    });
  }, [currentMonth, currentYear, yearValue]);

  const buttons = {
    left: {
      component: <ChevronLeftSVG />,
      props: {
        onClick() {
          handleDecrementMonth();
        },
        label: 'decrement month',
      },
    },
    right: {
      component: <ChevronRightSVG />,
      props: {
        onClick() {
          handleIncrementMonth();
        },
        label: 'increment month',
      },
    },
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const ARROW_LEFT = 'ArrowLeft';
      const ARROW_RIGHT = 'ArrowRight';

      if (inputRef.current === document.activeElement) {
        if (event.key === ARROW_LEFT) {
          handleDecrementMonth();
          return;
        }

        if (event.key === ARROW_RIGHT) {
          handleIncrementMonth();
          return;
        }
      }

      return;
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDecrementMonth, handleIncrementMonth]);

  useEffect(() => {
    onChange({ year: yearValue, month: monthValue });
  }, [monthValue, yearValue, onChange]);

  return (
    <InputWrapper id={id} label="Reach goal by" buttons={buttons}>
      <S.CustomInput>
        <S.Input
          data-testid="input-reachDate"
          ref={inputRef}
          id={id}
          name={name}
          value={inputValue}
          onChange={handleChange}
        />
        <S.TextGroup>
          <S.InputMonth>{MONTHS[monthValue]}</S.InputMonth>
          <S.InputYear>{yearValue}</S.InputYear>
        </S.TextGroup>
      </S.CustomInput>
    </InputWrapper>
  );
}

export default ReachDateInput;
