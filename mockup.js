let HamburgerMenu = document.getElementById("HamburgerMenu");
let LearningElementMenu = document.getElementById("LearningElementMenu");

let HamburgerMenuOff = (HamburgerMenu.style.display = "none");
let LearningElementMenuOff = (LearningElementMenu.style.display = "none");

function HamburgerMenuSwitch() {
  if (HamburgerMenu.style.display == "none") {
    HamburgerMenu.style.display = "block";
  } else {
    HamburgerMenu.style.display = "none";
  }
}

function LearningElementMenuSwitch() {
  if (LearningElementMenu.style.display == "none") {
    LearningElementMenu.style.display = "block";
  } else {
    LearningElementMenu.style.display = "none";
  }
}
