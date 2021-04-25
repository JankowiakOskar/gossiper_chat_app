import styled from 'styled-components';

export const Input = styled.input`
  flex: 0.9;
  padding: 1rem;
  border: none;
  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
