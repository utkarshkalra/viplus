import React from "react";
import { Container } from "react-bootstrap";
import contact from "../../images/contact-medium.jpeg";
import Layout from "../Layout";
import "./style.contact.css";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialTwitter,
} from "react-icons/ti";
const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container">
        <Container>
          <div className="contact d-flex flex-row flex-md-row justify-content-center h-100">
            <div className="contact-left d-none d-md-block">
              <img src={contact} alt="contact us" />
            </div>
            <div className="contact-right ">
              <h1>Contact Us</h1>
              <p>
                Want to get in touch? We'd love to hear from you. Here's how you
                can reach us...
              </p>

              <div className="links">
                <ul>
                  <li>
                    <i>
                      <IoMdCall />
                    </i>
                    <a href="">+91 9922334455</a>
                  </li>
                  <li>
                    <i>
                      <MdEmail />
                    </i>
                    <a href="">viplus@gmail.com</a>
                  </li>
                  <li>
                    <i>
                      <TiSocialFacebook />
                    </i>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <i>
                      <TiSocialInstagram />
                    </i>
                    <a href="">Instagram</a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;