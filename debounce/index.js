let count = 1;

const expensiveFn = () => {
  setTimeout(() => {
    console.log("fetching data..." + count++);
  }, 0);
};

const debouncedFn = debounceFn(expensiveFn, 500);

function debounceFn(callback, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback.call(this, ...args);
    }, delay);
  };
}
