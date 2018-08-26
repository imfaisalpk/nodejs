const EventEmitter = require('events');

// const emitter = new EventEmitter();


// console.log(exports);
// console.log(require);
// console.log(module);
// console.log(__filename);
// console.log(__dirname);


// console.log("---Logger---");
var url = "https://imfaisal.com";


class Logger extends EventEmitter{
    login(input){
        // Send login info.
        console.log(input);
    
        // Raise an event
        this.emit('messageLogged',{id:1,url:"Https://"});
    }

}




// module.exports.login = login;
module.exports = Logger;

