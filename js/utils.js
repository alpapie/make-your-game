
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const shoot = document.querySelector("#shoot");
      if (shoot.style.display === "none" || shoot.style.display === "") {
        func(...args);
      }
    }, delay);
  };
};

export function throttle(func, delay) {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func();
      lastCall = now;
    }
  };
}
