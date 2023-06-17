import React from "react";

const Cards =({item,handleClick})=>{
    const {name,rating,price,img} = item;
   
    
    return(
        <div className="cards">
            <div className="image-box">
                <img src={img} alt=""/>
            </div>
            <div className="details">
                
                    <p style={{fontSize:21}}><strong>{name}</strong></p>
                    <p>{rating}</p>
                    <p>{price}</p>
                    
                
                <button onClick={()=>handleClick(item+1)}>Addtocart</button>
                
                

            </div>
        </div>
    )
}
export default Cards;
