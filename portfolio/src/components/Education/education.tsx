import './education.scss'


const Education = () => {
  return (
    <div>
        <div className='education-card-container'>
          <div className="education-cards">
            <div className="inner">
              <div className="inner-left">
                <h3>1990 - 1995</h3>
                <h4>University Name</h4>
                <span>Degree Level</span>
              </div>
              <div className="inner-right">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                  Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              </div>
            </div>
            <div className="inner">
              <div className="inner-left">
                <h3>1995 - 1998</h3>
                <h4>University Name</h4>
                <span>Degree Level</span>
              </div>
              <div className="inner-right">
                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
                  Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Education