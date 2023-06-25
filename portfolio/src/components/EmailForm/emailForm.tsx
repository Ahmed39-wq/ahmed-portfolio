import { useFormik } from "formik";
import "./emailForm.scss";
import { FormValues, emailSchema } from "../../schema";

const EmailForm = () => {
    
  const onSubmit = (values: FormValues, actions: any) => {
    console.log(values);
    actions.resetForm();
  };

  const { values, errors, touched, isSubmitting, handleChange, handleSubmit } =
    useFormik<FormValues>({
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
              className={`${
                errors.firstName && touched.firstName ? "input_error" : ""
              }`}
            />
            {errors.firstName ? (
              <p className="errors">{errors.firstName}</p>
            ) : null}
          </div>

          <div className="lastname">
            <label htmlFor="">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              className={`${
                errors.lastName && touched.lastName ? "input_error" : ""
              }`}
            />
            {errors.lastName ? (
              <p className="errors">{errors.lastName}</p>
            ) : null}
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
            className={`${errors.email && touched.email ? "input_error" : ""}`}
          />
          {errors.email ? <p className="errors">{errors.email}</p> : null}
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
            className={`${
              errors.message && touched.message ? "input_error" : ""
            }`}
          />
          {errors.message ? <p className="errors">{errors.message}</p> : null}
        </div>
        <button disabled={isSubmitting} type="submit" className="send">
          Send
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
