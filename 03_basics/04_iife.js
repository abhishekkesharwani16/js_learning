// Immediately Invoked Function Expression (IIFE)
// its use for global scope polution

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();  // without semicolon its not end 

( (name) => {
    // unamed IIFE or simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )(`Hitesh`)

// without semicolon we do not write more than one IIFE
