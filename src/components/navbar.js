import App from "../App";
import React from "react";
import '../public/Home.css';


const styling = {
  color: 'blue',

}

let myArray = ['testin', 'blogs']
class Navbar extends React.Component {

  render() {

    return (
      <>
        <div class="topnav">
          <a class="active" href="/">Home</a>
          {myArray.map(elm => (
            <a href={elm}>{elm}</a>
          ))}
        </div>
        <h1 id="home">Home</h1>
      </>
    );

  }
}

export default Navbar;
