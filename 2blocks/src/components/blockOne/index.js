import React from 'react'

// Components
import BlockHeader from './BlockHeader'
import BlockContent from './BlockContent'

// This component render all Block One page
function BlockOne() {
  return (
    <div className='block-one'>
      <div className='container'>
        <BlockHeader />
        <BlockContent />
      </div>
    </div>
  );
}

export default BlockOne
