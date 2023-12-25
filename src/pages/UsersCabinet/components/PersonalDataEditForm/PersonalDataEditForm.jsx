/* eslint-disable object-curly-newline */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import PreLoader from "../../../../components/PreLoader/PreLoader";
import { clearErrorAndMessages, updateUser } from "../../../../redux/actions/user";

function PersonalDataEditForm() {
  const {
    userInfo: { firstName, lastName, login, email, token },
    loading,
    error,
    message,
  } = useSelector((state) => state.user);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName,
      lastName,
      login,
      email,
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
    }),
    onSubmit: (values) => {
      const updatedData = {
        firstName: values.firstName,
        lastName: values.lastName,
        login: values.login,
        email: values.email,
      };
      dispatch(updateUser(updatedData, token));
    },
  });

  return (
    <form className="personal-data" onSubmit={formik.handleSubmit}>
      <ul className="personal-data__list">
        <li className="personal-data__item">
          <label htmlFor="first-name">First Name</label>
          {editing ? (
            <>
              <input
                type="text"
                name="firstName"
                id="first-name"
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <p className="users-cabinet__form-error">{formik.errors.firstName}</p>
            </>
          ) : (
            <p className="personal-data__item-info">{firstName}</p>
          )}
        </li>
        <li className="personal-data__item">
          <label htmlFor="last-name">Last Name</label>
          {editing ? (
            <>
              <input
                type="text"
                name="lastName"
                id="last-name"
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <p className="users-cabinet__form-error">{formik.errors.lastName}</p>
            </>
          ) : (
            <p className="personal-data__item-info">{lastName}</p>
          )}
        </li>
        <li className="personal-data__item">
          <label htmlFor="log-in">Login</label>
          {editing ? (
            <>
              <input
                type="text"
                name="login"
                id="log-in"
                value={formik.values.login}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <p className="users-cabinet__form-error">{formik.errors.login}</p>
            </>
          ) : (
            <p className="personal-data__item-info">{login}</p>
          )}
        </li>
        <li className="personal-data__item">
          <label htmlFor="e-mail">Email</label>
          {editing ? (
            <>
              <input
                type="text"
                name="email"
                id="e-mail"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              <p className="users-cabinet__form-error">{formik.errors.email}</p>
            </>
          ) : (
            <p className="personal-data__item-info">{email}</p>
          )}
        </li>
      </ul>
      {editing ? (
        <div className="personal-data__btns-wrapper">
          <button className="users-cabinet__btn" type="submit">
            Save
          </button>
          <button
            className="users-cabinet__btn"
            type="button"
            onClick={() => {
              setEditing(false);
              dispatch(clearErrorAndMessages());
              if (error) {
                formik.resetForm();
              }
            }}
          >
            Close
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="users-cabinet__btn"
          onClick={() => {
            setEditing(true);
          }}
        >
          Edit
        </button>
      )}
      {message?.data ? <p className="users-cabinet__success-message">{message.data}</p> : null}
      {editing && (error?.firstName || error?.lastName || error?.login)
        ? Object.values(error).map((err, index) => {
            return (
              <p key={index} className="users-cabinet__form-error">
                {err}
              </p>
            );
          })
        : null}
      {loading ? <PreLoader fillScreen /> : null}
    </form>
  );
}

export default PersonalDataEditForm;
