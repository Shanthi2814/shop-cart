import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
function App() {
  const [show,setShow] = useState(true);
  const [cart,setCart]=useState([]);

    const handleClick=(item)=>{
        // console.log(item);
       setCart([cart,item]) ;
        // console.log(cart);
    };
  return (
    
    <div>
      <Navbar setShow={setShow}/>
      <div>
      <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
        </header>
      </div>
        {show ? <Body handleClick={handleClick}/>:'cart'}
    </div>
  );
}

export default App;
