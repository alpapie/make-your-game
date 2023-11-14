import { DisplayProjectile } from "../aliens/AlienProjectil.js";

import { MoveAlienPbaMalack } from "../aliens/MooveAlien.js";
import { animateWithThrottle } from "../aliens/alien.js";
import { moveBullet } from "../player/player.js";
import { timer } from "./timer.js";


export const displayPauseMenu = () => {
    let main = document.querySelector('.main')
    let menu = document.querySelector('.menu')
    menu.style.display = 'none'
    main.appendChild(menu)
}
export const displayGameOver = (message = '') => {
    window.IsGameOver=true
    let main = document.querySelector('.main')
    let game_over = document.querySelector('.game_over')
    document.querySelector('.game_over > p').textContent = message
    game_over.style.display = 'flex'

    window.isPaused = true
    document.querySelector('body').style.animationPlayState = 'paused';
    ClearallInterval()

    main.appendChild(game_over)
    let restartBtn = document.querySelector(".restart-end");
    console.log(restartBtn);
    restartBtn.addEventListener("click", restart_game);
}

export const pause_game = () => {
    if (!window.isPaused) {
        window.isPaused = true
        document.querySelector('body').style.animationPlayState = 'paused';
        document.querySelector('.menu').style.display = 'flex';
        ClearallInterval()
        window.Isleft=false
        window.Isright=false
     }
}
export const resume_game = () => {
    if (window.isPaused) {
        window.isPaused = false
        document.querySelector('body').style.animationPlayState = 'running';
        document.querySelector('.menu').style.display = 'none';
        animateWithThrottle();
        DisplayProjectile()
        MoveAlienPbaMalack();
        timer();
        moveBullet();
    }
}


export const restart_game = () => {
    window.location.reload();
    console.log("Restarted the game");
}

function ClearallInterval() {
    for (let id of window.intervalid) {
        console.log(id);
        clearInterval(id)
    }
}