import React, { Component } from 'react';

class Header extends Component {

  render() {
        var users = [
        {
            id : 1,
            name : 'Nguyen van A',
            age :'19'
        },
        {
            id : 2,
            name : 'Nguyen van 3',
            age :'19'
        },
        {
            id : 3,
            name : 'Nguyen van B',
            age :'19'
        }
    ];

    var elements = users.map((user, index) => {
        return <div key={index}>
                <h2>Ten : {user.name}</h2>
                <h2>Tuoi : {user.age}</h2>
            </div>
    });
    return (
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Title</a>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </nav>
          <div>
              {elements}
          </div>
        </div>
    );
  }
}

export default Header;
