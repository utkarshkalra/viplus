import React from "react";
import "./style.footer.css";
import { FiSend } from "react-icons/fi";
import logo from "../../images/logo/viplus.svg";

import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";
const Footer = () => {
  return (
    <footer className="w-100">
      <div className="container shadow rounded-3 footer py-4">
        <div className="row gy-4 gx-5">
          <div className="col-lg-3 col-md-6 logo">
            <img src={logo} alt="logo" />
            <p className="small text-muted">
              Welcome To Viplus ! If you are worried To select which Islamic
              topi is suitable for you then you have came to the right place.
              Viplus offers all latest and trending caps collection. Peoples
              have different choice of caps hence we make sure to provide
              updated and unique designs
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className=" mb-3">Contact Us at:</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <IoMdCall />
                <a href="#">8287176170</a>
              </li>
              <li>
                <MdEmail />
                <a href="#">email.com</a>
              </li>
              <li>
                <ImLocation />
                <a href="#">Manufacturing Factory in Manesar</a>
              </li>
              {/* <li>
                <a href="#">FAQ</a>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className=" mb-3">Our Socials</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <TiSocialInstagram />{" "}
                <a
                  href="https://instagram.com/myviplus?utm_medium=copy_link"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <TiSocialFacebook />
                <a
                  href="https://www.facebook.com/104583478409837/posts/116409340560584/?sfnsn=wiwspmo"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              {/* <li>
                <TiSocialTwitter />
                <a href="#">Twitter</a>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className=" mb-3">Have any query?</h5>
            <p className="small text-white">Let us know.</p>
            <form action="#">
              <div class="form-floating ">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label for="floatingTextarea2">Your Query</label>
                <button
                  className="btn btn-send"
                  id="button-addon2"
                  type="button"
                >
                  Send
                  <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row text-center">
          <p className="small text-muted mb-0">
            &copy; Copyrights. All rights reserved.{" "}
            <a className="text-primary" href="#">
              Viplus
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
