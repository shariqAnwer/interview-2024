//write a promise polyfill
class MyPromise {
  //declaring private variables
  #thens = [];
  #catchs = [];
  #finallys = [];
  constructor(cb) {
    const resolve = this.resolve.bind(this);
    const reject = this.reject.bind(this);

    setTimeout(() => cb(resolve, reject), 1);
  }

  resolve(value) {
    this.#thens.forEach((func) => func(value));
    this.#finallys.forEach((func) => func());
  }
  reject(error) {
    this.#catchs.forEach((func) => func(error));
    this.#finallys.forEach((func) => func());
  }

  then(cb) {
    this.#thens.push(cb);
    return this;
  }

  catch(cb) {
    this.#catchs.push(cb);
    return this;
  }

  finally(cb) {
    this.#finallys.push(cb);
    return this;
  }
}

function promiseA(a) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== "number") return reject("Invalid Input");
      resolve(a * a);
    }, 1000);
  });
}

promiseA(2)
  .then((res) => console.log(res))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
