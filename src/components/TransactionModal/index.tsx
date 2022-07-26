import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import Schedule from 'pages/Schedule';

function TransactionModal() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <div>
      <Schedule onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </div>
  );
}

export default TransactionModal;
