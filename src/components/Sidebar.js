import React, { Component } from 'react'

class Sidebar extends Component {
  render () {
    return (
      <div className='bg-light' id='sidebar-wrapper'>
        <div className='list-group list-group-flush'>
          <a href='#' className='list-group-item list-group-item-action bg-light'>
            <i className='fa fa-list sidebar-icon'/>
          </a>
          <a href='#' className='list-group-item list-group-item-action bg-light'>
            <i className='fa fa-plus-square sidebar-icon' />
          </a>
          <a href='#' className='list-group-item list-group-item-action bg-light'>
            <i className='fa fa-gear sidebar-icon' />
          </a>
        </div>
      </div>
    )
  }
}

export default Sidebar
