import '../Profile/profile.scss'
import Facebook from '../../assets/facebook-app-symbol.png'
import Twitter from '../../assets/twitter.png'
import LinkedIn from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import insertImage from '../../assets/image.png'

const Profile = () => {
  return (
    <div>
        <div className="profile">
            <div className='profile-info'>
                <div className="profile-pic">
                  <img src={insertImage} alt="" />
                </div>
                <div className="role">
                    <h1>Maya Nelson</h1>
                    <span>Product Manager</span>
                </div>
            </div>
            <div className="icon">
              <img src={Facebook} alt="" />  
              <img src={Twitter} alt="" /> 
              <img src={LinkedIn} alt="" />  
              <img src={Instagram} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Profile