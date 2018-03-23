import React, { Component } from 'react';
import ModalFadeOverlay from '../Modal/ModalFadeOverlay';
import ModalScaleUpOverlay from '../Modal/ModalScaleUpOverlay';
import { Modal, ModalManager } from 'react-dynamic-modal';
import { Button, Centered, ModalClickContainer } from './ModalTrigger.style';

import {
  SadTruthMarkup,
  McNuggetMarkup,
  RonaldMarkup,
  MediaMarkup
} from '../Modal/ModalMarkup';

export default class ModalTrigger extends Component {
  modalTransitions = {
    fade: ModalFadeOverlay,
    scaleUp: ModalScaleUpOverlay
  };

  componentDidMount() {
    if (
      window.location.href.indexOf('#sadtruthinfo') != -1 ||
      window.location.href.indexOf('#mcnuggetinfo') != -1 ||
      window.location.href.indexOf('#ronaldinfo') != -1 ||
      window.location.href.indexOf('#mediainfo') != -1
    ) {
      this.openModal();
    }
  }

  openModal = () => {
    setTimeout(() => {
      document.getElementById('___gatsby').classList.add('blur', 'fixed');
    }, 200);
    const ModalName = this.modalTransitions[this.props.modalTransition];
    let markup;
    if (window.location.href.indexOf('#sadtruthinfo') != -1) {
      markup = SadTruthMarkup;
    } else if (window.location.href.indexOf('#mcnuggetinfo') != -1) {
      markup = McNuggetMarkup;
    } else if (window.location.href.indexOf('#ronaldinfo') != -1) {
      markup = RonaldMarkup;
    } else if (window.location.href.indexOf('#mediainfo') != -1) {
      markup = MediaMarkup;
    }
    ModalManager.open(
      <ModalName
        bgColor={this.props.bgColor}
        markupToDisplay={markup || this.props.markupToDisplay}
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
