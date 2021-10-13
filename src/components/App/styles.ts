import styled from 'styled-components';

const Main = styled.main`
  align-items: center;
  background-color: var(--colors-blue-gray-10);
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: var(--spacing-xxlarge) 0;
  width: 100%;
`;

const Title = styled.h1`
  color: var(--colors-brand-primary);

  strong {
    font-weight: bold;
  }
`;

export { Main, Title };
