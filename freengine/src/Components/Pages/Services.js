import React, { useState, useRef } from "react";
import "./pages.css";
import { arrservices, description } from "../../data";
import emailjs from "@emailjs/browser";
function Services() {
  const [service, setService] = useState("Web Development");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xczguke",
        "template_g99xt67",
        form.current,
        "gm4GNx0WIJRq3ZvK-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  //defining create toast function
  function createToast() {
    //getting element from file
    const notification = document.getElementById("toast-container");
    //creating element
    const p = document.createElement("p");
    //adding element by DOM
    notification.append(p);
    //getting input from the file
    const input = document.getElementById("input");
    const emailInput = document.getElementById('input-email')
    const phone = document.getElementById('phone');
    //Checking if inputs are empty or not.
    if (emailInput.value !== ""  && phone !== "") {
      //when inputs are not empty, do the following..
      p.innerText = "Your Quotation request sent succesfully!";
      console.log("This is my notification");
      p.style.color = "green";
      p.style.listStyleType = "none";
      p.style.border = "1px solid green";
      p.style.padding = "1rem";
    }
    //if inputs are empty, execute the error message notification..
    else{
      p.innerText = "Please fill the form";
      p.style.color ='red';
      p.style.listStyleType= 'none';
      p.style.border = '1px solid red';
      p.style.padding ='1rem';
      input.style.borderBottom =' 1px solid red';
      emailInput.style.borderBottom ='1px solid red';
      phone.style.borderBottom = '1px solid red';
    }
  }
  return (
    <div className="services">
      <div className="page-section">
        <div className="services-page">
          <div className="set-serv">
            <span
              className="breadcrumb"
              onClick={() => setService("Web development")}
            >
              Web develoment
            </span>
            <span
              className="breadcrumb"
              onClick={() => setService("Digital marketing")}
            >
              Digital marketing
            </span>
            <span
              className="breadcrumb"
              onClick={() => setService("Mobile App development")}
            >
              App development
            </span>
            <span
              className="breadcrumb"
              onClick={() => setService("Ecommerce")}
            >
              Ecommerce
            </span>
          </div>

          <div className="all-services">
            <div className="request">
              <div id="toast-container"></div>
              <h2 className="clicked-services">Request Quote for {service}</h2>
              <p className="sub-head">
                Request a quote for your preffered service.
              </p>
              <div className="form">
                <form ref={form} onSubmit={sendEmail} autoComplete="off">
                  <div className="left-input">
                    <input
                      className="input"
                      name="user_names"
                      type="text"
                      placeholder="Names"
                      id="input"
                    />
                    <input
                      className="input"
                      name="service"
                      type="text"
                      value={service}
                      placeholder={service}
                    />
                  </div>
                  <div className="right-input">
                    <input
                      className="input"
                      name="user_email"
                      type="email"
                      placeholder="Your Email"
                      id="input-email"
                      required
                    />
                    <input
                      className="input"
                      name="user_phone"
                      type="text"
                      placeholder="Phone"
                      id="phone"
                    />
                  </div>

                  <input
                    className="btn-sbmt"
                    type="submit"
                    onClick={() => createToast()}
                    value="Request for a quote"
                  />
                </form>
              </div>
            </div>
            <div className="description">
              <h1 className="title-serv-des">Our Services</h1>
              {description.map((des, i) => (
                <ul className="list-des">
                  <li className="des"> {des}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
