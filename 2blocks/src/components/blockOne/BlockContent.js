import React from 'react'

// Component
import ListTabs from './ListTabs'
import Article from './Article'

// Import data from services files
import { listArticles } from '../../services/data.js'

// This component render content of Block One page
class BlockContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabActive: 0
    }
  }

  /**
   * This function to handle when press on list tab items
   * @param {Number} index - The index of tab
   */
  handlePressTab = (index) => {
    console.log('index')
    this.setState({
      tabActive: index
    })
  }

  render() {
    const { tabActive } = this.state
    return (
      <div className='block-content'>
        <ListTabs tabActive={tabActive} handlePressTab={this.handlePressTab} />
        <Article data={listArticles[tabActive]} />
      </div>
    )
  }
}

export default BlockContent
