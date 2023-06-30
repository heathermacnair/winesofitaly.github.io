// This document pertains to the Italy map SVG. When a user clicks on a region, they will be taken to that corresponding regional page. The clicked region will dynamically change colour on the map so the user is aware of what region on the map they are located in.

//Function to highlightRegion declared
function highlightRegion(){
  //obtain the rname class name from the regional HTML document
  const headings = document.getElementsByClassName('rname');
   //if the headings length is equal to zero than do not allow for region color change (ie:main regions page)
  if (headings.length === 0){
    return;
  }

  //dynamically add active class on region map that corresponds with the matching regional html page
  //allow the rname values to be recognized as lowercase
  const region = headings[0].innerText.toLowerCase();
  // obtaion map id from the regional HTML document with the region class in the SVG file
  const paths = document.getElementById('map').contentDocument.getElementsByClassName(region);
  //iterate path over objects within the paths to add active class to respective region
  for(const path of paths){
    path.classList.add('active');
  }
}

//load svg map before executing highlightRegion function
const map = document.getElementById('map');
map.addEventListener('load', function(){
  highlightRegion();
});
