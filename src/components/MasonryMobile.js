import React, { Component } from 'react';

import { StyledMasonry } from '../styles/styledComponents/blocks';

class MasonryMobile extends Component {
  state = {
    masonryBricks: null,
    totalBricks: this.props.bricks.length - 1,
    currentBrick: null
  }

  componentDidMount() {
    const numBricks = 6;
    this.setState({
      masonryBricks: this.props.bricks.slice(0, numBricks).map(brick => {
        return (
          <StyledMasonry.SquareBrick>
            <StyledMasonry.Image src={brick.src} />
          </StyledMasonry.SquareBrick>
        )
        // }
      }),
      currentBrick: numBricks - 1
    })
    //swaps a brick from of one the columns every 0.5 seconds.
    let iterator = 0;
    let randInt = null;
    setInterval(() => {
      switch (iterator) {
        case 0:
          randInt = Math.floor(Math.random() * 3);
          iterator += 1;
          break;
        case 1:
          randInt = Math.floor(Math.random() * (6 - 3) + 3);
          iterator = 0;
          break;
        default:
          break;
      }
      this.swapBrick(randInt);
    }, 500)
  }

  render() {
    return (
      <StyledMasonry.Container>
        {[...this.state.masonryBricks]}
      </StyledMasonry.Container>
    );
  }

  swapBrick = number => {
    const nextBrick = this.state.currentBrick + 1;

    const removed = this.state.masonryBricks.splice(number, 1, (
      <StyledMasonry.SquareBrick>
        <StyledMasonry.Image src={this.props.bricks[nextBrick].src} />
      </StyledMasonry.SquareBrick>
    ));

    this.setState({
      currentBrick: nextBrick
    });

    if (nextBrick == this.state.totalBricks) {
      this.setState({
        currentBrick: -1
      })
    }
  }
}
export default MasonryMobile;