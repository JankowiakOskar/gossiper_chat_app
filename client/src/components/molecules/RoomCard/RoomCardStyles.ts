import styled from 'styled-components';
import Button from 'components/atoms/Button/ButtonStyles';
import { ReactComponent as ChatSVG } from 'assets/svgs/ChatSVG.svg';

export const Wrapper = styled.figure`
  padding: 1rem;
  width: 30rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  box-shadow: ${({ theme }) => theme.boxShadow};
  text-align: center;
`;

export const RoomTitle = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
`;

export const RoomDescription = styled.p`
  margin: 0.5rem 0 0 0;
`;

export const HighlightText = styled.span`
  font-weight: bold;
`;

export const RoomDownBar = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const StyledButton = styled(Button)`
  align-self: flex-end;
  width: 10rem;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ChatIcon = styled(ChatSVG)``;
