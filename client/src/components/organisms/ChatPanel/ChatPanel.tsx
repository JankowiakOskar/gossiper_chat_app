import { useRef, useEffect } from 'react';
import { useAppSelector } from 'store';
import short from 'short-uuid';
import { MessageType } from 'utils/types/types';
import { Direction } from 'utils/types/enums';
import { Socket } from 'socket.io-client';
import MessageForm from 'components/organisms/MessageForm/MessageForm';
import Message from 'components/molecules/Message/Message';
import { MessagesWrapper, Panel, EmptyMessage } from './ChatPanelStyles';

type Props = {
  messages: MessageType[];
  socket: Socket;
  className?: string;
};

const ChatPanel = ({ messages, socket, className }: Props) => {
  const { login } = useAppSelector(state => state.auth);
  const endMessagesRef = useRef<HTMLDivElement>(null);

  const messagesList = messages.map(msg => (
    <Message
      key={short.generate()}
      text={msg.text}
      date={msg.date}
      sender={msg.sender === login ? 'You' : msg.sender}
      direction={msg.sender === login ? Direction.Right : Direction.Left}
    />
  ));

  useEffect(() => {
    const scrollToBottom = (ref: HTMLElement) => {
      ref.scrollIntoView({ behavior: 'smooth' });
    };
    if (endMessagesRef.current !== null) {
      scrollToBottom(endMessagesRef.current);
    }
  }, [messages]);
  return (
    <Panel className={className}>
      <MessagesWrapper>
        {messagesList}
        <EmptyMessage ref={endMessagesRef} />
      </MessagesWrapper>
      {login && <MessageForm username={login} handleDataCB={(message: MessageType) => socket.emit('message', message.text)} />}
    </Panel>
  );
};

ChatPanel.defaultProps = {
  className: '',
};

export default ChatPanel;
