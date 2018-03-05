import React, { Component } from 'react';
import { Container, Title, Action } from './ActionsBar.style';

export default class ActionsBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Title>Take action</Title>
        <Container>
          <Action />
          <Action />
          <Action />
        </Container>
      </div>
    );
  }
}
