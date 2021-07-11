import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const OptionModal = (props) => (
  <Modal
      isOpen={props.isModalOpen}
      onRequestClose = {props.handleModalClose}
      contentLabel = "Selected Option"
      closeTimeoutMS = {200}
      className="modal"
  >
  {props.children}
  <button className="primary-button sm-button" onClick={props.handleModalClose}>Okay</button>
  </Modal>
)

export default OptionModal;