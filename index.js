const { readJsonFile, readJsonFileAsync, sum, concat } = require("./app");

/**
 * We waiting for the file to be read and when the operation is done we print the result out
 *
 */
console.log(
  "[INFO] Start to read file in an async way and continue with the script exec until the operation finishes"
);
readJsonFileAsync("./app/data.json").then((res) => {
  console.log("[INFO] File read succesfully in an async way.");
  console.log(`[INFO] Sum of list (ASYNC): \t\t${sum(res)}`);
  console.log(`[INFO] Sum of concat list (ASYNC): \t${sum(concat(res))}`);
});

/**
 *
 * We are waiting for the file to be read first and then we continue calculations
 *
 */
console.log("[INFO] Reading contents of the file in a blcking way.");
const data = readJsonFile("./app/data.json");
console.log(`[INFO] Sum of list (SYNC): \t\t${sum(data)}`);
console.log(`[INFO] Sum of concat list (SYNC): \t${sum(concat(data))}`);
