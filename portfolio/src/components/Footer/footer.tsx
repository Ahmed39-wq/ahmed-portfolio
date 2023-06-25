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
          <h3>Call</h3>
          <span>233 245 985 623</span>
        </div>
        <div className="write">
          <h3>Write</h3>
          <span>info@ahmedjr.com</span>
        </div>
        <div className="follow">
          <h3>Follow</h3>
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