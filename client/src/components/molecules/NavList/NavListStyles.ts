import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledList = styled.ul`
  list-style: none;
  max-width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${({ theme }) => theme.mediaQuery.bigTablet} {
    flex-direction: row;
    max-width: none;
  }
`;

export const StyledSpan = styled.span`
  padding: 0 0 0 1rem;
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out;
`;

export const ListElement = styled(motion.li)`
  margin: 1rem 0;
  padding: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  ${({ theme }) => theme.mediaQuery.desktop} {
    margin: 1rem 1rem;
    border-radius: 2.5rem;
    padding: 1rem;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);

      ${StyledSpan} {
        color: ${({ theme }) => theme.colors.goldenYellow};
      }
    }
  }
`;
