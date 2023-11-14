let background = new Audio("./assets/audio/background.mp3");
let shoot = new Audio("./assets/audio/shoot.wav");

export const backgroundSound = () => {
  background.volume = 0.5;
  background.loop = true;
  background.play();
};

export const shootSound = () => {
  shoot.volume = 0.25;
  shoot.play();
};

export const stopAll = () => {
  background.pause();
  shoot.pause();
  background.currentTime = 0;
  shoot.currentTime = 0;
};
