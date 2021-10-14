import styled from 'styled-components';
import media from '../../../commons/styles/utils/media';

const Container = styled.div`
  --padding: var(--spacing-xlarge);

  border: 1px solid var(--colors-blue-gray-50);
  border-radius: var(--border-radius-large);
  margin-bottom: var(--spacing-xlarge);
  width: 100%;
`;

const AmountHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
`;

const Title = styled.span`
  font-size: 18px;
`;

const TotalAmount = styled.span`
  color: var(--colors-brand-secondary);
  font-family: var(--font-family-rubik);
  font-size: 24px;
`;

const AmountInfo = styled.div`
  background-color: var(--colors-blue-gray-10);
  font-size: 12px;
  line-height: 16px;
  padding: var(--padding);
  text-align: center;

  ${media.desktop`
    text-align: left;
  `}

  p {
    margin: 0 auto;
    max-width: 95%;

    ${media.desktop`
      margin: 0;
    `}
  }

  strong {
    font-weight: bold;
  }
`;

export { Container, AmountHeader, Title, TotalAmount, AmountInfo };
