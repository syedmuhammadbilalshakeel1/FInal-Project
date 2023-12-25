import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../../redux/actions/user";
import PreLoader from "../../../../components/PreLoader/PreLoader";

function PasswordChangeForm() {
  const dispatch = useDispatch();
  const {
    userInfo: { token },
    loading,
    error,
    message,
  } = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      currPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currPassword: Yup.string()
        .min(7, "Password must be between 7 and 30 characters")
        .max(30, "Password must be between 7 and 30 characters")
        .required("Password required"),
      newPassword: Yup.string()
        .min(7, "Password must be between 7 and 30 characters")
        .max(30, "Password must be between 7 and 30 characters")
        .required("Password required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: (values) => {
      const passwords = {
        password: values.currPassword,
        newPassword: values.newPassword,
      };
      dispatch(changePassword(passwords, token));
      formik.resetForm();
    },
  });
  return (
    <form className="password-form" onSubmit={formik.handleSubmit}>
      <p>Change password</p>
      <ul className="password-form__list">
        <li className="password-form__item">
          <label htmlFor="curr-password">Current password</label>
          <input
            type="text"
            name="currPassword"
            id="curr-password"
            value={formik.values.currPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.currPassword && formik.touched.currPassword ? (
            <p className="users-cabinet__form-error">{formik.errors.currPassword}</p>
          ) : null}
        </li>
        <li className="password-form__item">
          <label htmlFor="new-password">New password</label>
          <input
            type="text"
            name="newPassword"
            id="new-password"
            value={formik.values.newPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.newPassword && formik.touched.newPassword ? (
            <p className="users-cabinet__form-error">{formik.errors.newPassword}</p>
          ) : null}
        </li>
        <li className="password-form__item">
          <label htmlFor="confirm-new-password">Confirm new password</label>
          <input
            type="text"
            name="confirmPassword"
            id="confirm-new-password"
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && formik.touched.newPassword ? (
            <p className="users-cabinet__form-error">{formik.errors.confirmPassword}</p>
          ) : null}
        </li>
      </ul>
      <button type="submit" className="users-cabinet__btn">
        Confirm
      </button>
      {message?.password ? <p className="users-cabinet__success-message">{message.password}</p> : null}
      {error?.password || error?.newPassword
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

export default PasswordChangeForm;
