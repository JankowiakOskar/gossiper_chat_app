import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledNavBar = styled(motion.div)`
  padding: 1rem 2rem;
  width: 100%;
  height: 7.5rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  box-shadow: ${({ theme }) => theme.boxShadow};
  transform-origin: center top;

  ${({ theme }) => theme.mediaQuery.desktop} {
    padding: 0 2rem;
  }
`;

export const InnerWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    display: flex;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    justify-content: flex-end;
  }
`;
