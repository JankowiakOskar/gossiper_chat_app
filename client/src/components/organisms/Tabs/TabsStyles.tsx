import styled from 'styled-components';

export const TabsList = styled.ul`
  padding: 0 2rem;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
