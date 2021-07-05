import { ChatRoomPreview } from 'features/chatRooms/types';

export const mergeChatRoomWithCreator = <T extends { createdBy: string }>(
  room: ChatRoomPreview,
  { createdBy }: T,
): ChatRoomPreview & { createdBy: string } => ({ ...room, createdBy });
