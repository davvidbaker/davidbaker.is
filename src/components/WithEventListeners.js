import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WithEventListeners extends Component {
  // 🤔 should event listeners be bound in componentDidMount or constructor?
  // I think constructor? But what if DOM element doesn't yet exist...
  // see https://reactjs.org/docs/react-component.html#constructor
  constructor(props) {
    super(props);
    props.eventListeners &&
      props.eventListeners.forEach(([evt, func]) => {
        props.node.addEventListener(evt, func);
      });
  }

  componentWillUnmount() {
    this.props.eventListeners.forEach(([evt, func]) => {
      this.props.node.removeEventListener(evt, func);
    });
  }

  render() {
    return this.props.children();
  }
}

WithEventListeners.propTypes = {
  // eventListeners: [string, () => mixed][],
  eventListeners: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  children: PropTypes.func.isRequired,
  node: PropTypes.oneOfType([
    PropTypes.instanceOf(HTMLDocument),
    PropTypes.instanceOf(HTMLElement),
  ]).isRequired,
};

export default WithEventListeners;
