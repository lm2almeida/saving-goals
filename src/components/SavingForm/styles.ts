import styled from 'styled-components';

import media from '../../commons/styles/utils/media';

const Form = styled.form`
  background-color: var(--colors-neutral-white);
  border-radius: var(--border-radius-large);
  box-shadow: var(--shadow);
  max-width: 560px;
  padding: var(--spacing-xlarge);
  width: 100%;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-xlarge);

  ${media.desktop`
    flex-direction: row;
  `}
`;

const Button = styled.button`
  background-color: var(--colors-brand-primary);
  border: none;
  border-radius: 32px;
  color: var(--colors-neutral-white);
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: var(--spacing-xxlarge);
  padding: 18px;
  width: 100%;

  ${media.desktop`
    margin: 0 auto var(--spacing-medium) auto;
    max-width: 50%;
  `}
`;

export { Form, InputsContainer, Button };
