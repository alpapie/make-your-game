let div = document.querySelector(".timer > span");
let seconds = 0;
let minutes = 0;
let timerId 
export const timer = () => {
  clearInterval(timerId)
  let body_anim = document.querySelector('body')
  let sec_anim = 30
  const intervals_anim = 5 // à modifier

  timerId = setInterval(() => {
    seconds++;
    if (seconds > 59) {
      minutes++;
      if ((minutes === 1 && seconds === 60) || (minutes === 2 && seconds === 60)) {
        sec_anim = sec_anim > intervals_anim ? sec_anim -= intervals_anim : sec_anim
        body_anim.style.animation = `anim ${sec_anim}s linear infinite`
      }
      
      seconds = 0;
      div.textContent = `${minutes}min ${seconds}s`;
    } else {
      div.textContent = `${minutes}min ${seconds}s`;
    }
  }, 1000);
  window.intervalid.push(timerId)

};
