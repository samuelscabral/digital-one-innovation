import React, { useEffect } from 'react';

import Portal from './Portal';
import { Overlay, Dialog } from './styles';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const Modal = ({ children, open, onClose }: ModalProps) => {
  useEffect(() => {
    function onEsc(event: KeyboardEvent) {
      if (event.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.addEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(event: MouseEvent) {
    event.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
