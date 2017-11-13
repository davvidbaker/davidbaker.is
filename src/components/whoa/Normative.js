/**
*
* Normative
*
* To be able to reference the normatives from an external list, we add an id to the inline normative.
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortid from 'shortid';

import Element from './Element';
import plainText from '../../utils/plainText';

function addNormative(statement, id) {
  return {
    type: 'NORMATIVE_ADD',
    statement,
    id,
  };
}

export class Normative extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
    addNormative: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    normatives: PropTypes.array.isRequired,
  };

  componentWillMount() {
    if (
      !this.props.normatives.find(normative => normative.id === this.props.id)
    )
      this.props.addNormative(plainText(this.props.children), this.props.id);
  }

  render() {
    return (
      <span
        id={this.props.id}
        ref={ref => {
          this.element = ref;
        }}
      >
        {this.props.children.map(child => {
          return (
            <Element key={shortid.generate()} type={child.type} {...child}>
              {child.children}
            </Element>
          );
        })}

        <style jsx>
          {`
            span {
              transition: background 0.25s;
            }
          `}
        </style>
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNormative: (statement, id) => dispatch(addNormative(statement, id)),
});

export default connect(
  state => ({ normatives: state.whoa.normatives }),
  mapDispatchToProps
)(Normative);
