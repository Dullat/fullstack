const fs = require("fs");
const path = require("path");
const os = require("os");
const cluster = require("cluster");

console.log(os.cpus()[0]);
console.log(os.type(), os.platform(), os.release());

console.log("total n of cpus: ", os.cpus().length);
console.log(os.userInfo());
console.log(os.homedir()); // $HOME

// ###### Clustring #########
if (cluster.isMaster) {
  console.log(cluster.fork.toString());
}

// total vs freemem
console.log(
  `Total mem: ${os.totalmem() / (1024 * 1024)}\nFree mem: ${os.freemem() / (1024 * 1024)}`,
);

// uptime
console.log(os.uptime());

// ####### tmp dir, save tmp or cache files ########
console.log(os.tmpdir());

const tempFile = path.join(os.tmpdir(), "cache.json");

fs.writeFileSync(tempFile, JSON.stringify({ name: "dullat" }));

const data = fs.readFileSync(tempFile);
console.log(data, JSON.parse(data));

// ######## Network #########
console.log(os.networkInterfaces());

// ########## CLI ###########

console.log("---- System Info ----");
console.log("OS:", os.type(), os.platform(), os.release());
console.log("CPU cores:", os.cpus().length);
console.log("Free memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2));
console.log("Total memory (MB):", (os.totalmem() / 1024 / 1024).toFixed(2));
console.log("System uptime (hrs):", (os.uptime() / 3600).toFixed(2));
console.log("User:", os.userInfo().username);
