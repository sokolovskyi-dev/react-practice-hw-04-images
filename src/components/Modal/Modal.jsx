import React, { useEffect } from 'react';

import { Modal, Overlay } from './Modal.styled';

const ModalWindow = ({ largeImg, onClose }) => {
  // const escapeKeyDown = e => {
  //   onClose(e);
  // };

  useEffect(() => {
    const escapeKeyDown = e => {
      onClose(e);
    };
    window.addEventListener('keydown', escapeKeyDown);
    return () => window.removeEventListener('keydown', escapeKeyDown);
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <Modal>
        <img src={largeImg} alt="dog" />
      </Modal>
    </Overlay>
  );
};

export default ModalWindow;
