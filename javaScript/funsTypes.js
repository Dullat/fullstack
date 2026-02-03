logger()
//loggerAnonVar()
// loggerAnon()
function logger() {   // funn declaration 
    console.log("normal fun, will be hoisted")
}

const loggerAnon = function(){
    console.log("anony fun , stored in const so cant be hoisted")
}



const arrow = () => {
    console.log("no hoist, no this")
}

innr();

(function innr() {
    console.log("innr");
})();