import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Please contact me with any questions or to just say hi!</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/alvinjoseph031@gmail.com"
        method="POST"
        className="form-group"
        id="myForm"
      >
        <div className="form-row">
          <div className="col">
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Message!"
            />
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="bottom">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
      <div className="link-container contact-page">
        <a
          href="https://github.com/alvin-joseph"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/alvin-joseph031/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/linkedin.png" alt="linkedin" />
        </a>
        <a
          href="./images/AlvinJoseph_Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          download
        >
          <img src="/images/cv.png" alt="resume" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
