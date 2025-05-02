import React, { useState } from "react";
import * as Sl from "react-icons/sl";
import * as Fa6 from "react-icons/fa6";

function Login() {
  const [isChecked, setIschecked] = useState(false);
  const toggleCheckbox = () => {
    setIschecked(!isChecked);
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
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control form_inp"
                  placeholder="Username or email"
                />
              </div>
              <div className="form-group ">
                <input
                  type="password"
                  name=""
                  id=""
                  className="form-control form_inp"
                  placeholder="Password"
                />
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
              <div className="col-lg-3 col-md-3 col-sm-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialGoogle />
                </button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialFacebook />
                </button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialLinkedin />
                </button>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <button type="button" className="social_ico">
                  <Sl.SlSocialTwitter />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-none"></div>
    </div>
  );
}

export default Login;
