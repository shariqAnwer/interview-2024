const btn = document.querySelector(".increment-btn");
const btnPress = document.querySelector(".increment-pressed");
const count = document.querySelector(".increment-count");

let pressedCount = 0;
let triggerCount = 0;
const start = new Date().getTime();

//polyfill
const myThrottle = (callback, delay) => {
  let last = 0;

  return function (...args) {
    let now = new Date().getTime();
    let diff = now - last;
    if (diff < delay) return;
    last = now;
    return callback(...args);
  };
};

const throttled = myThrottle(() => {
  //myThrottle(cb, delay)
  triggerCount++;
  count.innerHTML = `Triggered - ${triggerCount}`;
}, 1000);

btn.addEventListener("click", () => {
  pressedCount++;
  btnPress.innerHTML = `Button Pressed - ${pressedCount}`;

  const now = new Date().getTime();
  const difference = (now - start) / 1000;

  throttled();
});
