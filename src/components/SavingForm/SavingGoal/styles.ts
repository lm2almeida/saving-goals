import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: var(--spacing-medium);

  svg {
    height: 64px;
    margin-right: var(--spacing-medium);
    width: 64px;
  }
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: var(--colors-blue-gray-900);
  font-family: var(--font-family-rubik);
  font-size: 24px;
  margin-bottom: var(--spacing-xxsmall);
`;

const Subtitle = styled.span`
  color: var(--colors-blue-gray-400);
  display: inline-block;
  font-size: 16px;
`;

export { Container, TitleContainer, Title, Subtitle };
