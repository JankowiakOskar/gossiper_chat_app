import { ErrorMessage } from 'utils/types/interfaces';
import { MessageType } from 'utils/types/types';

export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  users: string[];
  messages: MessageType[];
  tags: string[];
  isPrivate: boolean;
}

export interface ChatRoomsState {
  chatRooms: ChatRoom[];
  isLoading: boolean;
  error: ErrorMessage;
}
