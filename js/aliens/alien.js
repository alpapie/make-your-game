import { throttle } from "../utils.js";

const typeAlien = Object.freeze({
  GONDIA: { points: 80, image: "red.png" }, // chief of alien
  MALACK: { points: 30, image: "malack-1.svg" },
  PBA: { points: 15, image: "pba-1.svg" },
});

class Alien {
  constructor(type, position, ID) {
    this.type = type;
    this.position = position;
    this.points = typeAlien[type].points;
    this.ID = ID;
    this.image = typeAlien[type].image;
  }
}

const initializeAliens = () => {
  const pbas = [];
  const malacks = [];

  for (let i = 1; i <= 20; i++) {
    pbas.push(new Alien("PBA", 0, i));
  }

  for (let i = 1; i <= 10; i++) {
    malacks.push(new Alien("MALACK", 0, 20 + i));
  }

  const aliens = [];
  aliens.push(pbas);
  aliens.push(malacks);
  aliens.push([new Alien("GONDIA", 0, 31)]);

  return aliens;
};

let indexAnimation = 1;
const animateAliens = () => {
  const alien_to_annimate = document.querySelector(".aliens");

  const all_alien_img1 = alien_to_annimate.querySelectorAll(".alien-img");
  indexAnimation = indexAnimation === 3 ? 1 : indexAnimation;
  all_alien_img1.forEach((alien_img) => {
    if (
      alien_img.parentNode.getAttribute("data-type").toLowerCase() !== "gondia"
    ) {
      if (
        alien_img.parentNode.getAttribute("data-type").toLowerCase() === "pba"
      ) {
        alien_img.setAttribute(
          "src",
          `./assets/icons/pba-${indexAnimation}.svg`
        );
        alien_img.style =
          "filter: invert(86%) sepia(92%) saturate(2902%) hue-rotate(339deg) brightness(92%) contrast(96%);";
      } else {
        alien_img.setAttribute(
          "src",
          `./assets/icons/malack-${indexAnimation}.svg`
        );
        alien_img.style = "filter: invert(1)"; //"filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);"
      }
    }
  });
  indexAnimation += 1;
  // requestAnimationFrame(animateAliens)
};

const throttledAnimateAliens = throttle(animateAliens, 500);

export const animateWithThrottle = () => {
  if (!window.isPaused) {
    throttledAnimateAliens();
    requestAnimationFrame(animateWithThrottle);
  }
};

export function CreateAliens() {
  const aliens_vaisseau = document.querySelector(".aliens");

  const aliens = initializeAliens();
  let divFithAlien = document.createElement("div");

  for (const type of aliens) {
    type.forEach((alien) => {
      let div = document.createElement("div");
      divFithAlien.className = "FithAlien_div";
      div.setAttribute("id", alien.ID);
      div.dataset.type = alien.type;
      div.dataset.points = alien.points;
      let img = document.createElement("img");

      img.src = "./assets/icons/" + alien.image;
      img.className = "alien-img";
      div.appendChild(img);
      if (alien.type !== "GONDIA") {
        div.className = "firth-aliens";
        div.appendChild(img);
        divFithAlien.appendChild(div);
      } else {
        div.className = "big-aliens";
        div.classList.add("died");
        img.style.width = "2vw";
        img.style.opacity = "0";
        div.appendChild(img);
        aliens_vaisseau.prepend(div);
      }
    });
    aliens_vaisseau.appendChild(divFithAlien);
  }
}
