import React, { Component } from 'react';
import { StyledMasonry } from '../styles/styledComponents/blocks';

class Masonry extends Component {
  state = {
    masonryBricks: null,
    totalBricks: this.props.bricks.length - 1,
    currentBrick: null
  }

  componentDidMount() {
    const numBricks = 12
    this.setState({
      masonryBricks: this.props.bricks.slice(0, numBricks).map(brick => {
        if (brick.type === "portrait") {
          return (
            <StyledMasonry.PortraitBrick>
              <StyledMasonry.Image src={`https://placehold.it/${brick.src}`} />
            </StyledMasonry.PortraitBrick>
          )
        } else if (brick.type === "square") {
          return (
            <StyledMasonry.SquareBrick>
              <StyledMasonry.Image src={`https://placehold.it/${brick.src}`} />
            </StyledMasonry.SquareBrick>
          )
        }
      }),
      currentBrick: numBricks - 1
    })
    setInterval(() => {
      let randInt = Math.floor(Math.random() * 4);
      this.swapBrick(randInt);
    }, 3000);
    setTimeout(() => {
      setInterval(() => {
        let randInt = Math.floor(Math.random() * (8 - 4) + 4);
        this.swapBrick(randInt);
      }, 3000);
    }, 1000)
    setTimeout(() => {
      setInterval(() => {
        let randInt = Math.floor(Math.random() * (12 - 8) + 8);
        this.swapBrick(randInt);
      }, 3000);
    }, 2000)
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

    if (number == 0 || number == 7 || number == 9) {
      const removed = this.state.masonryBricks.splice(number, 1, (
        <StyledMasonry.PortraitBrick>
          <StyledMasonry.Image src={`http://placehold.it/${this.props.bricks[nextBrick].src}`} />
        </StyledMasonry.PortraitBrick>
      ));
    }
    else {
      const removed = this.state.masonryBricks.splice(number, 1, (
        <StyledMasonry.SquareBrick>
          <StyledMasonry.Image src={`http://placehold.it/${this.props.bricks[nextBrick].src}`} />
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
export default Masonry;