import * as React from "react";
import Masonry from "react-masonry-component";
import { PortraitPhoto } from "../styles/styledComponents/elements";


const masonryOptions = {
  transitionDuration: 10,
  itemSelector: ".grid-item",
  columnWidth: 100
};

const elements = [
  {
    src: "https://placekitten.com/500/500",
    cls: "grid-item--width2"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/488",
    cls: "grid-item--width2"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/488",
    cls: "grid-item--width2"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  },
  {
    src: "https://placekitten.com/290/240",
    cls: "grid-item--std"
  }
];

const replacementPicsPortrait = [
  "https://placehold.it/300x600",
  "https://placekitten.com/300/600"
]

class Gallery extends React.Component {
  state = {
    childElements: elements.map(function (element) {
      return (
        <div style={{ width: '300px', height: '248px' }}>
          <div className={`grid-item ${element.cls}`} style={{ background: `url(${element.src}) center center / cover` }}></div>
        </div>
      );
    })
  }

  swapPortraitPics = number => {
    setTimeout(() => {
      let randInt = Math.floor(Math.random() * 2);
      const removed = this.state.childElements.splice(number, 1, (
        <div className={`grid-item grid-item--width2`}>
          <img src={replacementPicsPortrait[randInt]} />
        </div>
      ));

      this.setState({
        childElements: this.state.childElements
      });
    }, 1000)
  }

  swapSquarePics = number => {
    setTimeout(() => {

      const removed = this.state.childElements.splice(number, 1, (
        <div className={`grid-item grid-item--std`}>
          <img src="https://placehold.it/290x240" />
        </div>
      ));

      this.setState({
        childElements: this.state.childElements
      });
    }, 1000)
  }

  render() {
    setTimeout(() => {
      this.swapPortraitPics(0)
    }, 2000);
    // setTimeout(() => {
    //   this.swapPortraitPics(4)
    // }, 3000);
    // setTimeout(() => {
    //   this.swapPortraitPics(7)
    // }, 3000);

    // setTimeout(() => {
    //   let randInt = Math.floor(Math.random() * 3) + 1;
    //   console.log(randInt);
    //   this.swapSquarePics(randInt);
    // }, 1000);
    // setTimeout(() => {
    //   let randInt = Math.floor(Math.random() * 2) + 5;
    //   console.log(randInt);
    //   this.swapSquarePics(randInt);
    // }, 1000);
    // setTimeout(() => {
    //   let randInt = Math.floor(Math.random() * 4) + 8;
    //   console.log(randInt);
    //   this.swapSquarePics(randInt);
    // }, 1000);


    return (
      <Masonry
        options={masonryOptions} //
        ref={c => (this.masonry = this.masonry || c.masonry)}
      >
        {[...this.state.childElements]}
      </Masonry>
    );
  }
}

export default Gallery;
