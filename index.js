for (const btn of document.querySelectorAll(".drum")) {
  btn.addEventListener("click", function () {
    let btnInnerHTML = btn.innerHTML;

    switch (btnInnerHTML) {
      case "w":
        let crashAudio = new Audio("sounds/crash.mp3");
        crashAudio.play();
        break;

      case "a":
        let kickAudio = new Audio("sounds/kick-bass.mp3");
        kickAudio.play();
        break;
      case "s":
        let snareAudio = new Audio("sounds/snare.mp3");
        snareAudio.play();
        break;
      case "d":
        let tom1Audio = new Audio("sounds/tom-1.mp3");
        tom1Audio.play();
        break;
      case "j":
        let tom2Audio = new Audio("sounds/tom-2.mp3");
        tom2Audio.play();
        break;

      case "k":
        let tom3Audio = new Audio("sounds/tom-3.mp3");
        tom3Audio.play();
        break;

      case "l":
        let tom4Audio = new Audio("sounds/tom-4.mp3");
        tom4Audio.play();
        break;

      default:
        break;
    }
  });
}
