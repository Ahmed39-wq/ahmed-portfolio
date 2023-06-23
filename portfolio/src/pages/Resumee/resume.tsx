import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import Experience from '../../components/Experience/experience'
import './resume.scss'
import Education from '../../components/Education/education'

const Resume = () => {
  return (
    <>
    <Header />
    <div className='resume-container'>
      <section className='resumee'>
        <div className="resume-title">
          <h1>Resume</h1>
        </div>
        <div className="experience">
          <h1>Experience</h1>
          <button>Download CV</button>
        </div>
        <Experience />
        <div className="education">
          <h1>Education</h1>
          <Education />
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Resume