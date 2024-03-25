const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// create a polyfill
Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) res.push(this[i]);
  }
  return res;
};

const odd = arr.myFilter((el, i, arr) => el % 2 === 1);
console.log(odd);
