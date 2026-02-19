const fs = require("fs");

const stream = fs.createWriteStream("somefile.txt", { flags: "w" });
