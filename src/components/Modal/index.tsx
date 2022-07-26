import { useEffect, useState } from 'react';
import { ModalContainer, ModalContent, ModalClose } from './styles';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ open, children, onClose }: ModalProps) {
  const [show, setShow] = useState<boolean>(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <ModalContainer open={show}>
      <ModalContent>
        <ModalClose onClick={handleClose}>&times;</ModalClose>
        {children}
      </ModalContent>
    </ModalContainer>
  );
}

export default Modal;
