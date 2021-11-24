import { useAppSelector, useAppDispatch } from 'store';
import { ModalKind } from 'features/modal/types';
import { closeModal } from 'features/modal/modalSlice';
import Modal from 'components/molecules/Modal/Modal';
import AccessForm from './AccessForm/AccessForm';

const AccessRoomModal = () => {
  const { selectedModal } = useAppSelector(({ modal }) => modal);
  const dispatch = useAppDispatch();
  const isModalOpen = selectedModal === ModalKind.AccessRoomModal;

  const handleCloseAccessRoomModal = () => dispatch(closeModal());

  return (
    <Modal isOpen={isModalOpen} onCloseHandler={handleCloseAccessRoomModal}>
      <AccessForm />
    </Modal>
  );
};

export default AccessRoomModal;
