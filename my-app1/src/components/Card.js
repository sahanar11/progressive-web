import React, { Component } from 'react';
import "../style/card.css";


class Card extends Component {
    render() {
      return (
        <div className="Card">
            <div className="Card_Title">{this.props.title}</div>
            {this.props.children}
        </div>
      );
    }
}
  
export default Card;
