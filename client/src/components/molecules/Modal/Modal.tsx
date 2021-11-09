import ReactDOM from 'react-dom';
import { useRef } from 'react';
import { Color } from 'utils/types/enums';
import { AnimatePresence } from 'framer-motion';
import useOutsideClick from 'hooks/useOutsideClick';
import { ModalOverlay, ModalContent, CloseModalBtn } from './ModalStyles';

const modalDOMContainer = document.querySelector('#modal') as HTMLElement;

const modalContentVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      mass: 0.9,
      duration: 0.4,
    },
  },
  exit: {
    opacity: [1, 0.5],
    scale: [1, 0],
    transition: {
      type: 'easeIn',
      duration: 0.4,
    },
  },
};

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
        <ModalOverlay>
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
