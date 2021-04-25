import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;
