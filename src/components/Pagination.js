import React from 'react'

export default function Pagination (props) {
  return (
    <ul className='d-flex justify-content-center pagination'>
      <li className='page-item'>
        <a
          className='page-link'
          href='#'
          onClick={props.previous}
          aria-label='Previous'
        >
          <span aria-hidden='true'>&laquo;</span>
          <span className='sr-only'>Previous</span>
        </a>
      </li>

      <li className='page-item'>
        <a
          className='page-link'
          href='#'
          onClick={props.next}
          aria-label='Next'
        >
          <span aria-hidden='true'>&raquo;</span>
          <span className='sr-only'>Next</span>
        </a>
      </li>
    </ul>
  )
}
