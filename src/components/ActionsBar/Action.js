import React, { Component } from 'react';
import data from '../../data/data.json';
import { TwitterText } from './Action.style';

export default class Action extends Component {
  state = {
    value: "Here's some default text"
  };
  handleChange = () => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = actionNumber => {
    switch (actionNumber) {
      case '1':
        break;
      case '2':
        window.open(`https://google.com/action${this.state.value}`);
        break;
    }
    alert(`you submitted action #${actionNumber}`);
  };
  render() {
    let html;
    switch (this.props.actionNumber) {
      case '1':
        html = (
          <div
            className="ngp-form"
            data-form-url="https://actions.everyaction.com/v1/Forms/75X6VAefDkqf42b3crezsA2"
            data-fastaction-endpoint="https://fastaction.ngpvan.com"
            data-inline-errors="true"
            data-fastaction-nologin="true"
            data-databag-endpoint="https://profile.ngpvan.com"
            data-databag="everybody"
          />
        );
        break;
      case '2':
        html = (
          <div>
            <TwitterText
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <br />
          </div>
        );
    }
    return (
      <div
        style={{ background: 'orange', height: '500px', textAlign: 'center' }}
      >
        <h1>{data.actionText['action' + [this.props.actionNumber]].first}</h1>
        {html}
        <button
          onClick={() => {
            this.props.addCheck(this.props.actionNumber);
            this.handleSubmit(this.props.actionNumber);
          }}
        >
          {data.actionText['action' + [this.props.actionNumber]].button}
        </button>
      </div>
    );
  }
}
