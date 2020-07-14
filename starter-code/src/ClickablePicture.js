import React, { Component } from "react";
 
class ClickablePicture extends Component {
    state = {
        clicked: true
    };
    
    clickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    };

    render() {
        return (
            <div>
                <img src={this.state.clicked ? this.props.img : this.props.imgClicked } onClick={this.clickHandler} />
            </div>
        )
    }
}

export default ClickablePicture;