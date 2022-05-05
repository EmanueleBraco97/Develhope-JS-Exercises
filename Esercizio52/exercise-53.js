function sum(...args) {
    console.log(args)
    // return num1 + num2 + num3 + num4 + num5;
    let total = 0;
    args.forEach(arg => { //HO CALCOLATO ANCHE LA SOMMA//
       total+=arg;
    });
    return total;
}

console.log(sum(1, 2, 3, 4, 5));