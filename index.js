const { readJsonFile, sum, concat } = require("./app");

async function result() {
  const data = await readJsonFile("./app/data.json");
  console.log(sum(data));
  console.log(sum(concat(data)));
}

result();
