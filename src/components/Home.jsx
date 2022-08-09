import React from "react";
import sibert from '../assets/sibert.png';

function Home() {
  return (

    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={sibert}
              alt="Torrin Hexico Hexverse"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Torrin Blades</h1>
            <p>
            Welcome to Torrin's Blade Emporium.
             <ul>
              <li>Knives and other blades and uses.</li>
              <li>Sharpening and other maintenance.</li>
              <li>Building and modifying.</li>
             </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Home;