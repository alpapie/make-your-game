import { ExploseVessau } from "../aliens/AlienExplosion.js";
import { displayGameOver, pause_game ,resume_game} from "../animation/menu.js";
import { PlayerStat } from "./playerstats.js";
import { debounce } from "../utils.js";
import { shootSound } from "../animation/audio.js";
const bulletSpeed = 10;
const PlayerSpeed=7
const updateScore = (value) => {
  let score = document.querySelector(".score > span");

  PlayerStat.numAliens--;
  PlayerStat.score = Number(value) + Number(score.textContent);
  score.textContent = PlayerStat.score;
};

const checkCollision = (element1, element2) => {
  if (element1 && element2) {
    const rect1 = element1.getClientRects()[0];
    const rect2 = element2.getClientRects()[0];
    return (
      ((rect1.x > rect2.x && rect1.x < rect2.x + rect2.width) ||
        (rect1.x + rect1.width > rect2.x &&
          rect1.x + +rect1.width < rect2.x + rect2.width)) &&
      rect1.y - rect1.height <= rect2.y
    );
  }
};

// if collisions return true
const handleCollisions = (shootElement, objArr) => {
  if (shootElement.style.display === "none") return false;

  for (const obj of objArr) {
    if (checkCollision(shootElement, obj)) {
      if (obj.hasAttribute("data-type")) {
        obj.style.opacity = "0";
        obj.classList.add("died");
        updateScore(obj.dataset.points);
      } else {
        obj.classList.replace("alive", "died");
        obj.style.backgroundColor = "black";
      }
      return true;
    }
  }
  return false;
};

let bulletPositionY;
let GameRect = document.getElementById("gameId").getClientRects()[0];

export const shoot = () => {
  let shootElement = document.querySelector("#shoot");
  let playerRect = document.querySelector("#player").getClientRects()[0];

  bulletPositionY = GameRect.height - playerRect.height;

  shootElement.style.left =
    playerRect.x +
    playerRect.width / 2 -
    shootElement.getBoundingClientRect().width / 2 +
    "px";
  shootElement.style.top = bulletPositionY + "px";
  shootElement.style.display = "block";

  moveBullet();
};

export const moveBullet = () => {
  let isCollision = false;

  let shootElement = document.querySelector("#shoot");
  bulletPositionY -= bulletSpeed;

  let points = [...document.querySelectorAll(".alive")];
  let aliens = [
    document.querySelector(".big-aliens:not(.died)"),
    ...document.querySelectorAll(".firth-aliens:not(.died)"),
  ];
  isCollision = handleCollisions(shootElement, points);
  if (!isCollision) {
    isCollision = handleCollisions(shootElement, aliens);
  }
  setVisibility(isCollision, shootElement)
    ? !window.isPaused
      ? requestAnimationFrame(moveBullet)
      : null
    : null;

  if (PlayerStat.numAliens === 1) {
    displayGameOver("CONGRATS");
  }
};


export const movePlayer = (key) => {
  // console.log(left);

  if (key === "ArrowRight") {
    if (!window.Isright) {
      window.Isright=true
      moveright();
    }
  }
  if (key === "ArrowLeft") {
    if (!window.Isleft) {
      window.Isleft=true
      moveLeft();
    }
  }
};

export const PlayerDied = (
  currentPlayer = new PlayerStat(),
  playerId = new HTMLElement()
) => {
  let lives = document.querySelectorAll(".lives > div");
  lives[lives.length - 1].remove();
  
  let playerdied=setTimeout(() => {
    playerId.innerHTML = "";
    let newimg= document.createElement("img")
    newimg.src="./assets/icons/player.png"
    playerId.append(newimg);
  }, 500);
  playerId.innerHTML = ExploseVessau;

  if (--currentPlayer.lives === 0) {
    clearTimeout(playerdied)
    PlayerStat.timer = document.querySelector(".timer > span").textContent;
    displayGameOver("GAME OVER");
    return;
  }
};

const setVisibility = (isCollision, shootElement) => {
  if (bulletPositionY - GameRect.top > 0 && !isCollision) {
    shootElement.style.top = bulletPositionY + "px";
    return true;
  } else {
    shootElement.style.display = "none";
    return false;
  }
};

//player move vessau

const debouncedShoot = debounce(shoot, 300);

export const handleKeyDown = (event) => {
  if (!window.isPaused) {
    if (event.code === "Space") {
      debouncedShoot();
      shootSound();
    }
    movePlayer(event.key);
  }

  if (event.key === "Escape") {
    if (window.isPaused && !window.IsGameOver) {
      resume_game();
    } else {
      pause_game();
    }
  }
};
function moveLeft() {
  let Vaisseau = document.querySelector("#player");
  let left = Number(
    Vaisseau.style.transform.replace("translateX(", "").split("px)")[0]
  );
  Vaisseau.left = Vaisseau.style.transform = `translateX( ${left - PlayerSpeed > 0 ? left - PlayerSpeed : 0}px)`;
  window.Isleft?requestAnimationFrame(moveLeft):null

}

function moveright() {
  const MainGame = document.querySelector(".main-game");
  let Vaisseau = document.querySelector("#player");
  let left = Number(
    Vaisseau.style.transform.replace("translateX(", "").split("px)")[0]
  );
  let transition = left + Vaisseau.getBoundingClientRect().width + PlayerSpeed <
    MainGame.getBoundingClientRect().width
    ? left + PlayerSpeed
    : MainGame.getBoundingClientRect().width - Vaisseau.clientWidth;
  Vaisseau.style.transform = `translateX(${transition}px)`;
  window.Isright?requestAnimationFrame(moveright):null
}

