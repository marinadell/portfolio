import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import ProjectList from '../ProjectsList/ProjectList';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount(){
    this.props.dispatch({type: 'GET_PROJECTS'})
  }

  render() {
    return (
      <div className="App">
      <Header />
      <ProjectList />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);