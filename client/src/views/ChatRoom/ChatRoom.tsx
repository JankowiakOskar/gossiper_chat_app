import { createContext } from 'react';
import { useParams } from 'react-router-dom';
import useWindow from 'hooks/useWindow';
import useSocket from 'hooks/useSocket';
import UsersList from 'components/molecules/UsersList/UsersList';
import Tabs from 'components/organisms/Tabs/Tabs';
import Tab from 'components/organisms/Tabs/Tab/Tab';
import ChatPanel from 'components/organisms/ChatPanel/ChatPanel';
import SidePanel from 'components/organisms/SidePanel/SidePanel';
import { MessageType } from 'utils/types/types';

import { Wrapper, StyledChatPanel } from './ChatRoomStyles';

type Context = {
  sendMessage: (message: MessageType['text']) => void;
};

export const ChatContext = createContext<Context>({ sendMessage: (message: MessageType['text']) => {} });

const ChatRoom = () => {
  const { id: roomId } = useParams<{ id: string }>();
  const { users, messages, sendMessage } = useSocket(roomId);
  const { isReachedDesktopDevice } = useWindow();
  return (
    <ChatContext.Provider value={{ sendMessage }}>
      <Wrapper>
        {isReachedDesktopDevice ? (
          <>
            <SidePanel>
              <UsersList usersList={users} />
            </SidePanel>
            <StyledChatPanel messages={messages} />
          </>
        ) : (
          <Tabs defaultActive={0}>
            <Tab title='Chat'>
              <ChatPanel messages={messages} />
            </Tab>
            <Tab title='Active users'>
              <p>to jest lista aktywnych userów</p>
            </Tab>
          </Tabs>
        )}
      </Wrapper>
    </ChatContext.Provider>
  );
};

export default ChatRoom;
