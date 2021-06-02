import styled from 'styled-components';

export const TagsList = styled.ul`
  display: flex;
`;

export const Tag = styled.li`
  margin: 0 0.5rem;
  list-style: none;
  color: ${({ theme }) => theme.colors.textGrey};
`;
