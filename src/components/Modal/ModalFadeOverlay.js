import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { OverlayExitButton } from './ModalOverlay.style';

export default class ModalOverlay extends Component {
  render() {
    const { markupToDisplay, onRequestClose } = this.props;
    return (
      <Modal onRequestClose={onRequestClose} effect={Effect.Fade}>
        <OverlayExitButton onClick={ModalManager.close}>X</OverlayExitButton>
        {markupToDisplay}
      </Modal>
    );
  }
}
