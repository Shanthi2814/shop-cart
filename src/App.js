import React from 'react'
import Navbar from './Navbar'
import ProductData from './ProductData'; 
import ReactStars from "react-rating-stars-component"; 
import './App.css';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: ProductData,
      cartCount: 0
    }
  }



  
  addToCart = (event) => {
    let index = parseInt(event.target.dataset.id);

    let tempData = this.state.data;
    tempData[index].cart = true;
    this.setState({ cartCount: this.state.cartCount + 1 });
    this.setState({ data: tempData })
  }

  
  removeFromCart = (event) => {
    let index = parseInt(event.target.dataset.id);

    let tempData = this.state.data;
    tempData[index].cart = false;

    if (this.state.cartCount > 0) {
      this.setState({ cartCount: this.state.cartCount - 1 });
    }

    this.setState({ data: tempData })
  }

  render() {
    return (
      <div className="App">
       <Navbar count={this.state.cartCount} /> 
        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row">
            {
              this.state.data.map((item, index) => (
                <div key={item.id} className="col-12 col-sm-12 col-md-4 col-lg-4 pb-2 pt-2">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" className="card-img-top" alt="cartItem" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">$ {item.price}</p>
                      <p className="ps-5 ms-4">
          
                         <ReactStars size={30}        
                            half={false}
                            onChange={newRating => {
                            console.log(newRating);
                          }}
                        />


                      </p>
                      {
                        item.cart === false ?

                          <button className="btn btn-primary" data-id={index} onClick={(event) => this.addToCart(event)}>Add to Cart</button>
                          :

                          <button className="btn btn-secondary" data-id={index} onClick={(event) => this.removeFromCart(event)}>Remove from cart</button>

                      }

                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white">Copyright © Your 2023</p></div>
        </footer>
      </div>
    );
  }
}

export default App;