import "./SignUp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuthStore } from "../store/authStore.js";
export default function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const { signup, error, isLoading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.name && values.email && values.password) {
      setValid(true);
    }
    setSubmitted(true);

    if (values.name && values.email && values.password) {
      try {
        await signup(values.email, values.password, values.name);
        navigate("/signin");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && !isLoading && !error && (
          <div className="success-message">
            <h3>Welcome {values.name}</h3>
            <div>Your registration was successful!</div>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
        {!valid && (
          <input
            className="form-field"
            type="text"
            placeholder="Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        )}
        {error && submitted && !values.name && (
          <span id="name-error">Please enter a name</span>
        )}
        {!valid && (
          <input
            className="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        )}
        {error && submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        {!valid && (
          <input
            className="form-field"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        )}
        {error && submitted && !values.password && (
          <span id="password-error">Please enter a password</span>
        )}
        {!valid && (
          <button className="form-field" type="submit" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>
        )}
        {isLoading && (
          <div className="loading-message">Processing your signup...</div>
        )}
      </form>
    </div>
  );
}
