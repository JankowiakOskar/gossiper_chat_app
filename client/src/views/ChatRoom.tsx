import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { UserType, MessageType } from 'utils/types/types';
import { Direction } from 'utils/types/enums';
import { useAppSelector } from 'store';
import { io, Socket } from 'socket.io-client';
import short from 'short-uuid';
import MessageForm from 'components/organisms/MessageForm/MessageForm';
import Message from 'components/molecules/Message/Message';

const URL = '192.168.100.17:5000';

let socket: Socket;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessagesWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  overflow-y: scroll;
`;

const EmptyMessage = styled.div`
  padding: 0 0 7rem 0;
`;

const ChatRoom = () => {
  const { login } = useAppSelector(state => state.auth);
  const [users, setUsers] = useState<UserType[]>([]);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const endMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = (ref: HTMLElement) => {
      ref.scrollIntoView({ behavior: 'smooth' });
    };
    if (endMessagesRef.current !== null) {
      scrollToBottom(endMessagesRef.current);
    }
  }, [messages]);

  useEffect(() => {
    socket = io(URL);
    socket.on('connect', () => {
      socket.emit('new user', login);
    });

    socket.on('users', currUsers => setUsers([...currUsers]));
    socket.on('message', msg => {
      setMessages(prevMessages => [...prevMessages, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [login]);

  console.log(users);

  const messagesList = messages.map(msg => (
    <Message
      key={short.generate()}
      text={msg.text}
      date={msg.date}
      sender={msg.sender === login ? 'You' : msg.sender}
      direction={msg.sender === login ? Direction.Right : Direction.Left}
    />
  ));

  return (
    <Wrapper>
      <MessagesWrapper>
        {messagesList}
        <EmptyMessage ref={endMessagesRef} />
      </MessagesWrapper>
      <MessageForm username={login} handleDataCB={(message: MessageType) => socket.emit('message', message.text)} />
    </Wrapper>
  );
};

export default ChatRoom;
