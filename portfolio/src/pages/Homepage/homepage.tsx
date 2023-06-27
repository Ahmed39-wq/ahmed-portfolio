import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Profile from "../../components/Profile/profile"
import About from "../../components/About/about"
import "./homepage.scss"

const Homepage = () => {
  return (
    <div>
      <Header />
        <div className="main">
          <div className="container">
            <div className="left-rect">
            </div>
            <div className="profile-container">
              <Profile />
              <About />
            </div>

          </div>
        </div>
          <Footer />
    </div>
  )
}

export default Homepage