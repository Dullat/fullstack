const path = require("path");
const chalk = require("chalk");
// a built-in module that provides utilities for working with file and directory paths
// in a platform-independent way. It handles differences in path separators between
// operating systems (e.g., forward slashes / on Linux/macOS and backslashes \ on Windows)
// it provie methods that perform string transformations on path strings

// adds correct separator / or \
// path.join("folder", "file.txt")
// path.join("folder1/folder2/", "file.txt") this is a bad practice coz (/,\), so use __dirname

// ######### understanding __dirname and __filename before goin to path###############

console.log("Filename: ", __filename); // absolute path to current file
console.log("Dirname: ", __dirname); // where file is
console.log("Cwd : ", process.cwd()); // where node was started: node node/8.path.js then cwd -> fullstack/
require("../javaScript/6.json.js");
// if you do node node/8.path.js the cwd is "fullstack/" and __dirname is "node/"

// ######### Join ######################

const filePath = path.join(__dirname, "uploads", "some.txt");
console.log(chalk.bgYellow.black(filePath));
const os = require("os");
console.log(chalk.red(path.join(os.tmpdir(), filePath))); // you can also form wrong paths

// ######## Resolve ####################
// converts to absolute path, it starts from process.cwd()
const abPath = path.resolve("someFolder", "file.txt");
console.log(chalk.yellow(abPath));

// ######## Basename, extracting filename from fullpath #######
console.log(chalk.bgGreen.black("######### .basename #################"));
console.log(path.extname(filePath));

// ######## Parse  #####################
// returns object with full details like: root, dir, base, ext, name
console.log(chalk.bgYellow.black("########## Parse ###########"));
const parsedPath = path.parse(filePath);
console.log(parsedPath);

// ######## format, oposite of parse #########
console.log(chalk.bgYellow.black("########## Format ###########"));
console.log(path.format(parsedPath));

// ######## other things and practice ########
console.log(
  chalk.bgYellow.black("########## Other things and practice ###########"),
);

console.log(path.basename(filePath));

const fs = require("fs");

function saveFile(fileName, content) {
  const filePath = path.join(os.tmpdir(), `${fileName}.txt`);

  fs.writeFileSync(filePath, content, "utf8");
}

function readFile(fileName) {
  const filePath = path.join(os.tmpdir(), `${fileName}.txt`);
  const data = fs.readFileSync(filePath);
  return data;
}

saveFile("sample", "this is my name");
console.log(readFile("sample").toString());

console.log(path.sep); // shows what separator Os using
