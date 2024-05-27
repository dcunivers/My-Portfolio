const menuButton = document.querySelector("#toggleBtn");
const menu = document.querySelector(".header-divider");


document.addEventListener('DOMContentLoaded', function() {
  let toggleBtn = document.getElementById('toggleBtn');
  var navbar = document.querySelector('.navbar');

  toggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    let expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
  });

});


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}