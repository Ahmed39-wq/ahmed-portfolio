import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import './resume.scss'

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
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Resume