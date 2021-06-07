import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from 'components/atoms/Button/ButtonStyles';

export const ModalOverlay = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled(motion.div)`
  position: relative;
  width: 95vw;
  min-height: 30rem;
  border-radius: 2.5rem;
  height: fit-content;
  border: 0.2rem solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 55rem;
  }
`;

export const CloseModalBtn = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.font.size.large};
  color: ${({ theme }) => theme.colors.white};
`;
