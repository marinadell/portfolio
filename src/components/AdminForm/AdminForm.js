import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminForm.css';

class AdminForm extends Component {

    state = {
        newProject: {
            project:'',
            date: '',
            tag: '',
            github: '',
            website: '',
            description: '',
        }
      }
    
    // used to get tags for select options
    componentDidMount(){
        this.props.dispatch({type: 'GET_TAGS'})
    }

    //function to set state as text is being typed
    handleChangeFor = propertyName => {
        return (event) => {
          this.setState({
              newProject: {
                ...this.state.newProject,
                [propertyName]: event.target.value,
              }
          })
        }
    }

    //dispatch to redux to update database
    submitButton = (event) => {
        event.preventDefault();
        console.log('Button Clicked');
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
        this.setState({
            newProject: {
                project:'',
                date: '',
                tag: '',
                github: '',
                website: '',
                description: '',
            }
        });
    }

    render (){
        return(
            <form>
                <h3>ADD NEW PROJECT</h3>
                <input type="text" placeholder="Project Name" 
                        onChange={this.handleChangeFor('project')}></input>
                <input type="date" placeholder="Date" 
                        onChange={this.handleChangeFor('date')}></input>
                <select onChange={this.handleChangeFor('tag')}>
                <option>Select Tag</option>
                {this.props.reduxState.tags.map(tags => 
                    <option value={tags.id}>{tags.name}</option>
                    )}
                </select>
                <input type="text" placeholder="Github URL" 
                        onChange={this.handleChangeFor('github')}></input>
                <input type="text" placeholder="Website URL" 
                        onChange={this.handleChangeFor('website')}></input>
                <input type="text" placeholder="Description" className="description"
                        onChange={this.handleChangeFor('description')}></input>
                <br/>
                <button onClick={this.submitButton}>Submit</button>
              </form>
        ) 
    }
}
  
const mapStateToProps = reduxState => ({
    reduxState,
  });
  
export default connect(mapStateToProps)(AdminForm);