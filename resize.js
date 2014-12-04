
var resizeVisible = false;
var hideResizeAt = 0;
var lastWindowSize = 0;
var dVPW = document.getElementById("dVPW");


function init() {
  lastWindowSize = window.innerWidth;
  setInterval(tick, 20);
}

function tick() {
  if (lastWindowSize !== window.innerWidth) {
    lastWindowSize = window.innerWidth;
    hideResizeAt = Date.now() + (1000*2.5);
    if (resizeVisible === false) {
      resizeVisible = true;
      console.log("VISIBLE");
    }
    dVPW.innerText = lastWindowSize + "px";
  } else if ((resizeVisible === true) && (hideResizeAt < Date.now())) {
    resizeVisible = false;
    console.log("HIDDEN");
  }
}

init();