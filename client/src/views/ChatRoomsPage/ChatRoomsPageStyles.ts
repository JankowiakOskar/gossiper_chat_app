import styled from 'styled-components';
import Button from 'components/atoms/Button/ButtonStyles';
import RoomCard from 'components/molecules/RoomCard/RoomCard';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export const RoomsSection = styled(motion.section)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledRoomCard = styled(RoomCard)`
  && {
    margin: 2rem 0;
  }
`;

export const StyledButton = styled(Button)`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translateZ(0);
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
