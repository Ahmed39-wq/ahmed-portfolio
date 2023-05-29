// import React from 'react'
import './footer.scss'
// import { Link } from 'react-router-dom'
import Facebook from '../../assets/facebook-app-symbol.png'
import Twitter from '../../assets/twitter.png'
import LinkedIn from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">  
        © 2035 by Abulfail Ahmed Rufai.
      </div>

      <div className="social">
        <div className="call">
          <span>Call</span>
          233 245 985 623
        </div>
        <div className="write">
          <span>Write</span>
          info@ahmedjr.com
        </div>
        <div className="follow">
          <span>Follow</span>
          <div className="icons">
            {/* <Link to="/"> */}
              <img src={Facebook} alt="" />  
            {/* </Link> */}
            {/* <Link to="/"> */}
              <img src={Twitter} alt="" /> 
            {/* </Link> */}
            {/* <Link to="/"> */}
              <img src={LinkedIn} alt="" />  
            {/* </Link> */}
            {/* <Link to="/"> */}
              <img src={Instagram} alt="" />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer