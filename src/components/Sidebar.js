import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Sidebar extends Component {
  render () {
    return (
      <div className='bg-light' id='sidebar-wrapper'>
        <div className='list-group list-group-flush'>
          <Link
            className='list-group-item list-group-item-action bg-light'
            to='/'
          >
            <i className='fa fa-list sidebar-icon' />
          </Link>
          <Link
            className='list-group-item list-group-item-action bg-light'
            to='/create'
          >
            <i className='fa fa-plus-square sidebar-icon' />
          </Link>
          <Link
            className='list-group-item list-group-item-action bg-light'
            to='/settings'
          >
            <i className='fa fa-gear sidebar-icon' />
          </Link>
        </div>
      </div>
    )
  }
}

export default Sidebar
