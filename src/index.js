import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* projectListSaga(action) {
    console.log('Hit the Project List', action);
    try {
      // Attempt retrieving project list, updating the "projects" Reducer
      const response = yield axios.get('/project')
      console.log(response);
      const action = { type: 'SET_PROJECTS', payload: response.data };
      console.log(action);
      yield put(action);
    }
    catch (error) {
      console.log(`Couldn't get list`, error);
    }
}

function* addProjectSaga(action) {
    console.log('Hit the addProjectSaga', action);
    try {
      // Attempt adding a project, then calling projectListSaga
      const postResponse = yield axios.post( '/project', action.payload )
      yield put( {type: 'GET_PROJECTS'})
    }
    catch (error) {
      // Log and alert if an error occurs
      console.log(`Couldn't add Project`, error);
        alert(`Sorry, couldn't add your project. Try again later`);
    }
  }

function* deleteProjectSaga(action) {
    console.log('Hit the deleteProjectSaga', action);
    try {
      // Attempt deleting project, then calling projectListSaga
      yield axios.delete(`/project/${action.payload}`);
      yield put({ type: 'GET_PROJECTS' });
    }
    catch (error) {
      // Log and alert if an error occurs
      console.log(`Couldn't delete Project`, error);
      alert(`Sorry, couldn't delete your project. Try again later`);
    }
}

function* tagListSaga(action) {
    console.log('Hit the Project List', action);
    try {
      // Attempt retrieving tag list, updating the "projects" Reducer
      const response = yield axios.get('/tags')
      console.log(response);
      const action = { type: 'SET_TAGS', payload: response.data };
      console.log(action);
      yield put(action);
    }
    catch (error) {
      console.log(`Couldn't get tag list`, error);
    }
}

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECTS', projectListSaga);
    yield takeEvery('GET_TAGS', tagListSaga);
    yield takeEvery('ADD_PROJECT', addProjectSaga);
    yield takeEvery('DELETE_PROJECT', deleteProjectSaga);
    

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    //console.log(action.type);
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
