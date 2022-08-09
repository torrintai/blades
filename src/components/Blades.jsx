import React from "react";
import grinds1 from '../assets/grinds1.png';
import gerber from '../assets/gerber.png';
import slipjoint from '../assets/case.png';
import profiles from '../assets/profiles.png';


function Blades() {
  return (
    <div className="knives">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={slipjoint}
              alt=""
            />
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={profiles}
              alt=""
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={grinds1}
              alt=""
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={gerber}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Blades | Knives - Axes</h1>
            <p>
              <li><h2>Overview:</h2></li>
              A little breakdown on the limitless variety of knives and edged tools. Generally speaking you get what you pay for. I use a variety of knives and axes for a variety of jobs.
              <li><h3>Knife Types:</h3></li>
              There are two main knife types.
              <ul><li><b>Fixed Blade Knives</b></li>
              Fixed blade knives have various tang types. The tang is the portion of the knife that extends into the handle.
              <ul><li>Full Tang</li>
              <li> Through Tang</li>
              <li>Hidden Tang</li>
              <li>Stick Tang</li>
              <li>Rat Tang</li></ul>
              <li><b>Folding Knives</b></li>
              Folding knives have various blade locking features to be aware of for safe use. Here are a few in no particular order.
              <ul><li>Slip-joint - no locking feature</li>
              <li>Friction Fit - no locking feature</li>
              <li>Liner Lock </li>
              <li>Frame Lock</li>
              <li>Button Lock</li></ul>
              There are many ways various maufacturers implement their lock features, and some have their own patented systems. Stay familiar with the operation of your folding knives, especially automatics.</ul>
              <li><h3>Blade Types:</h3>
             The actual blade of the knife has many characteristics and definitions to consider when choosing a knife for any given purpose. Some things to consider:
             <ul><li><b>Blade Profile</b></li>
             Most of this consideration is in the tip design, which generally effects the overall profile of the knife. Here are some popular profile types:
             <ul><li>Drop Point</li>
             <li>Clip Point</li>
             <li>Spear Point</li>
             <li>Tanto</li></ul> 
            <li><b>Blade Thickness</b></li>
            Blade thickness is another factor highly subject to personal preference and cutting styles. Blade thickness is a major factor in the weight of the blade. Super steels that are more durable generally can make thinner blades that still retain good durability.
            <li><b>Blade Edge Profile or Grind</b></li>
            Another highly debated, subjective aspect of personal knife preferences. Some like thin, some like thick.
            <ul><li>Saber</li>
            <li>Flat</li>
            <li>Convex</li>
            <li>Hollow</li>
            <li>Scandi</li>
            <li>Chisel</li>

            </ul>
             </ul>
              </li>
              <li><h3>Steel Types:</h3></li>
              There are two main types of knife or blade steels, stainless and high-carbon. The stain or corrosion resistance varies depending on the steel. There are some very popular knife steels like D2 that are considered semi-stainless. 
              <ul><li><b>Stainless Steel</b></li>
              Some popular stainless steel varieties:
              <ul><li> 440A - 440C - 420HC - 154CM - S30V - S35VN - S90 </li></ul>
              Stainless steels have a wide range in quality. 440A for example on the low end, is what is used in many gas station type knives. Useful when you need a knife that might get destroyed.
              <li><b>High Carbon Steel</b></li>
              Some popular high carbon steels:
              <ul><li> 1095 - 1080 - 1055 - 5160 - D2 -O2 - A2 - W2</li></ul>
              Carbon steels are less expensive to produce, and tools made from them are generally less expensive and easier to sharpen. Many stainless steels require diamond encrusted stones or rods to be sharpened effectively.
              </ul> 
              The higher end so called super steels have their advantages, namely in durability and edge retention. I like having a knife that will make it through some big jobs, and still have a decent edge on it at the end. The trade off for the durability and edge retention of the higher end steels is increased sharpening difficulty, especially when done by hand with traditional sharpening systems. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blades;