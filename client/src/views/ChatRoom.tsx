import { useState, useEffect } from 'react';
import { useAppSelector } from 'store';
import styled from 'styled-components';
import { io } from 'socket.io-client';

const URL = 'http://localhost:5000';
const socket = io(URL);

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessagesWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

type User = {
  id: string;
  name: string;
};

type Message = {
  date: string;
  sender: User['name'];
  text: string;
};

const ChatRoom = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const { login } = useAppSelector(state => state.auth);
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('user', login);
    });

    socket.on('users', currUsers => setUsers(prevUsers => [...prevUsers, ...currUsers]));
    socket.on('message', msg => setMessages(prevMessages => [...prevMessages, msg]));
  }, [login]);
  console.log(users);
  return (
    <Wrapper>
      <MessagesWrapper>
        <ul>
          {messages.map(({ date, sender, text }) => (
            <li key={text}>
              {date} - {sender}: {text}
            </li>
          ))}
        </ul>
      </MessagesWrapper>
      <form>
        <input type='text' />
        <button type='submit'>Send</button>
      </form>
    </Wrapper>
  );
};

export default ChatRoom;
