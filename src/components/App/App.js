import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ProjectList from '../ProjectsList/ProjectList';
import { HashRouter as Router, Route } from "react-router-dom";
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount(){
    this.props.dispatch({type: 'GET_PROJECTS'})
  }

  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path ="/"
          render={(props) => <ProjectList {...props}/>}  />
        <Route path ="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);