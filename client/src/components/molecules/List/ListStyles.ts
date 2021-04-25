import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledList = styled.ul`
  list-style: none;
  max-width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ListElement = styled(motion.li)`
  margin: 1rem 0;
  padding: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpan = styled.span`
  padding: 0 0 0 1rem;
`;
