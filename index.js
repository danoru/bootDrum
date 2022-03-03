let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let crash = new Audio("sounds/crash.mp3");

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    crash.play();
  });
}
console.log({drum:document.querySelectorAll(".drum")})