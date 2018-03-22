import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { Check1, Check2, Check3, Check4 } from './Checks';
import Action from './Action';
import decorators from './decorators';

import petitionIcon from '../../assets/svg/petitionIcon.svg';
import twitterIcon from '../../assets/svg/twitterIcon.svg';
import emailIcon from '../../assets/svg/emailIcon.svg';
import facebookIcon from '../../assets/svg/facebookIcon.svg';

export default class ActionSlider extends Component {
  state = {
    check1: false,
    check2: false,
    check3: false,
    check4: false
  };

  // wait to execute callback until specific element with class name found
  waitUntilLoaded = (className, callback, waitTime) => {
    let maxtime = waitTime;
    let start = new Date().getTime();
    let interval = setInterval(() => {
      if (new Date().getTime() - start < maxtime) {
        if (document.getElementsByClassName(className)[0]) {
          clearInterval(interval);
          callback();
        }
      }
    }, 100);
  };

  componentDidMount() {
    // wait 10 minutes for petition thank you div
    this.waitUntilLoaded(
      'content thankYou',
      () => {
        setTimeout(() => {
          this.handleActionTaken('1');
        }, 1000);
      },
      600000
    );
  }

  handleActionTaken = actionNum => {
    // identify correct check mark
    let checkState = {};
    checkState['check' + actionNum] = true;
    // change check mark state and slide in new action
    setTimeout(() => {
      this.setState(checkState);
      document.getElementsByClassName('rightSlide')[0].click();
    }, 150);
  };

  render() {
    let check1Show, check2Show, check3Show, check4Show;

    // check mark render
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
            onClick={e => e.stopPropagation()}
            actionIcon={petitionIcon}
            handleActionTaken={this.handleActionTaken}
            actionNumber="1"
          />
          <Action
            actionIcon={twitterIcon}
            handleActionTaken={this.handleActionTaken}
            actionNumber="2"
          />
          <Action
            actionIcon={emailIcon}
            handleActionTaken={this.handleActionTaken}
            actionNumber="3"
          />
          <Action
            actionIcon={facebookIcon}
            handleActionTaken={this.handleActionTaken}
            actionNumber="4"
          />
        </Carousel>
        {check1Show}
        {check2Show}
        {check3Show}
        {check4Show}
      </div>
    );
  }
}
