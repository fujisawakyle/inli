import React, { Component } from 'react';
import ModalFadeOverlay from '../Modal/ModalFadeOverlay';
import ModalScaleUpOverlay from '../Modal/ModalScaleUpOverlay';
import { Modal, ModalManager } from 'react-dynamic-modal';
import { Button, Centered, ModalClickContainer } from './ModalTrigger.style';

export default class ModalTrigger extends Component {
  modalTransitions = {
    fade: ModalFadeOverlay,
    scaleUp: ModalScaleUpOverlay
  };

  openModal = () => {
    const ModalName = this.modalTransitions[this.props.modalTransition];
    ModalManager.open(
      <ModalName
        bgColor={this.props.bgColor}
        markupToDisplay={this.props.markupToDisplay}
        onRequestClose={() => true}
      />
    );
  };
  render() {
    return (
      <Centered>
        <ModalClickContainer onClick={this.openModal}>
          {this.props.triggerItem}
        </ModalClickContainer>
      </Centered>
    );
  }
}
