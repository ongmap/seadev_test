import React from 'react'

// Components
import BlockHeader from './BlockHeader'
import BlockContent from './BlockContent'

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

export default BlockOne;
