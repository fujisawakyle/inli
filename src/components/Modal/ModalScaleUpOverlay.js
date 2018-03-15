import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { ButtonContainer, OverlayExitButton } from './ModalOverlay.style';

export default class ModalScaleUpOverlay extends Component {
  render() {
    const { markupToDisplay, onRequestClose, bgColor } = this.props;
    const defaultBgColor = 'rgba(43, 43, 43, .9)';
    return (
      <Modal
        style={{
          content: { background: bgColor || defaultBgColor }
        }}
        onRequestClose={onRequestClose}
        effect={Effect.ScaleUp}
      >
        <OverlayExitButton onClick={ModalManager.close}>X</OverlayExitButton>

        {markupToDisplay}
      </Modal>
    );
  }
}
