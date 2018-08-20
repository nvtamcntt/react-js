import React, { Component } from 'react';

class Product extends Component {
  constructor(props){
      super(props);
      this.onAddtoCart4 = this.onAddtoCart4.bind(this);
  }
  // onAddtoCart (){
  //   alert(this.props.name);
  // }
  // cach 1
  onAddtoCart2 = () => {
    alert(this.props.name);
  }
  // cach 2
 onAddtoCart3 (txt){
    alert(txt);
  }
  // cach 3
  onAddtoCart4 (txt){
    alert(this.props.name);
  }
  render() {
    return (
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
             <div className="thumbnail">
               <div className="caption">
                 <h3>{this.props.name}</h3>
                 <h3>{this.props.price}</h3>
                 <h3>{this.props.price}</h3>
                 <a className="btn btn-primary" onClick={this.onAddtoCart2}> Mua ngay</a>
                 <a className="btn btn-primary" onClick={()=>this.onAddtoCart3('dddd')}> Mua ngay</a>
                 <a className="btn btn-primary" onClick={this.onAddtoCart4}> Mua ngay</a>
               </div>
             </div>
           </div>

    );
  }
}

export default Product;
