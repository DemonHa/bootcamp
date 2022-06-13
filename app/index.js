const fs = require("fs/promises");

async function getData() {
  try {
    const data = await fs.readFile("app/data.json", { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

module.exports = {
  getData,
};
