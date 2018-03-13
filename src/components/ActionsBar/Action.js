import React, { Component } from 'react';
import data from '../../data/data.json';

export default class Action extends Component {
  render() {
    return (
      <div
        style={{ background: 'orange', height: '400px', textAlign: 'center' }}
      >
        <h1>{data.actionText['action' + [this.props.actionNumber]].first}</h1>
        <button onClick={() => this.props.addCheck(this.props.actionNumber)}>
          Submit
        </button>
      </div>
    );
  }
}
