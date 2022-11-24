let product = 1;

function factorial(a) {
    for (i = 1; i <= a; i += 1) {
        product = product * i;
    }
    return product;
}

console.log(factorial(5));
