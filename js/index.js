window.intervalid = [];
window.isPaused = false;
window.Isleft=false
window.Isright=false
window.IsGameOver=false
import { DisplayProjectile } from "./aliens/AlienProjectil.js";

import { MoveAlienPbaMalack } from "./aliens/MooveAlien.js";
import { backgroundSound, stopAll } from "./animation/audio.js";
import { obstacles } from "./player/obstacles.js";
import { timer } from "./animation/timer.js";
import { displayPauseMenu, pause_game, restart_game, resume_game } from "./animation/menu.js";
import { animateWithThrottle, CreateAliens } from "./aliens/alien.js";
import { handleKeyDown } from "./player/player.js";

//$=$=$=$=$=$=$=$= MAIN ENTRYPOINT $=$=$=$=$=$=$=$=
export const handleMute = (event) => {
  if (event.target.textContent === "Mute") {
    event.target.textContent = "Unmute";
    stopAll();
  } else {
    event.target.textContent = "Mute";
    backgroundSound();
  }
};

export const handleOnload = () => {
  CreateAliens();
  obstacles();
  // backgroundSound();
  timer();
  animateWithThrottle();
  DisplayProjectile();
  displayPauseMenu();
  MoveAlienPbaMalack();
};

export const main = () => {
  window.addEventListener("load", handleOnload);

  let pauseButton = document.querySelector(".pause");
  pauseButton.addEventListener("click", pause_game);

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup",(e)=>{
    window.Isleft=false
    window.Isright=false
  })

  let muteBtn = document.querySelector(".mute > button");
  muteBtn.addEventListener("click", handleMute);

  let resumeBtn = document.querySelector(".resume");
  resumeBtn.addEventListener("click", resume_game);
  document.querySelector(".restart").addEventListener("click", restart_game);
};

main();