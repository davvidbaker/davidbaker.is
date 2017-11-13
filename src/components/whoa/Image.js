/**
*
* Image
*
*/

import React from 'react';
import PropTypes from 'prop-types';

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

  componentWillMount() {}

  loadedImage() {
    this.setState({ showBlur: false });
  }

  render() {
    // don't do the blur thing with svgs, which are don't have a little blur thumbnail
    if (this.props.src.match(/.*\.svg$/)) {
      return (
        <img
          src={this.props.src}
          alt={`missing image ❗ ${this.props.alt || this.props.src} ❗`}
        />
      );
    }

    // if we have specified a size in the image url, use it
    const match = this.props.src.match(/_s=(\d+)w(\d+)h/);
    const blurId = `${this.props.src.replace(/\/|=|\./g, '')}-blur`;
    console.log('match', match);
    console.log(blurId);
    let visible = true;
    if (match) {
      return (
        <div
          style={{
            maxWidth: '100%',
            overflowY: 'hidden'
          }}
        >

          <img
            id={blurId}
            className="blur"
            src={this.props.src.replace(/(\.\w\w\w)$/, '_blur$1')}
            alt={`missing image ❗ ${this.props.alt || this.props.src} ❗`}
            style={{
              width: `${match[1]}px`,
              opacity: this.state.showBlur ? 1 : 0,
            }}
          />

          <img
            src={this.props.src}
            alt={`❗ ${this.props.alt || this.props.src} ❗`}
            style={{opacity: this.state.showBlur ? 0 : 1}}
            onLoad={() => {
              this.loadedImage();
            }}
          />

          <style jsx>
            {`

          img {
            max-width: 100%;
            transition: 0.1s 1s;
          }

          .blur {
            transition: opacity 0.5s 1s;
            position: absolute;
            z-index: 2;
          }

        `}
          </style>
        </div>
      );
    }

    return (
      <img
        style={{ maxWidth: '100%' }}
        src={this.props.src}
        alt={`❗ ${this.props.alt || this.props.src} ❗`}
      />
    );
  }
}
export default Image;
