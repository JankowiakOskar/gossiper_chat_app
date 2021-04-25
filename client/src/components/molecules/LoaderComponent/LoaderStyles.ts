import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;

export const LoadingMessage = styled.p`
  margin: 1.2rem 0 0 0;
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: bold;
`;
