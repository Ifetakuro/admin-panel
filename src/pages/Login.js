import React from "react";
import { AuthContext } from "../authentication/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../scss/Pages/Login.scss";

const Login = ({ location }) => {
  const { isAuthenticated, users, setCurrentUser, currentUser, setAuth } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const fetchData = (setSunmitting, setStatus, user) => {
    setSunmitting(true);

    setTimeout(() => {
      if (user) {
        console.log(user);
        localStorage.setItem(
          "user",
          JSON.stringify({
            auth: true,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
          })
        );
        setStatus("Success");
        navigate("/");
      } else {
        setStatus("Failed");
      }
      setSunmitting(false);
    }, 2000); // Simulate a 2 second delay
  };

  useEffect(() => {
    let auth;
    const _user = localStorage.getItem("user");
    if (_user) {
      auth = JSON.parse(_user).auth;
    }

    if (auth) {
      navigate("/");
    }
  }, [navigate, setAuth]);

  return (
    <div className="login">
      <div className="form-div">
        <h2>Sign In</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required("Username is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
            setStatus();
            const user = users.find((user) => {
              return user.userName === username && user.password === password;
            });
            fetchData(setSubmitting, setStatus, user);
          }}
        >
          {({ errors, status, touched, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    ((errors.username && touched.username) ||
                    status === "Failed"
                      ? " is-invalid"
                      : "")
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    ((errors.password && touched.password) ||
                    status === "Failed"
                      ? " is-invalid"
                      : "")
                  }
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn" disabled={isSubmitting}>
                  Login
                </button>
                {isSubmitting && <p>Submitting</p>}
              </div>
              {status && <div className={"alert alert-danger"}>{status}</div>}
            </Form>
          )}
        </Formik>
      </div>
      <div className="logo-div">
        <h1>Admin Panel</h1>
      </div>
    </div>
  );
};

export default Login;
