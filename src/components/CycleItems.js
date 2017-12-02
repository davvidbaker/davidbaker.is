/**
 * This is not that React-y of a component. I am manipulating the DOM by hand, because dealing with state and render and timing was getting complicated.
 */

import React, { Component } from 'react';
import styled from 'styled-components';

const LI = styled.li`
  font-family: monospace;
  list-style: none;

  .title {
    font-weight: bold;
  }
`;
class CycleItems extends Component {
  constructor(props) {
    super(props);

    this.characterInd = 0;
    this.itemInd = 1;
    // add a space to the end of the items (for text-breaking purposes)
    this.items = this.props.items.map(item => `${item} `);

    this.timeouts = [];
    this.raf = null;
  }

  componentDidMount() {
    this.nextCharacter();
  }

  componentWillUnmount() {
    console.log('unmounting');
    this.timeouts.forEach(timeout => clearTimeout(timeout));
    window.cancelAnimationFrame(this.raf);
  }

  nextCharacter() {
    console.log('nextCharacter called');
    this.raf = window.requestAnimationFrame(() => {
      let letter;
      // if (this.text && this.text.textContent) {
      if (this.text.textContent.length - 1 < this.characterInd) {
        // if the current textContent doesn't have a character at character ind, just add to textContent
        letter = letterThatMightBeAnEmoji(
          this.items[this.itemInd].substr([this.characterInd], 2)
        );
        this.text.textContent += letter;
      } else if (this.characterInd < this.items[this.itemInd].length) {
        letter = letterThatMightBeAnEmoji(
          this.items[this.itemInd].substr([this.characterInd], 2)
        );
        // replace the text at that ind
        this.text.textContent =
          this.text.textContent.substr(0, this.characterInd) +
          letter +
          this.text.textContent.substr(
            this.characterInd + letter.length,
            this.text.textContent.length - this.characterInd - letter.length
          );
      } else {
        this.text.textContent = `${this.text.textContent.substr(
          0,
          this.characterInd
        )}${' '}${this.text.textContent.substr(
          this.characterInd + 1,
          this.text.textContent.length - this.characterInd - 1
        )}`;
      }

      this.characterInd += letter ? letter.length : 1;

      if (
        this.characterInd >= this.items[this.itemInd].length &&
        this.characterInd >= this.text.textContent.length
      ) {
        this.itemInd = (this.itemInd + 1) % this.items.length;
        this.characterInd = 0;
        this.timeouts.push(setTimeout(() => this.nextCharacter(), 1000));
        return;
      }
      this.nextCharacter();
      // }
    });
  }

  render() {
    return (
      <LI>
        <p>
          <span className="title">{this.props.title}</span>{' '}
          <span
            ref={text => {
              this.text = text;
            }}
          />
          <span />
        </p>
      </LI>
    );
  }
}
export default CycleItems;

function letterThatMightBeAnEmoji(str) {
  return str.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)
    ? str.substr(0, 2)
    : str.substr(0, 1);
}
