import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Admin extends Component {
    render (){
        return(
          <div>
              <header>
                  <h1>ADMIN</h1>
              </header>
              <Link to="/">Back to Projects</Link>
              <form>
                <h3>ADD NEW PROJECT</h3>
                <input type="text" placeholder="Project Name"></input>
                <input type="date" placeholder="Date"></input>
                <select>
                    
                </select>
              </form>
          </div> 
        ) 
    }
}
  
  export default Admin;