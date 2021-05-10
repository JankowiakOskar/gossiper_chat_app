import { useParams } from 'react-router-dom';
import useWindow from 'hooks/useWindow';
import useSocket from 'hooks/useSocket';
import Tabs from 'components/organisms/Tabs/Tabs';
import Tab from 'components/organisms/Tabs/Tab/Tab';
import ChatPanel from 'components/organisms/ChatPanel/ChatPanel';
import SidePanel from 'components/organisms/SidePanel/SidePanel';
import { Wrapper, StyledChatPanel } from './ChatRoomStyles';

const ChatRoom = () => {
  const { id } = useParams<{ id: string }>();
  const { socket, users, messages } = useSocket();
  const { isReachedDesktopDevice } = useWindow();
  console.log(users);
  console.log(id);
  return (
    <Wrapper>
      {isReachedDesktopDevice ? (
        <>
          <SidePanel>
            <h1>Siemano</h1>
          </SidePanel>
          <StyledChatPanel messages={messages} socket={socket} />
        </>
      ) : (
        <Tabs defaultActive={0}>
          <Tab title='Chat'>
            <ChatPanel messages={messages} socket={socket} />
          </Tab>
          <Tab title='Active users'>
            <p>to jest lista aktywnych userów</p>
          </Tab>
        </Tabs>
      )}
    </Wrapper>
  );
};

export default ChatRoom;
