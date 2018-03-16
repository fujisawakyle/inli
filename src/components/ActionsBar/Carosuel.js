import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { Check1, Check2, Check3, Check4 } from './Checks';
import Action from './Action';
import decorators from './decorators';

import petitionIcon from '../../assets/svg/petitionIcon.svg';

export default class ActionSlider extends Component {
  state = {
    check1: false,
    check2: false,
    check3: false,
    check4: false
  };

  addCheck = dotNumber => {
    let obj = {};
    obj['check' + dotNumber] = true;
    setTimeout(() => {
      this.setState(obj);
    }, 150);
  };

  render() {
    let check1Show, check2Show, check3Show, check4Show;

    if (this.state.check1) {
      check1Show = Check1;
    }
    if (this.state.check2) {
      check2Show = Check2;
    }
    if (this.state.check3) {
      check3Show = Check3;
    }
    if (this.state.check4) {
      check4Show = Check4;
    }

    return (
      <div
        style={{ position: 'relative', margin: '0 auto', maxWidth: '600px' }}
      >
        <Carousel dragging={false} decorators={decorators}>
          <Action
            actionIcon={petitionIcon}
            addCheck={this.addCheck}
            actionNumber="1"
          />
          <Action addCheck={this.addCheck} actionNumber="2" />
          <Action addCheck={this.addCheck} actionNumber="3" />
          <Action addCheck={this.addCheck} actionNumber="4" />
        </Carousel>
        {check1Show}
        {check2Show}
        {check3Show}
        {check4Show}
      </div>
    );
  }
}
