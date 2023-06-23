import '../Contact/contact.scss'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import EmailForm from '../../components/EmailForm/emailForm'


const Contact = () => {
  return (
    <>
        <Header />
        <main>
            <div className='form-container'>
                <h1>Let's talk</h1>
                <EmailForm />
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Contact