import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class App extends Component {
  // Renders the entire app on the DOM
  componentDidMount(){
    this.props.dispatch({type: 'GET_CHARACTERS'})
  }

  render() {
    return (
      <div className="App">
      <Header />
      
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);