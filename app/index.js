const fs = require("fs");
const _ = require("lodash");

/**
 * Reading a json file and return content
 *
 * @param {String} path
 * @returns {Object}
 */
function readJsonFile(path) {
  try {
    const data = fs.readFileSync("app/data.json", { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

/**
 * Concate the given array with another array
 *
 * @param {Array} arr
 * @returns {Array}
 */
function concat(arr) {
  return _.concat(arr, [1, 2, 3]);
}

/**
 * Geting sum of elements of the array
 *
 * @param {Array} arr
 * @returns {Number}
 */
function sum(arr) {
  return arr.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}

module.exports = {
  readJsonFile,
  concat,
  sum,
};
