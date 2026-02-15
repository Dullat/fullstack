const process = require("process");

// ######### Process Info ##########

console.log(process.pid);
// console.log(process.kill(process.pid), "SIGINT");
// console.log(process.kill(process.ppid)); // parent process is nodemon, so it will kill the nodemon

console.log("Node exec path:", process.execPath);
console.log("Current working dir:", process.cwd());
console.log("Script filename:", __filename);
console.log("Script dirname:", __dirname);

// ########## Env variables ##########
console.log(process.env.NODE_ENV);
console.log(process.env.PATH); // NODE_ENV=production node app.js

// ######### argv ################
// args taken wile execution: node some.js "dullat" qwak

console.log(process.argv);

// ####### many more things in .md ########
process.stdout.write("Hello world\n");
