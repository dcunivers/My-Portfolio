
function navFunction() {
  const navmenu = document.getElementById("navbar");
    if (navmenu.style.display === "block") {
    navmenu.style.display = "none";
    } else {
  navmenu.style.display = "block";
  }
};

const toggleBtn = document.querySelector('#toggleBtn')
const toggleBtnIcon = document.querySelector()
const dropDownMenu = document.querySelector()

toggleBtn.onClick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')
}