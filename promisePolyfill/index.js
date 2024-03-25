console.log("--start--");

//write a promise

function promiseA(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number") return reject("Invalid Input");
      resolve(a * a);
    }, 1000);
  });
}

promiseA(2)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Done"));

//create a promise polyfill

class MyPromise {
  //declaring private variables
  #thens = [];
  #catchs = [];
  #finallys = [];
  constructor(cb) {
    cb(this.resolve, this.reject);
  }

  resolve(value) {
    this.#thens.forEach((cb) => cb(value));
    this.#finallys.forEach((cb) => cb());
  }
  reject(error) {
    this.#catchs.forEach((cb) => cb(error));
    this.#finallys.forEach((cb) => cb());
  }

  then() {
    this.#thens.push(cb);
  }

  catch(cb) {
    this.#catchs.push(cb);
  }

  finally(cb) {
    this.#finallys.push(cb);
  }
}
