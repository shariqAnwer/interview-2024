const normal_count = document.querySelector(".n_count");
const throttle_count = document.querySelector(".t_count");

let countN = 0;
let countT = 0;
let isScrolled = true;

const normalCount = () => {
  countN++;
  normal_count.innerHTML = `Normal count - ${countN}`;
};

const throttleCount = () => {
  if (isScrolled === true) {
    countT++;
    throttle_count.innerHTML = `Throttle count - ${countT}`;
    isScrolled = false;
    setTimeout(() => {
      isScrolled = true;
    }, 1000);
  }
};

function showCount() {
  normalCount();
  throttleCount();
}
