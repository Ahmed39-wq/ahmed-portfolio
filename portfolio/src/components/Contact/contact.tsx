import '../Contact/contact.scss'
import Header from '../Header/header'


const Contact = () => {
  return (
    <main>
        <Header />
        <div className='form-container'>
        {/* <h1>Let's Talk</h1> */}
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
                <button>Send</button>
            </form>
        </div>
    </main>
  )
}

export default Contact