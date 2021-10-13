import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

const Input = styled(CurrencyInput)`
  font-family: var(--font-family-rubik);
  color: var(--colors-blue-gray-600);
  flex: 1;
  font-size: 20px;
  padding: var(--spacing-medium) var(--spacing-small) var(--spacing-medium) 0;
`;

export { Input };
