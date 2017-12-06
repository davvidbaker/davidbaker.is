/**
*
* Image
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    transition: 0.1s 1s;
  }

  .blur {
    transition: opacity 0.5s 1s;
    position: absolute;
    z-index: 2;
    pointer-events: none;
  }
`;

class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      showBlur: true,
    };
  }

  loadedImage() {
    this.setState({ showBlur: false });
  }

  render() {
    // don't do the blur thing with svgs, which are don't have a little blur thumbnail
    if (this.props.src.match(/.*\.svg$/)) {
      return (
        <Wrapper>
          <img
            src={this.props.src}
            alt={`missing image ❗ ${this.props.alt || this.props.src} ❗`}
          />
        </Wrapper>
      );
    }

    // if we have specified a size in the image url, use it
    let visible = true;
    if (this.props.blur) {
      return (
        <Wrapper
          style={{
            maxWidth: '100%',
            overflowY: 'hidden',
          }}
        >
          <img
            id={this.props.blur}
            className="blur"
            src={this.props.blur}
            alt={`missing image ❗ ${this.props.alt} ❗`}
            style={{
              width: `${this.props.width}px`,
              opacity: this.state.showBlur ? 1 : 0,
            }}
          />

          <img
            src={this.props.src}
            alt={`❗ ${this.props.alt || this.props.src} ❗`}
            style={{ opacity: this.state.showBlur ? 0 : 1 }}
            onLoad={() => {
              this.loadedImage();
            }}
          />
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <img
          style={{ maxWidth: '100%' }}
          src={this.props.src}
          alt={`❗ ${this.props.alt || this.props.src} ❗`}
        />
      </Wrapper>
    );
  }
}
export default Image;
