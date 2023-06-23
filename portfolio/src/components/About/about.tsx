import { Link } from 'react-router-dom'
import '../About/about.scss'

const About = () => {
  return (
    <div>
        <div className="text">
            <h1>Hello</h1>
            <span>Here's who I am and what I do</span>
            <div className='buttons'>
              <Link to={'/resume'}>
                <button className='resume'>Resume</button>
              </Link>
              <Link to={'/projects'}>
                <button className='projects'>Projects</button>
              </Link>
            </div>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            <br></br>I’m a great place for you to tell a story and let your users know a little more about you.
            </p>
        </div>

    </div>
  )
}

export default About