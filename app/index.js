const fs = require("fs/promises");
const _ = require("lodash");

async function getData() {
  try {
    const data = await fs.readFile("app/data.json", { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function concat(arr) {
  return _.concat(arr, [1, 2, 3]);
}

function sum(arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}

module.exports = {
  getData,
  concat,
  sum,
};
