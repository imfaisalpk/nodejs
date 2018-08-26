
const EventEmitter = require('events');

// const emitter = new EventEmitter();



const Logger = require("./logger");

// login("message");

const logger = new Logger();



// Register a Listener
logger.on("messageLogged",(eventArg) => {
    console.log("Listener Called ",eventArg);
});

// Raise Event
logger.login("Pakistan");





// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log(files);

// fs.readdir("./",function(err,files){
//     if(err) console.log(err);
//     else console.log("Result ",files);
         
// });



// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// TemplateString
// ECMAScript 6

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);


// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);




// const logger = require('./logger');

// console.log(logger);
// logger.login("MFAISAL");
// logger("MFAISAL");



// function hello(name){
//     console.log("Hello "+name);
// }

// hello("Pakistan!");
// console.log(window);

// console.log(module);