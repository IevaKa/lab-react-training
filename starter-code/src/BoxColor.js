import React from "react";
 
function BoxColor(props) {
    let val = 'rgb('+ props.r + "," + props.g + "," + props.b +')'
    return (
        <div id="color-box" style={{ backgroundColor: val }}>{val}</div>
    )
}
 
export default BoxColor;