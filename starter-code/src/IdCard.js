import React, { Component } from "react";
 
class IdCard extends Component {
  render() {
      return (
        <div id="id-card">
            <div id="profile-pic"><img src={this.props.picture} /></div>
            <div id="bio-info">
            <p><strong>First Name: </strong>{this.props.firstName}</p>
            <p><strong>Last Name: </strong>{this.props.lastName}</p>
            <p><strong>Gender: </strong>{this.props.gender}</p>
            <p><strong>Height: </strong>{this.props.height}</p>
            <p><strong>Birth: </strong>{this.props.birth}</p>
            </div>
        </div>
      )
    }
}

export default IdCard;