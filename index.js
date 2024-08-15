const drums = document.querySelectorAll(".drum");
var numberOfDrums = drums.length;

const sound = new Map();
sound.set("w", "tom-1");
sound.set("a", "tom-2");
sound.set("s", "tom-3");
sound.set("d", "tom-4");
sound.set("j", "snare");
sound.set("k", "crash");
sound.set("l", "kick-bass");

for (let i = 0; i < numberOfDrums; i++) {
  drums[i].addEventListener("click", function () {
    var button_clicked = this.innerHTML;
    playSound(button_clicked);
    buttonAnimation(button_clicked);
  });
}

function buttonAnimation(button_clicked) {
  var activeButton = document.querySelector("." + button_clicked);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

document.addEventListener("keypress", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(button_clicked) {
  switch (button_clicked) {
    case "w":
      var audio = new Audio(`./sounds/tom-1.mp3`);
      audio.play();
      break;
    case "a":
      var audio = new Audio(`./sounds/tom-2.mp3`);
      audio.play();
      break;
    case "s":
      var audio = new Audio(`./sounds/tom-3.mp3`);
      audio.play();
      break;
    case "d":
      var audio = new Audio(`./sounds/tom-4.mp3`);
      audio.play();
      break;
    case "j":
      var audio = new Audio(`./sounds/snare.mp3`);
      audio.play();
      break;
    case "k":
      var audio = new Audio(`./sounds/crash.mp3`);
      audio.play();
      break;
    case "l":
      var audio = new Audio(`./sounds/kick-bass.mp3`);
      audio.play();
      break;
    default:
      alert("Please press the keys which are mentioned.");
  }
}
