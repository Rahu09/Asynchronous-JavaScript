//So if we are calling a function which is returning the promise or we are running a promised function and we want to 
//call .then() after the specific task inside promise has been completed then we have to make sure that the resolved is 
//called after the specific task is been completed or after the specified time using setTimeout.
let shop_is_open = true;

let order = (step, timeTaken) => {
    return new Promise((resolve, reject)=>{

        if(shop_is_open){
            setTimeout(()=>{
                resolve(step())
            }, timeTaken)
            console.log(2);

        }else{
            reject(console.log('shop is closed'))
        }
    })
}

order(()=>{console.log('placing order that takes 2 sec')}, 2000)

.then(()=>{
    return order(()=>{console.log('cutting fruit that takes 2 sec')}, 2000)
})

.then(()=>{
    return order(()=>{console.log('add water and ice that takes 1 sec')}, 1000)
})

.then(()=>{
    return order(()=>{console.log('starting machine that takes 1 sec')}, 1000)
})

.then(()=>{
    return order(()=>{console.log('selecting container that takes 2 sec')}, 2000)
})

.then(()=>{
    return order(()=>{console.log('selecting toppings that takes 3 sec')}, 3000)
})
    
.then((result)=>{
    return order(()=>{console.log(`serving ice creame that takes 2 sec `)}, 2000)
})