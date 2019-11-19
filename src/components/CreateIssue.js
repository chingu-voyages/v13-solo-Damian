import React, { Component } from 'react'

class CreateIssue extends Component {
  render () {
    // add flag readonly and add attribute disabled
    //   <select id="xxx" name="xxx" class="input-medium" disabled>

    return (
      <form className="issue-form mt-1">
        <div className='form-group'>
          <label for='exampleFormControlSelect1'>Project</label>
          <select
            className='form-control'
            id='projectSelect'
            value='Test Project'
          >
            <option value='test'>Test Project</option>
          </select>
        </div>

        <div className='form-group'>
          <label for='titleIssue'>Title</label>
          <input
            type='text'
            className='form-control'
            id='titleIssue'
            placeholder=''
          />
        </div>

        <div className='form-group'>
          <label for='prioritySelect'>Priority</label>
          <select className='form-control' id='prioritySelect'>
            <option value='critical'>Critical</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className='form-group'>
          <label for='descriptionTextArea'>Description</label>
          <textarea
            className='form-control'
            id='descriptionTextArea'
            rows='3'
          />
        </div>
        <div className='form-group'>
          <label for='statusSelect'>Status</label>
          <select className='form-control' id='statusSelect'>
            <option value='new'>New</option>
            <option value='inprogress'>In Progress</option>
          </select>
        </div>

        <div className='form-group'>
          <label for='assignSelect'>Assign</label>
          <select className='form-control' id='assignSelect'>
            <option value='damian'>Damian</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type='submit' className='btn btn-primary'>
          Create
        </button>
      </form>
    )
  }
}
export default CreateIssue
