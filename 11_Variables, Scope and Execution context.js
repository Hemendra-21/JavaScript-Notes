
// function test(){
//     var count = 20;
// }
// console.log(count)

// test()





function test(){
    if (true){
    var count = 20;
}
console.log(count)  //20
}
// console.log(count) ReferenceError: count is not defined

test()





// 🔹 1. What is a Lexical Environment?
// A Lexical Environment is a place where variables and functions live during execution.

// It has two parts:

// 🧾 Environment Record – stores the actual variables/functions.

// 🔗 Outer Lexical Environment Reference – a link to its parent scope.

// 📦 Every time you enter a new scope (like a function/block), JS creates a new lexical environment.
// 🧪 Example:

function outer() {
    let x = 10;
  
    function inner() {
      let y = 5;
      console.log(x + y); // 15
    }
  
    inner();
  }
  outer();
  
  // Here’s what’s happening:
  
  // outer() creates a Lexical Env A with x = 10
  
  // inner() creates a Lexical Env B with y = 5
  
  // When console.log(x + y) runs:
  
  // JS looks for x in Env B → not found
  
  // Jumps to parent (Env A) → finds x = 10 ✅
  
  // ✅ This jumping up the chain is called the Scope Chain
  
  
  
  
  // 2. What is a Scope Chain?
  // A Scope Chain is a stack of Lexical Environments used to resolve variable references.
  
  // When you access a variable:
  
  // JS first checks the current scope
  
  // If not found, it climbs up the chain ⬆️
  
  // Until it hits the global scope
  
  // 🌐 Scope Chain in Action:
  
  let a = "global";
  
  function one() {
    let b = "one";
  
    function two() {
      let c = "two";
      console.log(a, b, c); // ✅ a from global, b from one(), c from two()
    }
  
    two();
  }
  one();
  // ✅ Scope Chain:
  // two() → one() → global