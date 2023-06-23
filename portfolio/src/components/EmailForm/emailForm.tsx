import "./emailForm.scss";

const EmailForm = () => {
  return (
    <div>
      <form>
        <div className="names">
          <div className="firstname">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div className="lastname">
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="email">
          <label htmlFor="">E-mail</label>
          <input type="text" />
        </div>
        <div className="subject">
          <label htmlFor="">Subject</label>
          <input type="text" />
        </div>
        <div className="message">
          <label htmlFor="">Message</label>
          <textarea />
        </div>
        <button className="send">Send</button>
      </form>
    </div>
  );
};

export default EmailForm;
