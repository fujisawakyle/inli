import React, { Component } from 'react';
import ModalOverlay from '../Modal/ModalOverlay';
import { Modal, ModalManager } from 'react-dynamic-modal';
import { Button, Centered, ModalClickContainer } from './ModalTrigger.style';

export default class ModalTrigger extends Component {
  openModal = () => {
    ModalManager.open(
      <ModalOverlay
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
