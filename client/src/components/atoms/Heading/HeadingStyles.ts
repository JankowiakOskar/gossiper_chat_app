import styled from 'styled-components';

export const Header = styled.header`
  margin: 2rem 0 0 0;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xl};
  color: ${({ theme }) => theme.colors.lightBlue};
`;

export const Text = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: ${({ theme }) => theme.font.size.medium};
  text-align: left;
`;
