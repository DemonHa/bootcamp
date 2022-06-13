const app = require("./app");
const _ = require("lodash");

function concat(arr) {
  return _.concat(arr, [1, 2, 3]);
}

function sum(arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}

async function result() {
  const data = await app.getData();
  console.log(sum(data));
  console.log(sum(concat(data)));
}

result();
