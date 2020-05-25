const parse = require("csv-parse");
const fs = require("fs");

function getServices(path) {
  return new Promise((resolve, reject) => {
    let data = [];
    fs.createReadStream(path)
      .pipe(parse({ delimiter: ",", columns: true }))
      .on("data", row => data.push(row))
      .on("end", () => resolve({ services: data }))
      .on("error", error => reject(error));
  });
}

module.exports = { getServices };
