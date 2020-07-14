import React from "react";
 
function CreditCard(props) {
    let imageURL = "./img/visa.png";
    if(props.type === "Master Card") imageURL = "./img/master-card.svg";
    return (  
        <div id = "credit-card" style={{ 
            backgroundColor: props.bgColor,
            color: props.color
            }}>
            <div id="card-logo">
                <img src={ imageURL } />
            </div>
            <div>
                <p><span>&#8226;</span><span>&#8226;</span><span>&#8226;</span><span>&#8226;</span> <span>&#8226;</span><span>&#8226;</span><span>&#8226;</span><span>&#8226;</span> <span>&#8226;</span><span>&#8226;</span><span>&#8226;</span><span>&#8226;</span> {props.number.substr(props.number.length - 4)}</p>
            </div>
            <div>
                <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
                <p>{props.owner}</p>
            </div>
            
        </div>
    )
}
 
export default CreditCard;
