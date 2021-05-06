import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { fetchChatRooms } from 'features/chatRooms/chatRoomsSlice';
import { getItemByName } from 'utils';
import TransitionProvider from 'providers/TransitionProvider';
import LoaderProvider from 'providers/LoaderProvider';
import Heading from 'components/atoms/Heading/Heading';
import { ReactComponent as IconPlus } from 'assets/svgs/icon-plus.svg';
import { StyledButton, Wrapper, RoomsSection, StyledRoomCard, Overlay } from './ChatRoomsPageStyles';

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      ease: 'easeOut',
      duration: 0.3,
    },
  },
  hidden: {
    opacity: [1, 0],
    transition: {
      when: 'beforeChildren',
      ease: 'easeOut',
      duration: 0.4,
    },
  },
};

const ChatRoomsPage = () => {
  const [selectedName, setSelectedName] = useState('');
  const dispatch = useAppDispatch();
  const { chatRooms, isLoading: isLoadingRooms } = useAppSelector(state => state.chatRooms);

  useEffect(() => {
    dispatch(fetchChatRooms());
  }, [dispatch]);

  const selectedItem = selectedName && getItemByName(chatRooms, selectedName);

  return (
    <TransitionProvider>
      <Wrapper>
        <Heading title='Chat Rooms' subtitle='Join to one of following chats or create own room' />
        <LoaderProvider isLoading={isLoadingRooms} loadingMessage='Loading available chats...'>
          <AnimateSharedLayout type='crossfade'>
            <RoomsSection layout>
              {chatRooms.map(({ id, name, description, activeUsers, tags, isPrivate }, index) => (
                <StyledRoomCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  tags={tags}
                  activeUsers={tags.length}
                  isPrivate={isPrivate}
                  index={index}
                  isExpanded={false}
                  handleCB={() => setSelectedName(name)}
                />
              ))}
            </RoomsSection>
            <AnimatePresence exitBeforeEnter>
              {selectedName && selectedItem && (
                <Overlay variants={overlayVariants} initial={false} animate='animate' exit='hidden' layout>
                  <StyledRoomCard
                    key={selectedItem.id}
                    id={selectedItem.id}
                    name={selectedItem.name}
                    description={selectedItem.description}
                    tags={selectedItem.tags}
                    activeUsers={selectedItem.tags.length}
                    isPrivate={selectedItem.isPrivate}
                    isExpanded
                    handleCB={() => setSelectedName('')}
                  />
                </Overlay>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </LoaderProvider>
        <StyledButton>
          <IconPlus />
        </StyledButton>
      </Wrapper>
    </TransitionProvider>
  );
};

export default ChatRoomsPage;
