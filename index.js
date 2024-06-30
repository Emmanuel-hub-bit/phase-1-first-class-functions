function receivesAFunction(callback) {
    // Perform some operations
    callback();
 }

 function returnsANamedFunction() {
    // Define a named function and return it
    function namedFunction() {
      console.log("This is a named function.");
    }
    
    return namedFunction;
 }

 function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      console.log("This is an anonymous function.");
    };
  }