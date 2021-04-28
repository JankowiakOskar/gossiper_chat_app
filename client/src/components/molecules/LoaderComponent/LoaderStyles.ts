import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: relative;
  position: fixed;
  width: fit-content;
  /* max-width: 30rem; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const LoadingMessage = styled.p`
  margin: 1rem 0 0 0;
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: bold;
`;
