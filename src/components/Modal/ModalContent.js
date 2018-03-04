import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { OverlayExitButton } from './ModalContent.style';

export default class ModalContent extends Component {
  render() {
    const { text, onRequestClose } = this.props;
    return (
      <Modal onRequestClose={onRequestClose} effect={Effect.ScaleUp}>
        <OverlayExitButton onClick={ModalManager.close}>X</OverlayExitButton>
        <h1>{text}</h1>
      </Modal>
    );
  }
}
