// Function to toggle the "hidden" class for a given container
function hideImage(containerId) {
    const container = document.getElementById(containerId);
    container.classList.add("flex");
    container.classList.add("hidden");
  }
  
  // Function to initially hide the image containers
  function showImage(containerId) {
    const container = document.getElementById(containerId);
    container.classList.remove("hidden");
    container.classList.add("flex");
  }
  
  // Add event listeners to the buttons to toggle and initially hide/show the image containers
  document.getElementById("hideA").addEventListener("click", function () {
    hideImage("aContainer");
  });
  
  document.getElementById("hideB").addEventListener("click", function () {
    hideImage("bContainer");
  });
  
  document.getElementById("hideC").addEventListener("click", function () {
    hideImage("cContainer");
  });
  
  document.getElementById("aButton").addEventListener("click", function () {
    showImage("aContainer");
  });
  
  document.getElementById("bButton").addEventListener("click", function () {
    showImage("bContainer");
  });
  
  document.getElementById("cButton").addEventListener("click", function () {
    showImage("cContainer");
  });