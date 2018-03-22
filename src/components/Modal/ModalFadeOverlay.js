import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { OverlayExitButton } from './ModalOverlay.style';

export default class ModalOverlay extends Component {
  closeModal = () => {
    ModalManager.close();
    document.getElementById('___gatsby').classList.remove('blur', 'fixed');
  };

  render() {
    const { markupToDisplay, onRequestClose } = this.props;
    return (
      <Modal onRequestClose={onRequestClose} effect={Effect.Fade}>
        <OverlayExitButton onClick={this.closeModal}>X</OverlayExitButton>
        {markupToDisplay}
      </Modal>
    );
  }
}
