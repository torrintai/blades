import React from "react";
import psiphi from '../assets/psiphi.png';

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={psiphi}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              <li>torrintaivvi@proton.me</li>
              <li>Telegram: Torrin SonicPulse</li>
              <li>YouTube: Torrin</li>
              <li>Github: Torrintai</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;