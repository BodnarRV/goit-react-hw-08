import React from "react";
import s from "./RegistrationPage.module.css";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        navigate("/contacts");
      });
    resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <h1>Registration</h1>

            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={s.input}
              autoComplete="name"
            />
            {errors.name && touched.name && (
              <div className={s.error}>{errors.name}</div>
            )}

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
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
