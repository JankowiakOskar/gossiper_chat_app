import { ErrorMessage } from 'utils/types/interfaces';
import { MessageType, SocketUser } from 'utils/types/types';

export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  users: SocketUser[];
  messages: MessageType[];
  tags: string[];
  isPrivate: boolean;
  password?: string;
}

export type ChatRoomPreview = Omit<ChatRoom, 'id' | 'users' | 'messages'>;

export interface RoomData {
  roomName: string;
  roomDescription: string;
  tags: string[];
  isPrivateRoom: boolean;
  password?: string;
}

export interface ChatRoomsState {
  chatRooms: ChatRoom[];
  areFetchingRooms: boolean;
  isRoomCreating: boolean;
  roomSignInId: ChatRoom['id'];
  error: ErrorMessage;
}
