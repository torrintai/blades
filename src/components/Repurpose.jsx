import React from "react";
import sibert2 from '../assets/sibert2.png';
import sibert3 from '../assets/sibert3.png';
import plumb from '../assets/plumb.png';
import plumbhawk from '../assets/plumbhawk.png';


function Repurpose() {
  return (
    <div className="repurpose">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={sibert2}
              alt="Torrin Sibert modify"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={sibert3}
              alt="Torrin Sibert modify tang"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={plumb}
              alt="Torrin vintage plumb carpenter modify"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={plumbhawk}
              alt="Torrin vintage plumb carpenter modify"
            />
          </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Repurpose | Modify | Personalize</h1>
              <h3>The knife shown here has been highly modified to suit my needs.</h3>
              The texture on the handle scales was added by me. The guard on the spine side, opposite of the blade, was removed. The end of the tang was also modified.
              <p>
              Repurposing, personalizing, and modifying to create edged tools that suit your own tastes and needs is fun, rewarding and educational. You can start modifying literal junk with minimal tools. You can modify knives and axes, or repurpose high carbon steel harvested from many other sources into useful tools. 
              If you are modifying a piece of metal that is already a blade and has been heat treated, you have to be careful not to ruin the heat treatment, the hardening and tempering. Keep the blade cool while reshaping. If you see the color of the steel start to change you are approaching the danger zone, if the steel changes to blue your in trouble.
              <h3>The hatchet shown here is a vintage Plumb Carpenter's Hatchet</h3>
              I didn't like the balance or the extra features, so I modified it into more of a carving hatchet to my liking.
              <h3>High Carbon Steel Sources For Repurposed Blades</h3>
              There are many popular scrap tools and parts that are used by hobbyists and novices to make knives. Most serious smiths who depend on efficiency for profit don't recommend using unknown metals, because of the addded guess work and testing needed, to heat treat the mystery metal properly to achieve high quality performance.
              <b>Popular items for home forging experiments include. Files - Lawn Mower Blades - Railroad Spikes </b> None of those are very good choices these days with modern metalurgy. Older, esp vintage files should yield good results. Spark tests will point you in the right direction, but don't expect perfection right from the get go. 
              <b>Spring steel, especially large truck leaf springs have worked very well for me, as well as other vintage farm implement blade tools.</b>
               I made the short sword shown on the create page from all repurposed or natural materials. 
              </p>
            </div>
        </div>
      </div>
          <body>
           
          </body>
    </div>
  );
}

export default Repurpose;