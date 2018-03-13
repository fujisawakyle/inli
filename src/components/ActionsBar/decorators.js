import React, { Component } from 'react';
import media from '../../layouts/media';

export default [
  {
    component: class extends React.Component {
      handleClick = e => {
        e.preventDefault();
        this.props.previousSlide();
      };

      getButtonStyles = disabled => ({
        border: 0,
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0 : 1,
        cursor: 'pointer'
      });

      render() {
        return (
          <button
            style={this.getButtonStyles(
              this.props.currentSlide === 0 && !this.props.wrapAround
            )}
            onClick={this.handleClick}
          >
            PREVIOUS
          </button>
        );
      }
    },

    position: 'CenterLeft'
  },
  {
    component: class extends React.Component {
      handleClick = e => {
        e.preventDefault();
        this.props.nextSlide();
      };

      getButtonStyles = disabled => ({
        border: 0,
        background: 'rgba(0,0,0,0.4)',
        color: 'white',
        padding: 10,
        outline: 0,
        opacity: disabled ? 0 : 1,
        cursor: 'pointer'
      });

      render() {
        return (
          <button
            style={this.getButtonStyles(
              this.props.currentSlide + this.props.slidesToScroll >=
                this.props.slideCount && !this.props.wrapAround
            )}
            onClick={this.handleClick}
          >
            NEXT
          </button>
        );
      }
    },

    position: 'CenterRight'
  },
  {
    component: class extends React.Component {
      getIndexes = (count, inc) => {
        const arr = [];
        for (let i = 0; i < count; i += inc) {
          arr.push(i);
        }
        return arr;
      };

      getListStyles = () => ({
        position: 'relative',
        margin: 0,
        top: -10,
        padding: 0
      });

      getListItemStyles = () => ({
        listStyleType: 'none',
        display: 'inline-block'
      });

      getButtonStyles = active => ({
        background: active ? 'white' : 'transparent',
        color: active ? 'rgba(255,255,255, 0.9)' : 'rgba(255,255,255,0)',
        cursor: 'pointer',
        padding: 3,
        margin: '0 10px',
        outline: 0,
        fontSize: 70,
        opacity: active ? 1 : 0.5,
        border: active ? '2.5px solid transparent' : '2.5px solid white',
        borderRadius: '50%'
      });

      render() {
        const indexes = this.getIndexes(
          this.props.slideCount,
          this.props.slidesToScroll
        );
        return (
          <ul style={this.getListStyles()}>
            {indexes.map(index => {
              return (
                <li style={this.getListItemStyles()} key={index}>
                  <button
                    style={this.getButtonStyles(
                      this.props.currentSlide === index
                    )}
                    onClick={this.props.goToSlide.bind(null, index)}
                  >
                    &bull;
                  </button>
                </li>
              );
            })}
          </ul>
        );
      }
    },

    position: 'BottomCenter'
  }
];