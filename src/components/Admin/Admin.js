import React, { Component } from 'react';
import { HashRouter as Link } from "react-router-dom";
import { connect } from 'react-redux';

class Admin extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_TAGS'})
      }

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
                {this.props.reduxState.tags.map(tags => 
                    <option value={tags.id}>{tags.name}</option>
                    )}
                </select>
              </form>
          </div> 
        ) 
    }
}
  
const mapStateToProps = reduxState => ({
    reduxState,
  });
  
  export default connect(mapStateToProps)(Admin);