import React from "react";

import * as Sl from "react-icons/sl";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="icons_wrapper">
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
          <br />
          <p id="example_">Example@email.com</p>
          <p>Copyright © 2020 Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
