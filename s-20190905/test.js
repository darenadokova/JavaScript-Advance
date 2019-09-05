function fact(n){
    console.log(`n=${n}`);
    if( n > 1 ){
        return n * fact(n-1);
    }
    return 1;
}

//5! = 5 * 4* 3 * 2 * 1

let res = fact(5);
console.log(`5!=${res}`);