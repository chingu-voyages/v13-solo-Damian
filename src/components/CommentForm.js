import React, { Component } from 'react'

class CommentForm extends Component {

    handleOnChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log("FORM STATE CHANGED: " + JSON.stringify(this.state));
      };
    
      handleSubmit = e => {
        e.preventDefault();
        console.log(JSON.stringify("handleSubmit " + { ...this.state }));
        this.props.dispatch(handleAddIssue({ ...this.state }, this.props.user));
        this.props.history.push("/");
      };

    render(){
        return(
            <form className='form-inline' onSubmit={this.handleSubmit}>
                <div className='form-group mb-2'>
                  <i className='fa fa-user issue-view-icon mr-2' />
                  <input
                    type='text'
                    readonly
                    className='form-control'
                    id='comment'
                    value='Add a Comment ... '
                  />
                </div>
                <button type='submit' className='btn btn-primary mb-2 mx-1'>
                  Submit
                </button>
              </form>
        )
    }
}

function mapStateToProps ({ issues, user, comments }) {
    const redirect = !(user && user.accessToken)
  
    return {
      user,
      comments,
      issues,
      redirect
    }
  }
  export default connect(mapStateToProps)(CommentForm)
  