import React from 'react'

// Component
import ListTabs from './ListTabs'
import Article from './Article'

// Header of Block One
function BlockContent() {
  return (
    <div className='block-content'>
      <ListTabs />
      <Article />
    </div>
  )
}

export default BlockContent
