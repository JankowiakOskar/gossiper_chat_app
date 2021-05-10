import styled from 'styled-components';

export const StyledSidePanel = styled.div`
  padding: 2rem 1rem;
  height: 100%;
  width: 25rem;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: 0.1rem solid ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  border-right: none;
  box-shadow: -0.5px 0px 7px 0px rgba(0, 0, 0, 0.75);
`;
