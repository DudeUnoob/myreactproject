import App from "../App";
import React from "react";


const styling ={
    color:'blue',
    
}

let myArray = ['testin', 'blogs']
class Navbar extends React.Component {
   
    render() {
        
        return (
            <ul>
              {myArray.map(animal => (
                
                <li>
                <a href={animal} onClick={() => window.open(`/${animal}`, "_blank")}>{animal}</a>
                </li>
              ))}
            </ul>
          );
    }
}

export default Navbar;
