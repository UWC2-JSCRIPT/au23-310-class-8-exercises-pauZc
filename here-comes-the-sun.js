const element = document.body;
let lightDegree = 0;
let done = false;

function illuminate() {

  // Background color changing from darkness to light
  element.style.backgroundColor = `rgb(${lightDegree},${lightDegree},${lightDegree})`;
  if (lightDegree === 255) 
  {
    done = true;
  }

  else if (lightDegree < 255) {
    // Stop the animation once background color equals black value in rgb
    lightDegree++;
    if (!done) {
      window.requestAnimationFrame(illuminate);
    }
  }
}

window.requestAnimationFrame(illuminate);