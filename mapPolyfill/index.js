const arr = [1, 2, 3, 4];

// map polyfill
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

const res = arr.myMap((el, i, arr) => el * 2);

console.log(res);
