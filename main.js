

var disELement = document.getElementById("displayed");

window.addEventListener("deviceorientation", handleOrientation, true);




disELement.innerHTML = DeviceOrientationEvent.gamma;
