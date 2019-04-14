import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminTable extends Component {
    render (){
        return(
          <table>
              <thead>
                  <tr>
                      <td>Name</td>
                      <td>Action</td>
                  </tr>
              </thead>
              <tbody>
                  {this.props.reduxState.projects.map(project =>
                    <tr>
                        <td>{project.project_name}</td>
                        <td><button>Delete</button></td>
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