import React from "react";

const Cards =({item,handleClick})=>{
    const {name,rating,price,img} = item;
   
    
    return(
        <div className="cards">
            <div className="image-box">
                <img src={img} alt=""/>
            </div>
            <div className="details">
                
                    <p><strong>{name}</strong></p>
                    <p>{rating}</p>
                    <p>{price}</p>
                    
                
                <button onClick={()=>handleClick(item+1)}><strong>Addtocart</strong></button>
                
                

            </div>
        </div>
    )
}
export default Cards;