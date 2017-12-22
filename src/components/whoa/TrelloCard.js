import React, { Component } from 'react';

class TrelloCard extends Component {
  componentWillMount() {
    if (typeof document !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://p.trellocdn.com/embed.min.js';
      script.async = true;

      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <blockquote className="trello-card" __html>
          <a href={this.props.src}>{this.props.alt}</a>
        </blockquote>
      </div>
    );
  }
}

export default TrelloCard;
