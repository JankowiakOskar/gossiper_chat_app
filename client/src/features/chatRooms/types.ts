import { ErrorMessage } from 'utils/types/interfaces';

export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  activeUsers: string[];
  tags: string[];
  isPrivate: boolean;
}

export interface ChatRoomsState {
  chatRooms: ChatRoom[];
  isLoading: boolean;
  error: ErrorMessage;
}
