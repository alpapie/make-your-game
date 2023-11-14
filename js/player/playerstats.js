const maxLives = 3;

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.lives = maxLives;
    this.timer = "";
    this.numAliens = 31;
  }
}

export let PlayerStat = new Player();
