import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectList.css';
import Header from '../Header/Header';

class ProjectList extends Component {
    render (){
        return(
            <div>
                <Header />
                {this.props.reduxState.projects.map(project=> 
                <div className="card" key={project.id}>
                    <img src={project.thumbnail} alt={project.project_name}/>
                    <div className="container">
                        <h2>{project.project_name}</h2>
                        <p>{project.description}</p>
                        <a href={project.github}>Github</a>
                        <p className="tag">{project.name}</p>
                    </div>
                </div>)}
            </div>
        ) 
    }
}
  
const mapStateToProps = reduxState => ({
    reduxState,
  });
  
export default connect(mapStateToProps)(ProjectList);

