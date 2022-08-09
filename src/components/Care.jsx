import React from "react";
import zt900 from '../assets/zt900.png';


function Care() {
  return (
    <div className="care">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={zt900}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Care</h1>
            <p>
              <li><b>Sharpening</b></li>
              Sharpening a knife is a kind of personal art and requires time, effort, discipline and safety awareness.
              <li><b>Tips</b></li>
              <ul><li>Use a black marker on the knife's cutting bevel so you can gauge your progress.</li>
              <li>Sharpen one side at a time, raising a burr on the whole edge of one side before moving to the other.</li>
              <li>Learn how to strop and get some good abrasive for honing.</li>
              <li>Use middle speed. Not too fast, not too slow.</li>

              </ul>
              <li><b>Sharpening Systems</b></li>
              <ul>
              <li><b>Freehand - </b>with stones, rods, files or even paper.</li>
              <li><b> Guided systems - </b>for clean, consistent, edges and bevels.</li>
              <li><b>Powered systems - </b> including mini-belt systems like the Workshop up to large grinders.</li>
              </ul>
              <li><b>Cleaning</b></li>
              Stainless knives need little care. Folding knives need periodic cleaning and lubrication of joints and pivot points. Carbon steel knives need to be checked frequently if used often, and should be stored with a light coating of oil. Be selective about the lubricants you use on knives that will be used for food preperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Care;