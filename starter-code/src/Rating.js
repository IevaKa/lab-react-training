import React, { Component } from "react";
 
class Rating extends Component {
  render() {
      let a = Number(this.props.children).toFixed()
      let stars;
      if (a == 0) {
        stars = "☆☆☆☆☆";
      }
      if (a == 1) {
        stars = "★☆☆☆☆";
      }
      if (a == 2) {
        stars = "★★☆☆☆";
      }
      if (a == 3) {
        stars = "★★★☆☆";
      }
      if (a == 4) {
        stars = "★★★★☆";
      }
      if (a == 5) {
        stars = "★★★★★";
      }

      return (
        <div>
            <p style={{ fontSize: "50px"}}>{ stars }</p>
        </div>
      )
    }
}

export default Rating;