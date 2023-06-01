let shopIsOpen = true;
let y = 5;
let x = 6;
function sum(n,m){
    return n+m;
}
function sub(n,m){
    return n-m;
}

let order = new Promise((resolve, reject)=>{
    if(shopIsOpen){
        resolve(sum(x, y));
    }else{
        reject(sub(x,y));
    }
})

order
.then((result)=>{
    console.log(result);
    return 88
})
.then((result)=>{
    
})
.then((result)=>{
    console.log(result);
})
.catch((result)=>{
    console.log(result);
})
.finally((result)=>{
    console.log(`ok byee`)
})