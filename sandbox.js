function add(a,b){
    if(a === undefined || b === undefined){
        throw new Error('Both arguments must be defined');
    }
    return a+b;
}

try{
    console.log(add(1,2));
    console.log(add(1));

}  catch(e){
    console.log(e.toString(), e.stack);
}