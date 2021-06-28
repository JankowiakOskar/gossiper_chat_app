import { ErrorMessage } from 'utils/types/interfaces';
import { MessageType } from 'utils/types/types';

export interface ChatRoom {
  id?: string;
  name: string;
  description: string;
  users: string[];
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
  isLoading: boolean;
  error: ErrorMessage;
}
