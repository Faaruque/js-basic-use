/*--sideNaveBarBtn--*/

var sideNaveBtn = document.getElementById("sideNaveBtn");
var sideNav = document.getElementById("sideNav");
var closeMenu = document.getElementById("closeMenu");

// frist option
sideNave.style.right = "-250px";

sideNaveBtn.addEventListener("click", function () {
  if (sideNave.style.right == "-250px") {
    sideNave.style.right = "0";
    closeMenu.src = "image/close.png";
  } else {
    sideNave.style.right = "-250px";
    closeMenu.src = "image/menu.png";
  }
});

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
