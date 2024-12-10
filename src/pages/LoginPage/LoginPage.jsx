import React from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <h1>Log in</h1>

            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={s.input}
              autoComplete="email"
            />
            {errors.email && touched.email && (
              <div className={s.error}>{errors.email}</div>
            )}

            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={s.input}
              autoComplete="new-password"
            />
            {errors.password && touched.password && (
              <div className={s.error}>{errors.password}</div>
            )}

            <button type="submit" className={s.button}>
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
