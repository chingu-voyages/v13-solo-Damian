import React, { Component } from "react";

class IssueSearch extends Component {
  render () {
    return (
      <form>
        <div className='form-row align-items-center'>
          <div className='col-sm-3 my-1'>
            <select
              className='custom-select my-1 mr-sm-2'
              id='inlineFormCustomSelectPref'
            >
              <option>Priority...</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='col-sm-3 my-1'>
            <select
              className='custom-select my-1 mr-sm-2'
              id='inlineFormCustomSelectPref'
            >
              <option >Status...</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='col-sm-3 my-1'>
            <input
              type='text'
              className='form-control my-1 mr-sm-2'
              id='inlineFormInputName2'
              placeholder='Contains...'
            />
          </div>
          <div className='col-auto my-1'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }
}
export default IssueSearch;
