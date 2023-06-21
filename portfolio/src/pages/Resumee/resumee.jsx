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
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Resume