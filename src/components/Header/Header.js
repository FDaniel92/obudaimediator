import React, { Component } from "react";
 
class Header extends Component {
  render() {
    return (
       <header>
           <nav>
               <ul>
                   <li><a href="/">Rólam</a></li>
                   <li><a href="/">Folyamat</a></li>
                   <li><a href="/">Kapcsolat</a></li>
               </ul>
           </nav>
       </header>
    );
  }
}
 
export default Header;