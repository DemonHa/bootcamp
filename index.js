const app = require("./app");

async function result() {
  const data = await app.getData();
  console.log(app.sum(data));
  console.log(app.sum(app.concat(data)));
}

result();
