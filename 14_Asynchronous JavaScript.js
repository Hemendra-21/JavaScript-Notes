// *************** 🔁 EVENT LOOP MASTERCLASS ***************//



// 🧠 1. Call Stack — The Brain of JS
{
//     JS is single-threaded, meaning one thing at a time. The Call Stack keeps track of what function is currently being executed.

function one() {
    console.log('1');
    two();
    console.log('1 end');
  }
  
  function two() {
    console.log('2');
  }
  
  one();
}


// 🌐 2. Web APIs — Outsourcing Async Tasks
{
    
    // setTimeout, fetch, DOM Events etc. — handed off to the Browser's Web APIs.
    
    console.log('Start');
    setTimeout(() => console.log('Timeout'), 0);
    console.log('End');

Output:

Start
End
Timeout

// Why?

//     setTimeout is sent to Web APIs

//     After delay (0ms here), it moves to Macrotask Queue

//     Event Loop waits for call stack to empty, then pushes it back in.


}


// 🔁 3. Event Loop — The Traffic Cop
{

// Keeps checking if the call stack is empty. If it is, it:

// Pushes tasks from Microtask Queue first

// Then from Macrotask Queue
}


// 🧵 4. Microtask Queue — High Priority 🔥
{
    // Promises, queueMicrotask, MutationObserver land here.

    console.log('Start');
    Promise.resolve().then(() => console.log('Promise'));
    console.log('End');

    output:
    Start
    End
    Promise

    // ✅ Promise callback (microtask) executes after current stack is empty but before macrotasks like setTimeout.


}


// 🔨 5. Macrotask Queue — setTimeout, setInterval, etc.
{
    console.log('A');
    
    setTimeout(() => {
        console.log('B'); // Macrotask
    }, 0);

    Promise.resolve().then(() => {
    console.log('C'); // Microtask
    });

    console.log('D');


    // Execution Flow:

    // A → D → (Microtask) C → (Macrotask) B

}








// ****************** PROMISES ***************** //


{
    function testPromise(){
        return new Promise((resolve,reject)=>{
            let res = 10;

            if(2 + 5 === res){
                resolve('correct answer')
            }
            else{
                reject('wrong answer')
            }
        })
    }


    testPromise().then(message=>{
        console.log('result is ' + message)
    })
    .catch(message=>{
        console.log('result is ' + message)
    })
}


