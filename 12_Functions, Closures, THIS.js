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