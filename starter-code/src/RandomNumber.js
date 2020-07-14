import React, { Component } from "react";
import './index.css';
 
class Random extends Component {
  render() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
      }
      return (
        <div >
            <p>Random Number between {this.props.min} and {this.props.max} 
            is {getRandomIntInclusive(this.props.min, this.props.max)}</p>
        </div>
      )
    }
}

export default Random;