function bii(){
    console.log(3);
}
function hii(){
    console.log(2);
    setTimeout(bii,2000);
}

setTimeout(hii,2000);