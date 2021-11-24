import ReactDOM from 'react-dom';
import { useRef } from 'react';
import { Color } from 'utils/types/enums';
import { AnimatePresence } from 'framer-motion';
import useOutsideClick from 'hooks/useOutsideClick';
import { modalOverlayVariants, modalContentVariants  } from './helpers/animations';
import { ModalOverlay, ModalContent, CloseModalBtn } from './ModalStyles';

const modalDOMContainer = document.querySelector('#modal') as HTMLElement;

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
  onCloseHandler: () => void;
};

const Modal = ({ isOpen, onCloseHandler, children }: Props) => {
  const modalRef = useRef(null);
  useOutsideClick(modalRef, onCloseHandler);

  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      {isOpen ? (
        <ModalOverlay key="modal" variants={modalOverlayVariants} initial='initial' animate='animate' exit='exit'> 
          <ModalContent ref={modalRef} variants={modalContentVariants} initial='initial' animate='animate' exit='exit'>
            <CloseModalBtn color={Color.LightBlue} onClick={onCloseHandler}>
              X
            </CloseModalBtn>
            {children}
          </ModalContent>
        </ModalOverlay>
      ) : null}
    </AnimatePresence>,
    modalDOMContainer,
  );
};

export default Modal;
