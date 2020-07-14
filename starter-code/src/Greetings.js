import React, { Component } from "react";
 
class Greetings extends Component {
  render() {
    let greeting = {
        de : "Hallo",
        en : "Hey",
        es : "Hola",
        fr: "Bonjour"
    }
      return (
        <div >
            <p>{greeting[this.props.lang]}, {this.props.children}</p>
        </div>
      )
    }
}

export default Greetings;