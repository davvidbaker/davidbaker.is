import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Element from './Element';

class Whoa extends Component {
  static propTypes = {
    content: PropTypes.object,
  };

  state = { hasError: false };

  componentDidCatch(error, info) {
    console.log(`WHOA CAUGHT💥`, error, info);
    this.setState({ hasError: true, error: { error, info } });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // const nextContent = nextProps.content || nextProps.children
    // const currentContent = this.props.content || this.props.children
    // if (nextContent.children.length === currentContent.children.length) {
    //   return false
    // }

    // ⚠️ I don't think this is a good idea, but I was hitting a bug when I didn't do this, so this was quick fix to avoid bug, but probably stopping hot reloading, at the least. Buuuut, it might actually be what I want to do really because I don't want to reparse the whole AST, which this does.
    return false;
  }

  render() {
    return this.state.hasError ? (
      <h1>{JSON.stringify(this.state.error)}</h1>
    ) : (
      <Fragment>
        {this.props
          .children()
          .slice(3) /* 💁 this slices off the frontmatter */
          .map(child => <Element key={shortid.generate()} {...child} />)}
      </Fragment>
    );
  }
}

export default Whoa;
