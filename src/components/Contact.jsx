import React,{useState} from "react";
import "../css/Contact.css";
import contactImg from "../img/about-9.jpg";

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message , subject } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      subject: subject.value,
    };
    let response = await fetch(`/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>
              <p className="hire__text white">
                <strong>+216 22 034 737</strong> or email{" "}
                <strong>mustaphaghannouchi@gmail.com</strong>
              </p>
            </div>
            {/* <form onSubmit={handleSubmit}>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
                id="name"
              />
              <input
                type="text"
                className="contact email"
                placeholder="Your Email *"
                id="email"
              />
              <input
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
                id="subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
                id="message"
              ></textarea>
              <button className="btn contact pointer" type="submit">
              {status}
              </button>
            </div>
            </form> */}
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
