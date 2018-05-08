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
  state = {
    anchorModalShown: false
  };
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
      this.setState({ anchorModalShown: true });
    }
  }

  openModal = () => {
    setTimeout(() => {
      document.getElementById('___gatsby').classList.add('blur', 'fixed');
    }, 200);
    const ModalName = this.modalTransitions[this.props.modalTransition];
    let markup;
    let bgColor;
    if (!this.state.anchorModalShown) {
      if (window.location.href.indexOf('#sadtruthinfo') != -1) {
        markup = SadTruthMarkup;
      } else if (window.location.href.indexOf('#mcnuggetinfo') != -1) {
        markup = McNuggetMarkup;
        bgColor = 'rgba(255,44,60,0.9)';
      } else if (window.location.href.indexOf('#ronaldinfo') != -1) {
        markup = RonaldMarkup;
      } else if (window.location.href.indexOf('#mediainfo') != -1) {
        markup = MediaMarkup;
      }
    }
    ModalManager.open(
      <ModalName
        bgColor={bgColor || this.props.bgColor}
        markupToDisplay={markup || this.props.markupToDisplay}
        onRequestClose={() => true}
      />
    );
    let eventName = this.props.eventName;
    window.dataLayer.push({
      event: eventName + 'Modal',
      modalType: eventName
    });
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
