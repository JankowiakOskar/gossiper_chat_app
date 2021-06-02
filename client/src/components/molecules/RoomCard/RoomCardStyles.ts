import styled, { css } from 'styled-components';
import Button from 'components/atoms/Button/ButtonStyles';
import { motion } from 'framer-motion';
import { ReactComponent as ChatSVG } from 'assets/svgs/ChatSVG.svg';
import Circle from 'components/atoms/Circle/Cricle';

interface WrapperProps {
  readonly isExpanded: boolean;
}

const highlightText = css`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
`;

export const Wrapper = styled(motion.figure)<WrapperProps>`
  padding: 1rem;
  width: 90vw;
  max-width: 33rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
  cursor: pointer;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      background-color: ${({ theme }) => theme.colors.white};
      height: fit-content;
    `}
`;

export const RoomTitle = styled.h3`
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
  ${highlightText}
`;

export const RoomDescriptions = styled.div`
  width: 100%;
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Description = styled.div`
  width: 100%;
  margin: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpanText = styled.span`
  padding: 0.3rem 0;
  ${highlightText}
`;

export const Text = styled.p`
  width: 100%;
  word-wrap: break-word;
`;

export const RoomDownBar = styled.div`
  margin: 1rem 0 0 0;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 0.15rem solid ${({ theme }) => theme.colors.grey};
`;

export const StyledButton = styled(Button)`
  width: 10rem;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IconsWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const IconActiveUsersWrapper = styled.div`
  margin: 0 1rem;
  position: relative;
`;

export const ChatIcon = styled(ChatSVG)``;

export const StyledCircle = styled(Circle)`
  position: absolute;
  top: 0;
  right: -1rem;
`;
