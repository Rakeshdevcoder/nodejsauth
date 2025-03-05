import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import "./SignIn.css";
import React, { useState } from "react";

export default function SignIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const { signin, isLoading, error } = useAuthStore();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (values.email && values.password) {
      setValid(true);
      try {
        await signin(values.email, values.password);
        navigate("/home");
      } catch (error) {
        console.error("Login failed:", error);
      }
    } else {
      setValid(false);
    }
  };

  return (
    <div className="form-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        {submitted && valid && !error && (
          <div className="success-message">
            <h3>Welcome</h3>
            <div>Your sign-in was successful</div>
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <input
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        <input
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          disabled={isLoading}
        />
        {submitted && !values.password && (
          <span id="password-error">Please enter a password</span>
        )}

        <button className="form-field" type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </button>

        <p>
          Don't have an account?{" "}
          <button type="button" onClick={() => navigate("/signup")}>
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}
