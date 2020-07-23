import React from 'react'
import digitalMarketing from '../../assets/digital-marketing.jpg';

// Header of Block One
class Article extends React.Component {
  render() {
    return (
      <div className="block-article">
        <div className="row">
          <div className="col-lg-6 col-md-5 col-sm-12 order-md-1 order-2 align-self-center">
            <div className="article-body">
              <h5 className="article-title">Introducing Digital Marketing</h5>
              <div className="article-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <br/>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>

              <span className="btn-readmore">read more</span>
            </div>
          </div>

          <div className="col-lg-6 col-md-7 col-sm-12 order-md-2 order-1">
            <img className="article-img" src={digitalMarketing} alt="Introducing Digital Marketing"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Article
