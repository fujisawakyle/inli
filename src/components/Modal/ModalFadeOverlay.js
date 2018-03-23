import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { OverlayExitButton } from './ModalOverlay.style';

export default class ModalFadeOverlay extends Component {
  closeModal = () => {
    ModalManager.close();
    document.getElementById('___gatsby').classList.remove('blur', 'fixed');
  };

  componentDidMount() {
    //allow ESC key to close modal
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ('key' in evt) {
        isEscape = evt.key == 'Escape' || evt.key == 'Esc';
      } else {
        isEscape = evt.keyCode == 27;
      }
      if (isEscape) {
        ModalManager.close();
        document.getElementById('___gatsby').classList.remove('blur', 'fixed');
      }
    };
  }

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
