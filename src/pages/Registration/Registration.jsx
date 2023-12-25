import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import useServer from "../../hooks/useServer";
import PreLoader from "../../components/PreLoader/PreLoader";

function Registration() {
  const [showPass, setShowPass] = useState(false);
  const [showConfrimPass, setShowConfirmPass] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { registerUser } = useServer();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First Name must be between 2 and 25 characters")
        .max(25, "First Name must be between 2 and 25 characters")
        .required("First name required"),
      lastName: Yup.string()
        .min(2, "Last Name must be between 2 and 25 characters")
        .max(25, "Last Name must be between 2 and 25 characters")
        .required("Last name required"),
      login: Yup.string().required("Login required"),
      email: Yup.string().email("You need to enter a valid email").required("You need to enter your email to continue"),
      password: Yup.string()
        .min(7, "Password must be between 7 and 30 characters")
        .max(30, "Password must be between 7 and 30 characters")
        .required("Password required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: async (values) => {
      const newUserData = {
        firstName: values.firstName,
        lastName: values.lastName,
        login: values.login,
        email: values.email,
        password: values.password,
      };
      setLoading(true);
      const response = await registerUser(newUserData);
      setLoading(false);
      if (response.enabled) formik.resetForm();
      setNewUser(response);
    },
  });

  return (
    <>
      <section className="registration-section">
        <form className="registration-section__form" action="login" onSubmit={formik.handleSubmit}>
          <h1 className="registration-section__title">REGISTRATION</h1>
          <div className="registration-section__form-input-wrapper">
            <input
              className="registration-section__form-input"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="First name"
            />
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.6884 18.2135V16.5322C17.6884 15.6404 17.3341 14.7851 16.7035 14.1545C16.0729 13.5239 15.2176 13.1697 14.3258 13.1697H7.6008C6.70901 13.1697 5.85374 13.5239 5.22314 14.1545C4.59255 14.7851 4.23828 15.6404 4.23828 16.5322V18.2135"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9634 9.80732C12.8204 9.80732 14.3259 8.30187 14.3259 6.4448C14.3259 4.58773 12.8204 3.08228 10.9634 3.08228C9.10628 3.08228 7.60083 4.58773 7.60083 6.4448C7.60083 8.30187 9.10628 9.80732 10.9634 9.80732Z"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {formik.errors.firstName && formik.touched.firstName ? (
              <label className="registration-section__form-input-error">{formik.errors.firstName}</label>
            ) : null}
          </div>
          <div className="registration-section__form-input-wrapper">
            <input
              className="registration-section__form-input"
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Last name"
            />
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.6884 18.2135V16.5322C17.6884 15.6404 17.3341 14.7851 16.7035 14.1545C16.0729 13.5239 15.2176 13.1697 14.3258 13.1697H7.6008C6.70901 13.1697 5.85374 13.5239 5.22314 14.1545C4.59255 14.7851 4.23828 15.6404 4.23828 16.5322V18.2135"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9634 9.80732C12.8204 9.80732 14.3259 8.30187 14.3259 6.4448C14.3259 4.58773 12.8204 3.08228 10.9634 3.08228C9.10628 3.08228 7.60083 4.58773 7.60083 6.4448C7.60083 8.30187 9.10628 9.80732 10.9634 9.80732Z"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {formik.errors.lastName && formik.touched.lastName ? (
              <label className="registration-section__form-input-error">{formik.errors.lastName}</label>
            ) : null}
          </div>
          <div className="registration-section__form-input-wrapper">
            <input
              className="registration-section__form-input"
              type="text"
              name="login"
              value={formik.values.login}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Login (username)"
            />
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.6884 18.2135V16.5322C17.6884 15.6404 17.3341 14.7851 16.7035 14.1545C16.0729 13.5239 15.2176 13.1697 14.3258 13.1697H7.6008C6.70901 13.1697 5.85374 13.5239 5.22314 14.1545C4.59255 14.7851 4.23828 15.6404 4.23828 16.5322V18.2135"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9634 9.80732C12.8204 9.80732 14.3259 8.30187 14.3259 6.4448C14.3259 4.58773 12.8204 3.08228 10.9634 3.08228C9.10628 3.08228 7.60083 4.58773 7.60083 6.4448C7.60083 8.30187 9.10628 9.80732 10.9634 9.80732Z"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {formik.errors.login && formik.touched.login ? (
              <label className="registration-section__form-input-error">{formik.errors.login}</label>
            ) : null}
          </div>
          <div className="registration-section__form-input-wrapper">
            <input
              className="registration-section__form-input"
              type="text"
              name="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Email"
            />
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.6884 18.2135V16.5322C17.6884 15.6404 17.3341 14.7851 16.7035 14.1545C16.0729 13.5239 15.2176 13.1697 14.3258 13.1697H7.6008C6.70901 13.1697 5.85374 13.5239 5.22314 14.1545C4.59255 14.7851 4.23828 15.6404 4.23828 16.5322V18.2135"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9634 9.80732C12.8204 9.80732 14.3259 8.30187 14.3259 6.4448C14.3259 4.58773 12.8204 3.08228 10.9634 3.08228C9.10628 3.08228 7.60083 4.58773 7.60083 6.4448C7.60083 8.30187 9.10628 9.80732 10.9634 9.80732Z"
                stroke="#878484"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {formik.errors.email && formik.touched.email ? (
              <label className="registration-section__form-input-error">{formik.errors.email}</label>
            ) : null}
          </div>
          <div className="registration-section__form-input-wrapper">
            <input
              className="registration-section__form-input"
              type={showPass ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Password"
            />
            {showPass ? (
              <svg onClick={() => setShowPass(false)} height="1em" viewBox="0 0 576 512" fill="#848484">
                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
              </svg>
            ) : (
              <svg onClick={() => setShowPass(true)} height="1em" viewBox="0 0 640 512" fill="#848484">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
              </svg>
            )}
            {formik.errors.password && formik.touched.password ? (
              <label className="registration-section__form-input-error">{formik.errors.password}</label>
            ) : null}
          </div>
          <div className="registration-section__form-input-wrapper">
            <input
              className="registration-section__form-input"
              type={showConfrimPass ? "text" : "password"}
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="Confirm password"
            />
            {showConfrimPass ? (
              <svg onClick={() => setShowConfirmPass(false)} height="1em" viewBox="0 0 576 512" fill="#848484">
                <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
              </svg>
            ) : (
              <svg onClick={() => setShowConfirmPass(true)} height="1em" viewBox="0 0 640 512" fill="#848484">
                <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
              </svg>
            )}
            {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
              <label className="registration-section__form-input-error">{formik.errors.confirmPassword}</label>
            ) : null}
          </div>
          <button className="registration-section__form-submit-btn" type="submit">
            REGISTER
          </button>
          <p className="registration-section__message">
            Already registered?
            <Link to={"/login"}> Log in now!</Link>
          </p>
          {newUser.enabled ? (
            <p className="registration-section__request-good-res">{`User ${newUser.firstName} ${newUser.lastName} created succesfully, now you can log in!`}</p>
          ) : null}
          {newUser.message ? <p className="registration-section__request-bad-res">{newUser.message}</p> : null}
          {newUser.firstName && !newUser.enabled ? (
            <p className="registration-section__request-bad-res">{newUser.firstName}</p>
          ) : null}
          {newUser.login && !newUser.enabled ? (
            <p className="registration-section__request-bad-res">{newUser.login}</p>
          ) : null}
          {newUser.lastName && !newUser.enabled ? (
            <p className="registration-section__request-bad-res">{newUser.lastName}</p>
          ) : null}
        </form>
      </section>
      {loading ? <PreLoader fillScreen /> : null}
    </>
  );
}

export default Registration;
