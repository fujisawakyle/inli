import React, { Component } from 'react';
import ModalContent from '../Modal/ModalContent';
import { Modal, ModalManager } from 'react-dynamic-modal';
import { Button, Centered } from './ModalTrigger.style';

export default class Popup extends Component {
  openModal = () => {
    ModalManager.open(
      <ModalContent text={this.props.text} onRequestClose={() => true} />
    );
  };
  render() {
    return (
      <Centered>
        <Button type="button" onClick={this.openModal}>
          {this.props.buttonText}
        </Button>{' '}
      </Centered>
    );
  }
}
