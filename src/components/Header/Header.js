import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render (){
        return(
          <header className="header">
            <img src="/images/mari.jpg" className="header-photo"/>
            <h1>Amareya Allen-Dabney</h1>
          </header>  
        ) 
    }
}
  
  export default Header;