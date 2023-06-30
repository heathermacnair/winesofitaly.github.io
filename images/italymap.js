// This document pertains to the Italy map SVG. When a user hovers over a region, they will view a dynamic tooltip that states the name of the region being hovered over.

/**
 *This tooltip has been adapted from:
 * Peter Coolingridge - “Tooltip”
 * https://www.petercollingridge.co.uk/tutorials/svg/interactive/tooltip/
 **/

//function to declare region name while hovering on SVG map region
const regionName = function() {
    const tooltip = document.getElementById('showToolTip');
    const regions= document.getElementsByClassName('region');
    //loop through the regions and read out each value to determine when to show the tooltip or hide the tool tip.
  for (let i = 0; i < regions.length;i++){
    regions[i].addEventListener('mousemove', showTooltip);
    regions[i].addEventListener('mouseout', hideTooltip);
  }

  //function to display tooltip that will follow the mouse
  function showTooltip(event){
    const svg = document.getElementById('tooltip-svg');
    const hoveredRegion = event.target.textContent.trim();
    //convert screen coordinate system to SVG coordinates
    const CTM = svg.getScreenCTM();
    const mouseX = (event.clientX - CTM.e) / CTM.a;
    const mouseY = (event.clientY - CTM.f) / CTM.d;
    //position tooltip next to mouse - the tooltip has been shifted 16 units in x direction and 20 units in the y direction.
    tooltip.setAttributeNS(null, "x", mouseX + 16 / CTM.a);
    tooltip.setAttributeNS(null, "y", mouseY + 20 / CTM.d);
    tooltip.setAttributeNS(null, "visibility", "visible");
    tooltip.innerHTML = hoveredRegion;
  }

  //hide tooltip function
  function hideTooltip(){
    tooltip.setAttributeNS(null, 'visibility', 'hidden');
  }
};
//call regionName function
regionName();
