import '../Header/header.scss'

const Header = () => {
  return (
    <div className="header">
      <div className="name">
        <span>Maya Nelson </span> | Product Manager
      </div>
      <div className="options">
        <li>About Me</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact</li>
      </div>
    </div>
  )
}

export default Header