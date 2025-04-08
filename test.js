globalThis.a = 10;

function outer(){
    function inner(){
        console.log(globalThis.a)
    }

    inner()
}

outer()



// *********** THIS in regular functions ************//
globalThis.name = 'Hemendra from outer'
const details = {
    name : 'Hemendra',
    greet: ()=>{
        console.log(globalThis.name)
    }
}

details.greet()

// having details(Object) on left side while calling greet.
// THIS is automatically gets bind to Object(details)









// ************ THIS in Arrow functions ************* //

globalThis.name = 'Hemendra Outer'

const details1 = {
    name : 'Hemendra Chandaluri',
    greet : ()=>{
        console.log(name)
        console.log(this.name)
        console.log(globalThis.name)
    }
}


details1.greet()



// In Arrow functions, THIS is not dynamic
// It doesn't get its own THIS, --instead it lexically inherits THIS from the parent scope




const details2 = {
    name: 'Hemendra',
    greet: setTimeout(
        function(){
            console.log(this.name)
        }
    )
}

details2.greet









const str = 'Rishika'

console.log(str.slice(3,5))







const obj = [1,[2,[3]]]

console.log(obj.flat(1))


