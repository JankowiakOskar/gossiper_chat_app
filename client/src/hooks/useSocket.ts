import { useEffect, useState } from 'react';
import { useAppSelector } from 'store';
import { io, Socket } from 'socket.io-client';
import { MessageType, SocketUser } from 'utils/types/types';

const URL = '192.168.100.17:5000';

let socket: Socket;

const useSocket = () => {
  const { login } = useAppSelector(state => state.auth);
  const [users, setUsers] = useState<SocketUser[]>([]);
  const [messages, setMessages] = useState<MessageType[]>([]);

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

  return {
    users,
    messages,
    socket,
  };
};

export default useSocket;
