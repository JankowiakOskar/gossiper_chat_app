import styled from 'styled-components';
import Button from 'components/atoms/Button/ButtonStyles';
import RoomCard from 'components/molecules/RoomCard/RoomCard';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 144rem;
  height: 100%;
  overflow-x: hidden;
`;

export const RoomsSection = styled(motion.section)`
  padding: 2rem 0;
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 2.5rem;

  ${({ theme }) => theme.mediaQuery.tablet} {
    padding: 4rem 0;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  ${({ theme }) => theme.mediaQuery.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

export const StyledRoomCard = styled(RoomCard)`
  && {
    ${({ theme }) => theme.mediaQuery.tablet} {
      max-width: 35rem;
      height: 22rem;
    }

    ${({ theme }) => theme.mediaQuery.bigTablet} {
      max-width: 45rem;
      height: 25rem;
    }
  }
`;

export const StyledButton = styled(Button)`
  padding: 0;
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const Overlay = styled(motion.div)`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
