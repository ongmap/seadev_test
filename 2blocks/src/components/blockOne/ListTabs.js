import React from 'react'
import PropTypes from 'prop-types'

import { categories } from '../../services/data.js'

// Component render list tabs of categories
function ListTabs(props) {
  const { tabActive, handlePressTab } = props

  return (
    <div className='list-tabs'>
      <ul className="nav justify-content-center flex-sm-column flex-md-row">
        {
          categories.map((item, index) => {
            const isActive = index === tabActive ? " active" : ""
            return (
              <li key={"tab"+index} className={"nav-item" + isActive}>
                <span onClick={() => handlePressTab(index)} className={isActive}>{item}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

ListTabs.propTypes = {
  tabActive: PropTypes.number,
  handlePressTab: PropTypes.func
}

ListTabs.defaultProps = {
  tabActive: 0,
  handlePressTab: () => {}
};

export default ListTabs
