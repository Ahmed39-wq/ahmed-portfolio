import Header from "../components/Header/header"
import Footer from "../components/Footer/footer"
import Profile from "../components/Profile/profile"
import About from "../components/About/about"
import "../pages/homepage.scss"

const Homepage = () => {
  return (
    <div>
      <Header />
      <div>
        <section className="main">
          <div className="left-rect"></div>
        <div className="profile-container">
          <Profile />
          <About />
        </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage