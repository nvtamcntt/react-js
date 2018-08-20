import React, { Component } from 'react';
// import Header from './components/Header';
import Product from './components/Product';
import './App.css';

class App extends Component {


    onAddProduct = ()=> {
        alert(this.refs.name.value);
        console.log(this.refs.name);
    }
    render() {
        return (
        <div>
   
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Props</a>
                  
              </div>
            </nav>
            <div className="panel panel-default">
                <div className="panel-body">
                    
                        <div className="form-group">
                            <input type="text" className="form-control" ref="name"/>
                        </div>
            
                        <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>Submit</button>
                </div>
            </div>
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
