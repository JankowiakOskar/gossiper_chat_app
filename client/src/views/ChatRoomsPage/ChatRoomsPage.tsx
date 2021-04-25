import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { fetchChatRooms } from 'features/chatRooms/chatRoomsSlice';
import TransitionProvider from 'providers/TransitionProvider';
import LoaderProvider from 'providers/LoaderProvider';
import Heading from 'components/atoms/Heading/Heading';
import RoomCard from 'components/molecules/RoomCard/RoomCard';
import { ReactComponent as IconPlus } from 'assets/svgs/icon-plus.svg';
import { StyledButton, Wrapper, RoomsSection } from './ChatRoomsPageStyles';

const ChatRoomsPage = () => {
  const dispatch = useAppDispatch();
  const { chatRooms, isLoading: isLoadingChatRooms } = useAppSelector(state => state.chatRooms);

  useEffect(() => {
    dispatch(fetchChatRooms());
  }, [dispatch]);

  const chatRoomsList = chatRooms.map(({ name, description, activeUsers, tags, isPrivate }) => (
    <RoomCard name={name} description={description} tags={tags} activeUsers={activeUsers.length} isPrivate={isPrivate} />
  ));

  return (
    <Wrapper>
      <TransitionProvider>
        <Heading title='Chat Rooms' subtitle='Join to chat or create own room' />
        <RoomsSection>
          <LoaderProvider isLoading={isLoadingChatRooms}>{chatRoomsList}</LoaderProvider>
        </RoomsSection>
      </TransitionProvider>
      <StyledButton>
        <IconPlus />
      </StyledButton>
    </Wrapper>
  );
};

export default ChatRoomsPage;
