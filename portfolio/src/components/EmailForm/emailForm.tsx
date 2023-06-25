import { useFormik } from "formik";
import "./emailForm.scss";
import { FormValues, emailSchema } from "../../schema";
import axios from 'axios'

const EmailForm = () => {
  const onSubmit = async (values: FormValues, actions: any) => {
    try {
        await axios.post('https://faisaltuts.pythonanywhere.com/send-mail', {
            email: values.email,
            subject: values.subject,
            message: values.message,
        })
        console.log('Email sent successfully');
        actions.resetForm();
    }
    catch(error) {
        console.error('Failed to send email:', error)
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: emailSchema,
    onSubmit: onSubmit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="names">
          <div className="firstname">
            <label htmlFor="">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                errors.firstName && touched.firstName ? "input_error" : ""
              }`}
            />
            {errors.firstName && touched.firstName && (
              <p className="errors">{errors.firstName}</p>
            )}
          </div>

          <div className="lastname">
            <label htmlFor="">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`${
                errors.lastName && touched.lastName ? "input_error" : ""
              }`}
            />
            {errors.lastName && touched.lastName && (
              <p className="errors">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="email">
          <label htmlFor="">E-mail</label>
          <input
            id="email"
            name="email"
            type="text"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${errors.email && touched.email ? "input_error" : ""}`}
          />
          {errors.email && touched.email && (
            <p className="errors">{errors.email}</p>
          )}
        </div>

        <div className="subject">
          <label htmlFor="">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
          />
        </div>

        <div className="message">
          <label htmlFor="">Message</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${
              errors.message && touched.message ? "input_error" : ""
            }`}
          />
          {errors.message && touched.message && (
            <p className="errors">{errors.message}</p>
          )}
        </div>
        <button disabled={isSubmitting} type="submit" className="send">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
