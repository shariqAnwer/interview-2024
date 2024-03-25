const arr = [1, 2, 3, 4, 5, 6];

Array.prototype.myReduce = function (cb, initialVal) {
  let acc = initialVal || 0;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

const sum = arr.myReduce((acc, cv, i, arr) => acc + cv, 0); //0 indicated initial value and it can be any number
console.log(sum);
