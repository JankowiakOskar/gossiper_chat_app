import { Color } from 'utils/types/enums';
import { ChatRoom } from 'features/chatRooms/types';
import Tags from 'components/molecules/Tags/Tags';
import { Wrapper, RoomTitle, RoomDescription, StyledButton, RoomDownBar, ChatIcon, HighlightText } from './RoomCardStyles';

type RoomCardProps = Omit<ChatRoom, 'activeUsers'> & {
  activeUsers: number;
};

const RoomCard = ({ name, description, activeUsers, tags, isPrivate }: RoomCardProps) => (
  <Wrapper>
    <RoomTitle>{name}</RoomTitle>
    <RoomDescription>{description}</RoomDescription>
    <div>
      <HighlightText>Tags:</HighlightText>
      <Tags tags={tags} />
    </div>
    <RoomDescription>{activeUsers}</RoomDescription>
    <RoomDescription>{isPrivate}</RoomDescription>
    <RoomDownBar>
      <StyledButton color={Color.LightBlue}>
        Join <ChatIcon />
      </StyledButton>
    </RoomDownBar>
  </Wrapper>
);

export default RoomCard;
