import React, { Component } from 'react';
import { StyledMasonry } from '../styles/styledComponents/blocks';

class Masonry extends Component {
  state = {
    masonryBricks: null,
    totalBricks: this.props.bricks.length - 1,
    currentBrick: null
  }

  componentDidMount() {
    const numBricks = 15
    this.setState({
      masonryBricks: this.props.bricks.slice(0, numBricks).map(brick => {
        // if (brick.type === "portrait") {
        //   return (
        //     <StyledMasonry.PortraitBrick>
        //       <StyledMasonry.Image src={brick.src} />
        //     </StyledMasonry.PortraitBrick>
        //   )
        // } else if (brick.type === "square") {
        return (
          <StyledMasonry.SquareBrick>
            <StyledMasonry.Image src={brick.src} />
          </StyledMasonry.SquareBrick>
        )
        // }
      }),
      currentBrick: numBricks - 1
    })

    //swaps a brick from of one the columns every second.
    let iterator = 0;
    let randInt = null;
    setInterval(() => {
      switch (iterator) {
        case 0:
          randInt = Math.floor(Math.random() * 5);
          iterator += 1;
          break;
        case 1:
          randInt = Math.floor(Math.random() * (10 - 5) + 5);
          iterator += 1;
          break;
        case 2:
          randInt = Math.floor(Math.random() * (15 - 10) + 10);
          iterator = 0;
          break;
        default:
          break;
      }
      this.swapBrick(randInt);
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

    // if (number == 0 || number == 7 || number == 9) {
    //   const removed = this.state.masonryBricks.splice(number, 1, (
    //     <StyledMasonry.PortraitBrick>
    //       <StyledMasonry.Image src={this.props.bricks[nextBrick].src} />
    //     </StyledMasonry.PortraitBrick>
    //   ));
    // }
    // else {
    const removed = this.state.masonryBricks.splice(number, 1, (
      <StyledMasonry.SquareBrick>
        <StyledMasonry.Image src={this.props.bricks[nextBrick].src} />
      </StyledMasonry.SquareBrick>
    ));
    // }

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