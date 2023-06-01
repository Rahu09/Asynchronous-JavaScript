let shop_is_open = true
function time (ms){
    return new Promise((resolve,reject)=>{

        if(shop_is_open) setTimeout(resolve,ms)
        else reject(console.log('shop is closed'))
    })
}

async function order(){
    try {
        await time(2000)
        console.log('placing order that takes 2 sec')

        await time(2000)
        console.log('cutting fruit that takes 2 sec')

        await time(1000)
        console.log('add water and ice that takes 1 sec')

        await time(1000)
        console.log('starting machine that takes 1 sec')

        await time(2000)
        console.log('selecting container that takes 2 sec')

        await time(3000)
        console.log('selecting toppings that takes 3 sec')

        await time(2000)
        console.log(`serving ice creame that takes 2 sec `)

    } catch (error) {
        console.log("Customer left", error)
        
    }finally{
        console.log("Day ended, shop closed")
    }
}
order()