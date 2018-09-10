import React, { Component } from 'react';

import { StyledMasonry } from '../styles/styledComponents/blocks';

class MasonryMobile extends Component {
  state = {
    masonryBricks: null,
    totalBricks: this.props.bricks.length - 1,
    currentBrick: null
  }

  componentDidMount() {
    console.log(this.props.bricks);
    const numBricks = 5;
    this.setState({
      masonryBricks: this.props.bricks.slice(0, numBricks).map(brick => {

        if (brick.type === "portrait") {
          return (
            <StyledMasonry.PortraitBrick>
              <StyledMasonry.Image src={brick.src} />
            </StyledMasonry.PortraitBrick>
          )
        } else if (brick.type === "square") {
          return (
            <StyledMasonry.SquareBrick>
              <StyledMasonry.Image src={brick.src} />
            </StyledMasonry.SquareBrick>
          )
        }
      }),
      currentBrick: numBricks - 1
    })

    setInterval(() => {
      let randInt = Math.floor(Math.random() * 2);
      this.swapBrick(randInt);
    }, 2000);
    setTimeout(() => {
      setInterval(() => {
        let randInt = Math.floor(Math.random() * (5 - 2) + 2);
        this.swapBrick(randInt);
      }, 2000);
    }, 1000)
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

    if (number == 0) {
      const removed = this.state.masonryBricks.splice(number, 1, (
        <StyledMasonry.PortraitBrick>
          <StyledMasonry.Image src={this.props.bricks[nextBrick].src} />
        </StyledMasonry.PortraitBrick>
      ));
    }
    else {
      const removed = this.state.masonryBricks.splice(number, 1, (
        <StyledMasonry.SquareBrick>
          <StyledMasonry.Image src={this.props.bricks[nextBrick].src} />
        </StyledMasonry.SquareBrick>
      ));
    }

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