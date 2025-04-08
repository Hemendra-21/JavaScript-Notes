// ********************* ARRAY METHODS *********************//
{

// *************** MAP()****************//
{
// Transforms every element in an array and returns a new array of the same length.


const nums = [1,2,3,4,5];

const squaredNums = nums.map((num)=>(num ** 2))

console.log(squaredNums)

}


// *************** FILTER()****************//


{

const details = [{name:'Hemendra',isComplete:true},
    {name:'Balaji',isComplete:false},
    {name:'Srinu',isComplete:true}]


const results = details.filter(
(obj)=>obj.isComplete
)

console.log(results)



//
{
    const arr = [0, 1, '', 'Hello', null, undefined];

    const results = arr.filter(Boolean)

    console.log(results)

    // **** Under the hood, it works as **** //

    // const results = arr.filter(item=> Boolean(item) === true)

    // console.log(results)
}


{
//     Delete item by ID

// No .splice() drama. Just .filter() it out like a boss.
const newTodos = todos.filter(todo => todo.id !== targetId);

}



{
    // log only emails which are verified using filter

    const details = [
        {email:'abcd@gmail.com',isVerified:true},
        {email:'efgh@gmail.com',isVerified:false},
        {email:'ijkl@gmail.com',isVerified:true},
        {email:'mnop@gmail.com',isVerified:true},
        {email:'qrst@gmail.com',isVerified:false},
        {email:'uvwxyz@gmail.com',isVerified:false}
    ]

    const results = details.filter((item)=>item.isVerified).map(item=>item.email)

    console.log(results)
}




{
    // log only products in each order which are in stock using filter

    const orders = [
        {
          orderId: 101,
          customer: "Hemendra",
          items: [
            { name: "Laptop", inStock: true },
            { name: "Mouse", inStock: false },
            { name: "Keyboard", inStock: true }
          ]
        },
        {
          orderId: 102,
          customer: "Rohit",
          items: [
            { name: "Monitor", inStock: false },
            { name: "USB Cable", inStock: false }
          ]
        },
        {
          orderId: 103,
          customer: "Charan",
          items: [
            { name: "Desk Chair", inStock: true },
            { name: "Table", inStock: true }
          ]
        }
      ];


      const results = orders.map(
        order =>({
            ...order,
            items: order.items.filter(item=>item.inStock)
        })
      )

    //   console.log(results)

    //   console.dir(results,{depth:null})

    // console.log(JSON.stringify(results,null,2))






    


    // Q: Why do I see [Object] instead of actual object content when logging nested arrays or objects in Node.js?

    // A: Node.js by default compresses complex nested structures in the console for readability, especially inside arrays.
    //    So instead of printing full objects, it just shows [Object] to keep things short.
       
    //    But when you're debugging or building APIs, you want the full juicy detail, right?
    

    // ***** SOLUTION 1 : console.dir() with { depth: null } ****** //


    //    ✅ What it does: Tells Node to recursively print all levels of the object (no cutoffs).

    //     { depth: null } means "go as deep as it takes." 
         


        
    // ****** SOLUTION 2 : JSON.stringify(value, replacer, space) with formatting *******
    
    // What it does:

//     value: The object/array you want to stringify.

//     replacer: What properties to include (can be null, array, or function).

//     space: Pretty formatting (number of spaces for indentation).

}

}



// *************** REDUCE()****************//

{
    const users = [
        { id: 1, name: 'Hemendra' },
        { id: 2, name: 'ReactBro' },
        { id: 1, name: 'Hemendra' },
      ];
      
      const byId = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      console.log(byId)
      
}


// *************** SOME()****************//

{
    // Checks if at least one item matches the condition.

    const hasAdmin = users.some(user => user.role === 'admin');

    // 🔧 Use in: Validation, permission checks

}




// *************** SOME()****************//
{
    // Checks if all elements match the condition.

    const allVerified = users.every(user => user.verified === true);

//    🔧 Use in: Ensuring data quality, submission validation

}


// *************** FIND()****************//
{
    // Returns the first matching element.
    
    const user = users.find(u => u.id === 7);

    // 🔧 Use in: Quick lookups
}



// *************** SORT()****************//

{
    // Sorts the array in-place. Use .slice() to clone before sorting if you need immutability.

    const ages = [10,30,15,8,28]

    const result = ages;

    // result.sort((a,b)=>a-b) // Ascending order

    result.sort((a,b)=>b-a) // Descending order

    console.log(result)

    // ⚠️ Be careful: sort mutates the original array
}


// *************** FLAT()****************//


{
    const nested = [1, [2, 3], [4, [5]]];
    const flatOne = nested.flat();     // [1, 2, 3, 4, [5]]; here () equals to (1)
    const flatTwo = nested.flat(2);    // [1, 2, 3, 4, 5]

    const flatComplete = nested.flat(infinity); // Use infinity when not sure of depth or make it one line flat



// ** Removing Empty Holes **

const arr = [1, 2, , 3, , , 4];
const clean = arr.flat();  // [1, 2, 3, 4]


}


// *************** FLATMAP - Map and Flatten in one go ()****************//

{
    const data = ["value", null, "keep", undefined, "yes"];
    const cleaned = data.flatMap(item => item ? [item] : []); // ['value', 'keep', 'yes']




    const words = ["hello world", "hi there"];
    const result = words.flatMap(str => str.split(" ")); // ['hello', 'world', 'hi', 'there']

    // If you use map for this operation

    words.map(str => str.split(" ")); // [['hello', 'world'], ['hi', 'there']]  ❌

    // map or filter can't change the structure or flattens

}
}

// *--------------------------------------------------------------------------------------------------------



// ************************* OBJECT METHODS ****************************//

{
// ********* Object.assign(target, ...sources) ************

{
    // Copies properties into the target. Returns the modified target.

    // Shallow copy only
    const user = {
        name : 'Hemendra'
    }

    const updatedUser = Object.assign(user,{age:23})

    console.log(updatedUser)

///////////////////////////


    Object.assign(newUser,{age:23})

    console.log(newUser)
}


// ********* Object.keys(obj); Object.values(obj) ************

{


Object.keys({ a: 1, b: 2 }); // ["a", "b"] -> Returns an array of property names.


Object.values({ a: 1, b: 2 }); // [1, 2]  -> Returns an array of values.

}


// ********* Object.entries(obj); Object.fromEntries(entriesArray) ************

{

Object.entries({ a: 1, b: 2 }); // [["a", 1], ["b", 2]]  -> Returns an array of [key, value] pairs.



Object.fromEntries([["a", 1], ["b", 2]]); // { a: 1, b: 2 } -> Turns key-value pairs back into an object.

    // 🔧 Use in: transforming objects after filtering/mapping entries


}
}





// *************************  DESTRUCTURING **************************//
{
    // Unpack values from arrays/objects.

const user = { name: "Hemi", age: 23 };
const { name, age } = user;

// From arrays:

const [a, b] = [1, 2]; // a=1, b=2

}




// ********************** DEEP COPY VS SHALLOW COPY **********************//
{
    const original = {
        name : 'Hemendra',
        skills: {
            frontend: 'react',
            backend : 'node js'
        }
    }


    const duplicate = {...original}


    duplicate.name = 'Chandaluri';

    duplicate.skills.frontend = 'Angular'

    console.log(original)
    console.log(duplicate)
}