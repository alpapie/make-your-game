let left = 0;
let step = 2;
let moveLeft = true;

export let MoveAlienPbaMalack = () => {
  if (!window.isPaused) {
    let GameWidth = document.getElementById("gameId").getBoundingClientRect();
    MoveAlien(left);
    moveLeft ? (left += step) : (left -= step);
    IstouchLeft(GameWidth)
      ? (moveLeft = false)
      : left < 0
      ? (moveLeft = true)
      : null;
    requestAnimationFrame(MoveAlienPbaMalack);
  }
};

let MoveAlien = () => {
  let Aliens = document.querySelectorAll(".firth-aliens");
  Aliens.forEach((alien) => {
    alien.style.transform = `translate(${left}px)`;
  });
};

let IstouchLeft = (GameWidth) => {
  let Aliens = Array.from(document.querySelectorAll(".firth-aliens"));
  return Aliens.some((elem) => {
    let { x, width } = elem.getBoundingClientRect();
    return x + width >= GameWidth.x + GameWidth.width;
  });
};


let isLeft = false;
export let MoveBigAlien = () => {
  let Bigalien = document.querySelector(".big-aliens");
  let { width } = document.getElementById("gameId").getBoundingClientRect();

  let move = isLeft ? Bigalien.clientWidth + 2 : width;
  let intert = setInterval(() => {
    Bigalien.querySelector("img").style.opacity = "10";
    Bigalien.classList.remove("died");
    if (
      move - Bigalien.getBoundingClientRect().width > 0 &&
      move - 1.5 < width
    ) {
      Bigalien.style.transform = `translateX( ${
        move - Bigalien.getBoundingClientRect().width + 1
      }px)`;
      move = isLeft ? move + 1.5 : move - 1.5;
    } else {
      isLeft = !isLeft;
      Bigalien.querySelector("img").style.opacity = "0";
      Bigalien.classList.add("died");
      clearInterval(intert);
    }
  }, 20);
  window.intervalid.push(intert)
};
