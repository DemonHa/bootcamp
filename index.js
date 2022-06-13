const { readJsonFile, sum, concat } = require("./app");

const data = readJsonFile("./app/data.json");
console.log(sum(data));
console.log(sum(concat(data)));
