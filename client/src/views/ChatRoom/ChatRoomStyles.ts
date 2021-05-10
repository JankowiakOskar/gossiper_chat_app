import styled from 'styled-components';
import ChatPanel from 'components/organisms/ChatPanel/ChatPanel';
import { MessagesWrapper } from 'components/organisms/ChatPanel/ChatPanelStyles';
import { FormWrapper } from 'components/organisms/MessageForm/MessageFormStyles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ theme }) => theme.mediaQuery.desktop} {
    height: calc(100vh - 7.5rem);
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
  }
`;

export const StyledChatPanel = styled(ChatPanel)`
  flex: 1;
  height: 100%;
  overflow: hidden;

  & ${MessagesWrapper} {
    padding: 2rem 2.5rem;
    height: calc(100vh - 7rem);
  }

  & ${FormWrapper} {
    position: fixed;
    top: 100%;
    left: 25rem;
    transform: translate(0, -100%);
    width: calc(100% - 25rem);
  }
`;
