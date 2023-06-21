import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import "./project.scss";

const Projects = () => {
  return (
    <>
      <Header />
      <div className="project-container">
        <section className="section">
          <div className="project-title">
            <h1>Projects</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Hello</h3>
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
