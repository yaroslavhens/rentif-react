import React from "react";
import '../menu.css'
import people from "../../../image/people.png"
import manual from "../../../image/manual.png"
import fuel from "../../../image/fuel.png"

const carcard = props => {

return (
    
<div className="itemCard" >
<img src={props.image}  className="CardImage " alt="CardImage" />
<h1 className="name" >{props.name}    <div className="priceCarButton"> <span> від </span> {props.pricethree} Є</div>  </h1>
<p className="blockinfobox ipeople"> <img src={people} alt="..."/> <br/> {props.doors} </p>
<p className="blockinfobox imanual"> <img src={manual} alt="..."/> <br/>   {props.kkp} </p>
<p className="blockinfobox ifuel"> <img src={fuel} alt="..."/> <br/>   {props.fuel} </p>
 
</div>
) 



}
export default  carcard