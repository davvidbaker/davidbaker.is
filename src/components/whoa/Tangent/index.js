/**
*
* Tangent
*
* A tangent (for now at least), can only contain plain text. This means no normatives, for now at least...
* 
* Gradients across such large svgs can be bad for performance, it appears. That is why I do not fade out
*/

import React from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import styled from 'styled-components';

import WithToggle from '../../WithToggle';
import Popup from '../../Popup';
// import { sideBarTransitionTime } from '../../constants/styles'
import { popupStyle } from './styles';

import plainText from '../../../utils/plainText';

const sideBarTransitionTime = 0.5;

const Span = styled.span`
  display: inline;
  cursor: pointer;
  svg {
    position: absolute;
    display: inline-block;
    pointer-events: none;

    text {
      transform: translateY(1rem);
      pointer-events: painted;
    }
    text:hover {
      fill: steelblue;
    }
  }
`;

class Tangent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      straightLength: 300,
      curveParameter: 200,
      pinToRight: false, // set to true if the popup becomes too narrow
      id: shortid.generate(),
      innerText: plainText(props.children),
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.onResize = this.calculatePath.bind(this);
    window.addEventListener('resize', this.onResize);

    setTimeout(() => {
      this.calculatePath();
    }, 300);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sideBarVisible !== this.props.sideBarVisible) {
      // recalculate tangent paths after the side bar has transitioned
      setTimeout(() => {
        this.calculatePath();
      }, 1000 * Number(sideBarTransitionTime));
    }
  }

  calculatePath() {
    const svgLeft = this.svg && this.svg.getBoundingClientRect().left;
    // TODO this is hacky-ish, could instead use a ref that is passed down down down. Actually maybe this is better
    const postBody =
      document.querySelector('article') &&
      document.querySelector('article').getBoundingClientRect();
    let straightLength = postBody.right - svgLeft - 60;
    if (straightLength < 0) {
      straightLength = 0;
    }

    this.setState(
      {
        straightLength: straightLength > 0 ? straightLength : 0,
        curveParameter:
          straightLength > 200 ? 200 : straightLength < 0 ? 0 : straightLength,
        pinToRight: !(straightLength >= 200),
      },
      this.stateWasSet
    );
  }

  stateWasSet() {
    const textPathRect = this.textPath.getBoundingClientRect();
    this.svg.setAttribute('width', textPathRect.width);
    this.svg.setAttribute('height', textPathRect.height + 20);

    const beyondPage =
      this.svg.getBoundingClientRect().right -
      document.documentElement.clientWidth;
      console.log('beyondPage', beyondPage);
    if (beyondPage > 0) {
      // console.log('beyond page', beyondPage)
      this.setState(
        {
          straightLength: this.state.straightLength - beyondPage - 15,
          curveParameter: this.state.curveParameter - 1,
        },
        this.stateWasSet
      );
    } else {
      // console.log('not beyond page')
      // console.log(this.svg.getBoundingClientRect().right, document.documentElement.clientWidth)
    }
  }

  render() {
    return (
      <Span
        onClick={() =>
          this.props.popupOpen ? this.props.hide() : this.props.show()}
      >
        {this.props.popupOpen && (
          <Popup
            additionalStyles={{
              right: this.state.pinToRight ? 0 : 'unset',
              ...popupStyle,
            }}
          >
            {this.state.innerText}
          </Popup>
        )}
        <svg
          ref={ref => {
            this.svg = ref;
          }}
        >
          <defs>
            <path
              id={this.state.id}
              d={`M 0 0 
                 l ${this.state.straightLength} 0
                 c ${this.state.curveParameter} 0 ${this.state
                .curveParameter} 0 ${this.state.curveParameter} 200
                 l 0 3000`}
            />
          </defs>
          <text>
            <textPath
              href={`#${this.state.id}`}
              ref={ref => {
                this.textPath = ref;
              }}
            >
              {this.state.innerText}
            </textPath>
          </text>
        </svg>
        <br />
      </Span>
    );
  }
}

Tangent.propTypes = {};

const enhance = compose(
  connect(state => ({ sideBarVisible: state.sideBarVisible })),
  WithToggle('popupOpen')
);

export default enhance(Tangent);
