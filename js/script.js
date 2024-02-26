const menuButton = document.querySelector("#toggleBtn");
const menu = document.querySelector(".navbar");


document.addEventListener('DOMContentLoaded', function() {
  let toggleBtn = document.getElementById('toggleBtn');
  var navbar = document.querySelector('.navbar');

  toggleBtn.addEventListener('click', function() {
    navbar.classList.toggle('active');
    let expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
  });

  console.log(toggleBtn);
});


// menuButton.addEventListener("click", function (menu) {
    //if (menu.classList.contains("show")) {
        //menu.classList.remove("show");
       // menuButton.classList.add("disappear");
        //console.log(`Yes`);
      //} else {
     //   menu.classList.add("show");
     //   menuButton.classList.remove("disappear");
   //   }
// });

// console.log(menuButton)