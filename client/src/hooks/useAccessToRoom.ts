import { useHistory } from 'react-router-dom';
import { Routes } from 'routes';
import { ChatRoom } from 'features/chatRooms/types';

type ChatRoomPreview = Pick<ChatRoom, 'id' | 'isPrivate'>;

const useAccessToRoom = ({ id, isPrivate }: ChatRoomPreview) => {
  const history = useHistory();

  const getIntoRoom = () => {
    history.push(`${Routes.ChatRooms}/${id}`);
  };

  return {
    getIntoRoom,
  };
};

export default useAccessToRoom;
