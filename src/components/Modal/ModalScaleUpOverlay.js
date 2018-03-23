import React, { Component } from 'react';
import { Modal, ModalManager, Effect } from 'react-dynamic-modal';
import { ButtonContainer, OverlayExitButton } from './ModalOverlay.style';

export default class ModalScaleUpOverlay extends Component {
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
    const { markupToDisplay, onRequestClose, bgColor } = this.props;
    const defaultBgColor = 'rgba(43, 43, 43, .9)';
    return (
      <Modal
        style={{
          content: {
            background: bgColor || defaultBgColor
          }
        }}
        onRequestClose={onRequestClose}
        effect={Effect.ScaleUp}
      >
        <OverlayExitButton onClick={this.closeModal}>X</OverlayExitButton>
        <div className="yes">{markupToDisplay}</div>
      </Modal>
    );
  }
}
