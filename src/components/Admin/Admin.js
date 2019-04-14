import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import AdminForm from '../AdminForm/AdminForm';

class Admin extends Component {
    render (){
        return(
          <div>
              <header>
                  <h1>ADMIN</h1>
              </header>
              <Link to="/">Back to Projects</Link>
              <AdminForm />
          </div> 
        ) 
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
  });
  
export default connect(mapStateToProps)(Admin);