/**
 *
 * Search
 *
 * Only accepts plain text. Should be a Block Level Element, despite how whoa-loader might be set up.
 */

import React from 'react';
import PropTypes from 'prop-types';
import plainText from '../../utils/plainText';
import styled from 'styled-components';

const Form = styled.form`
  font-family: arial, sans-serif;
  width: 100%;
  text-align: center;
  display: inline-block;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  margin: 5px 0;
  input {
    height: 100%;
    width: 100%;
    text-align: center;
    outline: none;
    font-size: 1em;
    padding: 5px 0;
    border: 0;

    &:focus {
      /** ⚠️ if I want to do an animation, should use opacity */
      box-shadow: 0 2px 8px 2px rgba(0, 0, 0, 0.16),
        0 0 0 1px rgba(0, 0, 0, 0.08);
    }
  }
`;
class Search extends React.Component {
  state = { textValue: '' };

  componentWillMount() {
    this.setState({ textValue: plainText(this.props.children[0]) });
  }

  onChange(evt) {
    evt.preventDefault();
    this.setState({ textValue: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const searchString = `https://www.google.com/search?q=${
      this.state.textValue
    }`;

    const strWindowFeatures =
      'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';

    window.open(searchString, 'WindowName', strWindowFeatures);
  }

  onFocus(evt) {
    evt.target.parentElement.className += ' inFocus';
  }

  onBlur(evt) {
    evt.target.parentElement.className = evt.target.parentElement.className.replace(
      /\sinFocus/,
      ''
    );
  }

  render() {
    return (
      <Form
        onSubmit={evt => {
          this.onSubmit(evt);
        }}
        action=""
      >
        <input
          type="text"
          value={this.state.textValue}
          ref={input => {
            this.textInput = input;
          }}
          style={{ maxWidth: '100%' }}
          // TODO this is hacky
          onChange={evt => {
            this.onChange(evt);
          }}
          onFocus={this.onFocus}
          onMouseEnter={this.onFocus}
          onMouseLeave={this.onBlur}
          onBlur={this.onBlur}
        />
      </Form>
    );
  }
}

Search.propTypes = {
  children: PropTypes.array,
};

export default Search;
