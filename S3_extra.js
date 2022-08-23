//1. recursive as there is deferred operations.its linear in both space and time
function fast_expt(b, n) {
    return n % 2 === 0 
        ? fast_expt(b ** 2, n / 2) 
        : fast_expt(b , n - 1);
}


function fast_expt(n) {
    return n === 1
        ? math_pow(3, 1)
        : n % 2 === 0
            ? math_pow(fast_expt(n / 2), 2)
            : 3 * fast_expt(n - 1);
}