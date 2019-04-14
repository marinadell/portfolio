import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';
import './Admin.css';

class Admin extends Component {
    render (){
        return(
          <div>
              <header>
                  <h1>ADMIN</h1>
                  <Link to="/" className="link">Back to Projects</Link>
              </header>
              <AdminForm />
              <AdminTable />
          </div> 
        ) 
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
  });
  
export default connect(mapStateToProps)(Admin);