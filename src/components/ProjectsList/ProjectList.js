import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render (){
        return(
            <div>
                {this.props.reduxState.projects.map(project=> 
                <div className="card" key={project.id}>
                    <img src={project.thumbnail} alt={project.project_name}/>
                    <div className="container">
                        <h3>{project.project_name}</h3>
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
  
export default connect(mapStateToProps)(Header);

        // <ul>
        //     {this.props.reduxState.projects.map(project=>
        //     <li><img src={project.thumbnail}/> {project.project_name} with {project.name}</li>)}
        // </ul> 

