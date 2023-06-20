import '../Header/header.scss'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        <span>Maya Nelson </span> | Product Manager
      </div>
      <div className="options">
        <NavLink to={"/"} id='nav-links'>
          About Me
        </NavLink>
        <NavLink to={"/resume"} id='nav-links'>
          Resume
        </NavLink>
        <NavLink to={"/projects"} id='nav-links'>
          Projects
        </NavLink>
        <NavLink to={"/contact"} id='nav-links'>
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Header