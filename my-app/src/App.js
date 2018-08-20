import React, { Component } from 'react';
// import Header from './components/Header';
import Product from './components/Product';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
   
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Props</a>
                  
              </div>
            </nav>

            <div className="container">
              <div className="row">
                <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Product
                                    name="Apple Iphone 6 plush" 
                                    price="120000"
                            />
                            <Product
                                    name="Apple Iphone 6 plush" 
                                    price="120000"
                            />
                            <Product
                                    name="Apple Iphone 6 plush" 
                                    price="120000"
                            /><Product
                                    name="Apple Iphone 6 plush" 
                                    price="120000"
                            /><Product
                                    name="Apple Iphone 6 plush" 
                                    price="120000"
                            />
                        </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
}

export default App;
