import '../Profile/profile.scss'
import Facebook from '../../assets/facebook-app-symbol.png'
import Twitter from '../../assets/twitter.png'
import LinkedIn from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import { Link } from 'react-router-dom'

const Profile = () => {

  return (
    <div>
        <div className="profile">
            <div className='profile-info'>
                <div className="profile-pic">
                </div>
                <div className="role">
                    <h1>Ahmed Jr</h1>
                    <span>Product Manager</span>
                </div>
            </div>
            <div className="icon">
              <Link to={"https://www.facebook.com/profile.php?id=100012497585396"}>
                <img src={Facebook} alt="" />  
              </Link>
              <Link to={"https://twitter.com/home"}>
                <img src={Twitter} alt="" /> 
              </Link>
              <Link to={""}>
                <img src={LinkedIn} alt="" />  
              </Link>
              <Link to={""}>
                <img src={Instagram} alt="" />
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Profile