import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import './AdminTable.css';

class AdminTable extends Component {

    deleteButton = (event) => {
        event.preventDefault();
        console.log('Delete Button Clicked', event.target.value);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: event.target.value })
    }

    render (){
        return(
          <table>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Date Added</td>
                      <td>Action</td>
                  </tr>
              </thead>
              <tbody>
                  {this.props.reduxState.projects.map(project =>
                    <tr key={project.id}>
                        <td>{project.project_name}</td>
                        <td><Moment date={project.date_completed}/></td>
                        <td><button onClick={this.deleteButton} value={project.id}>Delete</button></td>
                    </tr>)}
              </tbody>
          </table>
        ) 
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
  });
  
export default connect(mapStateToProps)(AdminTable);