import { useEffect, useState } from 'react';
import { useAppSelector } from 'store';
import { io, Socket } from 'socket.io-client';
import { MessageType, SocketUser } from 'utils/types/types';

const URL = '192.168.100.146:5000';

let socket: Socket;

const useSocket = (roomId: string) => {
  const { login } = useAppSelector(state => state.auth);
  const [users, setUsers] = useState<SocketUser[]>([]);
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    if (login) {
      socket = io(URL, { query: { user: login, roomId } });
      socket.on('connect', () => {
        socket.emit('joinRoom', { user: login, roomId });
      });
      socket.on('allMessages', allMessages => setMessages([...allMessages]));
      socket.on('users', currUsers => setUsers([...currUsers]));
      socket.on('newMessage', updateMessages);
    }

    return () => {
      socket.disconnect();
    };
  }, [login, roomId]);

  const updateMessages = (newMsg: MessageType) => setMessages(prevMessages => [...prevMessages, newMsg]);
  const sendMessage = (message: MessageType['text']) => socket.emit('message', roomId, { sender: login, message });

  return {
    users,
    messages,
    socket,
    sendMessage,
  };
};

export default useSocket;
