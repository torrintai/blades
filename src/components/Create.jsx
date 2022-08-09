import React from "react";
import draco from '../assets/draco.png';
import forgegas from '../assets/forgegas.png';
import forgefull from '../assets/forgefull.png';
import anvil from '../assets/anvil.png';
import first from '../assets/first.png';
import early from '../assets/early.png';
import trio from '../assets/trio.png';



function Create() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={draco}
              alt="Torrin Draco Sword"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={forgegas}
              alt="Torrin at the gas forge"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={forgefull}
              alt="Torrin wide shot at gas forge"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={anvil}
              alt="Torrin anvil and hot blade"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={first}
              alt="Torrin first charcoal forced air forge"
            />
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={early}
              alt="Torrin early forge inside"
            />
          </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Create</h1>
              <p><h2>Stock Removal</h2>
              Most knives in use today are created by stock removal and are not forged after the stock production process. The blade shape is cut out of a blank and then the primary bevel is ground in. Then the process is about the same as with a forged knife. A forge or heat treatment oven is still needed to raise the knife to the quench temperature.
              <h2> Forging Steps</h2>
              These are basic slimmed down instructions to make a suitable knife for everday use that will last generations if taken care of. These instrunctions are a rough formula that will work to produce an acceptable knife for many high carbon steel types. Research and testing should be done by the aspiring smith to fine tune there own work. This is a work in progress.
              <ul><li><b>Choose Steel</b></li>
              Smaller thinner blades tend to be made harder for sharper edges with better retention. Higher carbon content steels like 1095 are chosen for this type of blade. As blades get bigger with tasks tending towards more aggresive impacts, generally they are made softer, and often use steel with a lower carbon content. Many quality axes use 1055 for instance. The last number in 10 series steels refers to the carbon content in the steel. High carbon spring steels like 5160 are often used for very large blades or choppers and make very tough blades. 
              <li><b>Anneal Steel</b></li>
              Make the steel softer to make it easier to work with. This step is optional. To anneal heat to cherry red then place in something to slow the cooling process as much as possible.
              <li><b>Rough Cut</b></li>
              Cut larger un-needed portions of the stock off prior to forging.
              <li><b>Forge to Basic Shape</b></li>
              Forge thick - grind thin. Do not hammer metal that is too cold, it will cause micro fractures or even break your project mid forging. If the metal isn't moving it's probably too cold. Be careful not to over heat or burn through as well. 
              <li><b>Rough Grind</b></li>
              Grind close to finished shape including primary bevel. Leave bevel a few millimeters thick at the edge minimum, so it doesn't crack during quenching. Quenching will leave forge scale that will have to come off. Rough grind accounting for how much you want to take off past the scale on the finish grind.
              <li><b>Thermo-cycle</b></li>
              Three times, heat to non magnetic and let air cool between cycles. Use a magnet to test your steel to find the non magnetic heating point. Take note of the color.
              <li><b>Quench</b></li>
              Hardening the steel - make sure the steel is evenly heated when quenching. Use oil based quenching steels when begining. Heat to non-magnetic then quickly submerge in oil. Some people swirl their blade in the oil, some move it up and down. What you are looking for is an even quench, unless you are purposely doing a differential quench. Longer blades can be clamped to avoid warping. Check blade for twists, bends or warps. Check for hardess with a file. A file should skate off the blade, not biting into the scale easily.
              <li><b>Temper</b></li>
              Two cycles minimum at 140 degrees farenheit for one and a half hours with cooldown between cycles. Research, test, and adjust for your ideal edge and blade performance.
              <li><b>Finish Grind</b></li>
              Grind and smooth to desired finish including primary bevel. The knife will not be sharp yet unless doing a convex edge. Leave a little bit of thickness at the edge to be taken out with the sharpening bevel.
              <li><b>Attach Handle</b></li>
              There are many ways to attach the handle. I design from the handle to the tip. It must be decided before forging and hardening what type of handle you want, which will dictate what type of tang you will need to make on your knife. Full tang knives, where the tang extends all the way to the edges of the handle, are generally the stongest design and easier to produce. Handle scales can be mounted with screws or bolts to be easily removable.
              <li><b>Sharpen</b></li>
              Choose any prefered method to put the first sharpened secondary bevel on your knife, it could take a long time by hand with stones. I like to use a Lansky guided system for this. It makes it easy to choose an angle and keep it consitent. I generally use 20 degrees per side.
              <li><b>Test</b></li>
              Do whatever torture tests you deem necessary for the knife to accomplish based on results of your previous testing of samples or other knives made with the same materials and procedures.
              <li><b>Make a Sheath</b></li>
              Traditional leather, and the more modern thermo-plastics like Kydex both have advantages and disadvantages.
              </ul>
              <h2>Testing</h2>
              Study spark testing steel for choosing recycled steel that is suitable for certain edged tools. 
              Heat treat a test portion of any unknown steels and test before using in projects.
              <ul><li><b> Edge Retention Testing</b></li>
              You can count the number of slices you get through things like carboard or carpet before noticeable performance loss. Compare with known good blade results. Look for chipping or rolling.
              <li><b>Durability Testing</b></li>
              Chopping or hammering the knife through things like bone or brass rods are tough, but useful tests, to check a knife's durability. You can start with easier tests of course, like choppimg wood. Look for cracks.
              Bends or warps in the blade are generally from the blade not being hard enough. Chips, cracks or breaks are generally from the blade being too hard.
              </ul>


              </p>
              <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={trio}
              alt="Torrin early forge inside"
            />
            </div>
        </div>
      </div>
          <body>
          
          </body>
    </div>
  );
}

export default Create;