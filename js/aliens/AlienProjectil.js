import { PlayerDied } from "../player/player.js";
import { PlayerStat } from "../player/playerstats.js";

let AlienProjectilId = 0;
class Projectile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.id = AlienProjectilId;
    AlienProjectilId += 1;
    this.toremove = false;
  }
  create() {
    let newDiv = document.createElement("div");
    let Game = document.getElementById("gameId");
    newDiv.style.position = "absolute";
    newDiv.setAttribute("id", this.id);
    newDiv.dataset.y = `${this.y}`;
    newDiv.className = "alien-ball";
    newDiv.style.top = `${this.y}px`;
    newDiv.style.left = `${this.x}px`;
    newDiv.style.zIndex = 2;
    Game.prepend(newDiv);
  }
}

let Projectiles = [];
let DisplayProjectile = () => {
  let Game = document.querySelector(".FithAlien_div");
  let idinter = setInterval(() => {
    let alien = [...document.querySelectorAll(".firth-aliens")];
    let RamdomAlien = getThreRandom(alien);
    RamdomAlien.forEach((elem) => {
      let p = new Projectile(
        elem.getBoundingClientRect().x,
        Game.getBoundingClientRect().y -
          (Number(elem.id) / 30) * elem.getBoundingClientRect().height
      );
      p.create();
      Projectiles.push(p);
    });
  }, 1500);
  window.intervalid.push(idinter);

 let intertFor= setInterval(()=>{
    UpateProjectile();
  },1000/60)
  window.intervalid.push(intertFor)
};

function getThreRandom(arr) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

let Detectecolision = (a = new HTMLElement(), b = new HTMLElement()) => {
  let cordA = a.getBoundingClientRect();
  let Ball = b.getBoundingClientRect();

  return (
    Ball.top + Ball.height >= cordA.top &&
    ((cordA.x <= Ball.x && cordA.x + cordA.width >= Ball.x) ||
      (cordA.x <= Ball.x + Ball.width &&
        cordA.x + cordA.width >= Ball.x + Ball.width))
  );
};

let UpateProjectile = () => {
  let balls = document.querySelectorAll(`.alien-ball`);
  let Playerid = document.getElementById("player");
  let mainGame = document.getElementById("gameId").getBoundingClientRect();
  let obstacles = [...document.querySelectorAll(".alive")];

  for (let ball of balls) {
    let is = false;
    for (const elem of obstacles) {
      if (Detectecolision(elem, ball)) {
        elem.classList.replace("alive", "died");
        elem.style.backgroundColor = "black";
        ball.remove();
        is = true;
        break;
      }
    }
    if (is) {
      continue;
    }

    let cord = ball.getBoundingClientRect();
    if (Detectecolision(Playerid, ball)) {
      ball.remove();
      PlayerDied(PlayerStat, Playerid);
      continue;
    }
    if (cord.y + cord.height >= mainGame.height + mainGame.y) {
      ball.remove();
      continue;
    }
    ball.style.transform = `translateY( ${Number(ball.dataset.y)}px)`;
    ball.dataset.y = Number(ball.dataset.y) + 8;
  }
};

export { DisplayProjectile };
