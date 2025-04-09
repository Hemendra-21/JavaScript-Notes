function Person(){
    this.age = 22
}

console.log(Person.age)




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
















{

    function fetchResponse(companyName){
        return new Promise((resolve,reject)=>{
            if (companyName === 'YTP'){
                resolve('welcome to YTP')
            }
            else{
                reject('You are not authorized')
            }
        })
    }


    async function test(){
        console.log('before 1st await')
        const initialResponse = await fetchResponse('YTP')
        console.log(initialResponse)
        console.log('after 1st await')
    }

    test()
}