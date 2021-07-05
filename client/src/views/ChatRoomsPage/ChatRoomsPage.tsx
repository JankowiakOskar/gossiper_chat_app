import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import useOutsideClick from 'hooks/useOutsideClick';
import useSelectedCard from 'hooks/useSelectedCard';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { fetchChatRooms } from 'features/chatRooms/chatRoomsSlice';
import { openSelectedModal, closeModal } from 'features/modal/modalSlice';
import { ModalKind } from 'features/modal/types';
import { switchDocumentScroll } from 'utils';
import { ScrollMode } from 'utils/types/enums';
import TransitionProvider from 'providers/TransitionProvider';
import ReactTooltip from 'react-tooltip';
import LoaderProvider from 'providers/LoaderProvider';
import Heading from 'components/atoms/Heading/Heading';
import Modal from 'components/organisms/Modal/Modal';
import RoomCreateForm from 'components/organisms/RoomCreateForm/RoomCreateForm';
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
      ease: 'easeIn',
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
  const dispatch = useAppDispatch();
  const { chatRooms, areFetchingRooms } = useAppSelector(state => state.chatRooms);
  const { selectedModal } = useAppSelector(state => state.modal);
  const { selectedCard, setSelectedCardId, selectedCardRef, removeSelectedCard } = useSelectedCard(chatRooms);

  useOutsideClick(selectedCardRef, removeSelectedCard);

  useEffect(() => {
    dispatch(fetchChatRooms());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCard) {
      switchDocumentScroll(ScrollMode.Disable);
    } else {
      switchDocumentScroll(ScrollMode.Enable);
    }
  }, [selectedCard]);

  return (
    <TransitionProvider>
      <Wrapper>
        <Heading title='Chat Rooms' subtitle='Join to one of following chats or create own room' />
        <LoaderProvider isLoading={areFetchingRooms} loadingMessage='Loading available chats...'>
          <AnimateSharedLayout type='crossfade'>
            <RoomsSection layout>
              {chatRooms.map(({ id, name, description, users, tags, isPrivate }, index) => (
                <StyledRoomCard
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  tags={tags}
                  activeUsers={users.length}
                  isPrivate={isPrivate}
                  index={index}
                  isExpanded={false}
                  handleCB={() => setSelectedCardId(id)}
                />
              ))}
              <ReactTooltip id='activeUsers' effect='solid' />
            </RoomsSection>
            <AnimatePresence exitBeforeEnter>
              {selectedCard && (
                <Overlay variants={overlayVariants} initial={false} animate='animate' exit='hidden' layout>
                  <StyledRoomCard
                    ref={selectedCardRef}
                    key={selectedCard.id}
                    id={selectedCard.id}
                    name={selectedCard.name}
                    description={selectedCard.description}
                    tags={selectedCard.tags}
                    activeUsers={selectedCard.users.length}
                    isPrivate={selectedCard.isPrivate}
                    isExpanded
                  />
                  <ReactTooltip id='activeUsers' effect='solid' />
                </Overlay>
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
        </LoaderProvider>
        <StyledButton onClick={() => dispatch(openSelectedModal(ModalKind.RoomCreatorModal))} data-for='addRoom' data-tip='Create new room'>
          <IconPlus />
        </StyledButton>
        <Modal isOpen={selectedModal === ModalKind.RoomCreatorModal} onCloseHandler={() => dispatch(closeModal())}>
          <RoomCreateForm />
        </Modal>
        <ReactTooltip id='addRoom' effect='solid' place='left' />
      </Wrapper>
    </TransitionProvider>
  );
};

export default ChatRoomsPage;
