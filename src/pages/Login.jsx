import React, { useState } from "react";
import toast from "react-hot-toast";
import AuthImg from "../assets/auth_image.png";

import * as Sl from "react-icons/sl";
import * as Fa6 from "react-icons/fa6";
import * as Fi from "react-icons/fi";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState([]);
  const [isChecked, setIschecked] = useState(false);
  const toggleCheckbox = () => {
    setIschecked(!isChecked);
  };
  const [error, setError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordValidation = () => {
    const { password, username } = credentials;
    const errors = [];

    if (username.length === 0 || password.length === 0) {
      setError(true);
    }

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one capital letter.");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[\W_]/.test(password)) {
      errors.push("Password must contain at least one special character.");
    }

    if (errors.length > 0) {
      setErrMessage(errors);
      return false;
    }

    setErrMessage([]);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isError = handlePasswordValidation();
    if (!isError) return;
    toast.success("Reached");
  };
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
          <div className="wrapper_login">
            <h1>Sign In</h1>
            <p>
              New user? <a href="#">Create an account</a>
            </p>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  id=""
                  className={`form-control ${
                    error && credentials.username.length == 0 ? "error" : ""
                  } form_inp`}
                  placeholder="Username or email"
                  onChange={handleChange}
                  value={credentials.username}
                />
                {error && credentials.username.length == 0 && (
                  <span className="erro_msg">
                    Username or Email is required!
                  </span>
                )}
              </div>
              <div className="form-group position-relative">
                <input
                  type={!isPasswordVisible ? "password" : "text"}
                  name="password"
                  id=""
                  className={`form-control ${
                    error && credentials.password.length == 0 ? "error" : ""
                  } form_inp`}
                  placeholder="Password"
                  onChange={handleChange}
                  value={credentials.password}
                />
                <button
                  type="button"
                  className="eye_btn"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? <Fi.FiEye /> : <Fi.FiEyeOff />}
                </button>
                {error && credentials.password.length == 0 && (
                  <span className="erro_msg">Password is required!</span>
                )}
                {errMessage.length > 0 && (
                  <ul className="err_items">
                    {errMessage.map((msg, index) => (
                      <li key={index}>{msg}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="form-group my-4">
                <input
                  type="checkbox"
                  name=""
                  className="check_box"
                  checked={isChecked}
                  onChange={toggleCheckbox}
                  id="keepSignedIn"
                />
                <label
                  htmlFor="keepSignedIn"
                  className="form-label d-flex align-items-center"
                >
                  <span
                    className={`alter_checkbox ${isChecked ? "checked" : ""}`}
                    onClick={toggleCheckbox}
                  >
                    {isChecked ? <Fa6.FaCheck /> : ""}
                  </span>
                  Keep me signed in
                </label>
              </div>
              <button type="submit" className="submit_btn">
                Sign In
              </button>
            </form>
            <div className="or">
              <span>or Sign In With</span>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialGoogle />
                </button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialFacebook />
                </button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialLinkedin />
                </button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 d-none d-sm-flex justify-content-center align-items-center">
        <img src={AuthImg} alt="" className="auth_img" />
      </div>
    </div>
  );
}

export default Login;
