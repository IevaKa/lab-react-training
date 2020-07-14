import React, { Component } from "react";
 
class LikeButton extends Component {
    state = {
        clickCount: 0,
        colors: ["purple", "blue", "green", "yellow", "orange", "red"]
    };
    
    clickHandler = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
    };

    render() {
        const styling = {
            backgroundColor: this.state.colors[this.state.clickCount % 6],
            width: '50px',
            color: 'white'
        }

        return (
            <div style={{ display: 'inline-block' }}>
                <button style={ styling } onClick={this.clickHandler}>{ this.state.clickCount } likes</button>
            </div>
        )
    }
}

export default LikeButton;