import React from "react";
import logo from "./logo.svg";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <h1>FOR MORE INFORMATION</h1>
      <div class="text">
        <form action="typing" input="POST">
          <div class="box1">
            <label for="First Name:"> First Name: </label>
            <input type="text" id="First Name" name="" />
            <br />
            <br />
          </div>

          <br />
          <br />

          <div class="box2">
            <label for="Last Name:">Last Name:</label>
            <input type="text" id="Last Name" name="" />
            <br />
            <br />
          </div>
          <div class="box3">
            <label for="Phone Number:">phone number:</label>
            <input type="text" id="Phone Number" name="" />
            <br />
            <br />
          </div>

          <br />
          <br />

          <div class="box4">
            <label for="Email Address:">Email Address:</label>
            <input type="text" id="Email Address" name="" />
            <br />
            <br />
          </div>

          <br />
          <br />

          <div class="box5">
            <label for="location:">location:</label>
            <input type="text" id="location" name="" />
          </div>

          <br />
          <br />
          <br />
          <br />
          <h2>
            Please list all the requests and needs this family needs while
            filling in the above information
          </h2>
          <br />

          <div class="box">
            <form action="typing" method="POST" />
            <textarea rows="20" cols="40"></textarea>
            <br />
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
