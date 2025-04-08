
// Closures

for (var i=0; i<=3; i++){
    setTimeout(()=>{
        console.log(i)
    },1000
    )
}


for (var i=0; i<=3; i++){
    function inner(i){
        setTimeout(()=>{
            console.log(i)
        },1000)
    }
    inner(i)
}





// ********** THIS ****************



function details(){
    return this
}

console.log(globalThis)

console.log(details())

const me = {
    personName:'Hemendra',
    details
}


console.log(me.details())



// if you use THIS in regular functions in strict mode, it refers undefined.


// *********************** CALL and BIND*******************************

// 💡 Real-life analogy:

//     call() = like calling someone directly: “Hey, talk now.”

//     bind() = like saving someone’s number and calling later.



// bind

function details(greeting){
    console.log(`${greeting}, ${this.personName}`)
}

const name = {
    personName : 'Hemendra'
}

const sayName = details.bind(name,'Hey')
sayName()




// call


function details(greeting){
    console.log(`${greeting}, ${this.personName}`)
}

const myName = {
    personName : 'Hemendra'
}

details.call(myName,'Hello')




// Constructor function

function Person(name){
    this.name = name,
    this.details = function(){
        console.log(this)
    }
}

const mine = new Person('Hemendra')
mine.details()






function newDetails(name){
    this.name = name

    setTimeout(
        function(){
            console.log(this)
        }.bind(this),100
    )

}


const details1 = new newDetails('Hemendra')



// ************************ //


function newDetails(name){
    this.name = name

    setTimeout(
        ()=>{
            console.log(this)
        },1000
    )
}


const details2 = new newDetails('Hemendra')










