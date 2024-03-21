import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function Login() {
    const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/todo");
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          required
        />
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
      </div>

      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          required
        />
        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="form2Example31"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label className="form-check-label" htmlFor="form2Example31">
              Remember me
            </label>
          </div>
        </div>

        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>

    </form>
  );
}

export default Login;
