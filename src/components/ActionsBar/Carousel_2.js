import React, { Component } from 'react';
import Slider from 'react-slick';
import { Container } from './Carousel.style';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default class Carousel extends Component {
  slideNext = () => {
    console.log('hello');
    this.props.slickNext();
  };
  render() {
    const nextArrow = <img src="http://placehold.it/100x100" />;
    var settings = {
      dots: true
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <img onClick={this.slideNext} src="http://placehold.it/400x200" />
          </div>
          <div>
            <img src="http://placehold.it/400x200" />
          </div>
          <div>
            <img src="http://placehold.it/400x200" />
          </div>
          <div>
            <img src="http://placehold.it/400x200" />
          </div>
        </Slider>
      </Container>
    );
  }
}
