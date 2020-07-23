import React from 'react'

// ListTabs component
function ListTabs() {
  return (
    <div className='list-tabs'>
      <ul className="nav justify-content-center flex-sm-column flex-md-row">
        <li className="nav-item active">
          <span className="active" href="#">Design</span>
        </li>
        <li className="nav-item">
          <span className="" href="#">Development</span>
        </li>
        <li className="nav-item">
          <span className="" href="#">Photography</span>
        </li>
      </ul>
    </div>
  )
}

export default ListTabs
