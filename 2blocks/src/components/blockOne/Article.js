import React from 'react'
import PropTypes from 'prop-types'

/**
 * This component implement Article block
 */
function Article(props) {
  const { data } = props
  const {title, content, button, image} = data
  const orderClass = image.isLeft ? " order-md-first" : " order-md-2"

  // Render list of paragraphs based on Article's content data
  const paragraphs = content.map((item, index) => {
    return (
      <p key={"paragraph"+index}>{item}</p>
    )
  })

  return (
    <div className="block-article">
      <div className="row">
        <div className="col-lg-6 col-md-5 col-sm-12 order-md-1 order-2 align-self-center">
          <div className="article-body">
            <h5 className="article-title">{title}</h5>
            <div className="article-text">
              {paragraphs}
            </div>

            {button && (
              <span className="btn-readmore">{button.name}</span>
            )}
          </div>
        </div>

        <div className={"col-lg-6 col-md-7 col-sm-12 order-1" + orderClass}>
          <img className="article-img" src={image.src} alt={image.alt}/>
        </div>
      </div>
    </div>
  )
}

Article.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.array,
    button: PropTypes.object,
    image: PropTypes.object
  })
}

Article.defaultProps = {
  data: {
    content: [
      "Article content here"
    ],
    button: {
      name: "Button name here"
    },
    image: {}
  }
}

export default Article
