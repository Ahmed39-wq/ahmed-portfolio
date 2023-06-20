import '../Contact/contact.scss'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'


const Contact = () => {
  return (
    <>
        <Header />
        <main>
            <div className='form-container'>
                <h1>Let's talk</h1>
                <form>
                    <div className='names'>
                        <div className='firstname'>
                            <label htmlFor="">First Name</label>
                            <input type="text" />
                        </div>
                        <div className='lastname'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='email'>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>
                    <div className='subject'>
                        <label htmlFor="">Subject</label>
                        <input type="text" />
                    </div>
                    <div className='message'>
                        <label htmlFor="">Message</label>
                        <textarea  />
                    </div>
                    <button className='send'>Send</button>
                </form>
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Contact