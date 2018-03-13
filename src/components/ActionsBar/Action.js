import React, { Component } from 'react';
import data from '../../data/data.json';

export default class Action extends Component {
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
    }
    return (
      <div
        style={{ background: 'orange', height: '400px', textAlign: 'center' }}
      >
        <h1>{data.actionText['action' + [this.props.actionNumber]].first}</h1>
        {html}
        <button onClick={() => this.props.addCheck(this.props.actionNumber)}>
          Submit
        </button>
      </div>
    );
  }
}
