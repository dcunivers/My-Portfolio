const toggleBtn = document.querySelector('#toggleBtn')
const shiftedHeroArea = document.querySelector('#hero-area')


// Nav Bar Functions
function navFunction() {
  const navmenu = document.getElementById("navbar");
    if (navmenu.style.display === "block") {
    navmenu.style.display = "none";
    
    } else {
    navmenu.style.display = "block";
  }
};


// Scroll Behavior page transition
document.addEventListener('scroll', () => {
  // total scrollable height of the document
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  // Get the current scroll position
  const scrollTop = window.scrollY;
  // Calculate the scroll percentage (0 to 1)
  let scrollPercentage = scrollTop / scrollableHeight;

  // Make the transition faster and more abrupt by squaring the scroll percentage
  
  if (scrollPercentage > 0.2) {
    scrollPercentage = Math.min(1, (scrollPercentage - 0.2) * 2); // Start faster after 20% scroll
  } else {
    scrollPercentage = 0; // No transition until 20% scroll
  }
  
  // Interpolate the background color based on scroll percentage
  const startColor = [236, 231, 225] // Light color
  const endColor = [0, 0, 0]; // Dark color (black)
  const currentColor = startColor.map((start, index) => 
      Math.round(start + (endColor[index] - start) * scrollPercentage)
  );

  // Set the new background color
  document.body.style.backgroundColor = `rgb(${currentColor.join(',')})`;
});