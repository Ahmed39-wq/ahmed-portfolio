import './App.scss'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact/contact'
import Homepage from './pages/Homepage/homepage'
import Projects from './pages/Projects/projects'
import Resume from './pages/Resumee/resume'

const App = () => {

  return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
