// qn 2
function my_sum(n) {
    return n === 0
        ? n
        : n * (n + 1) + my_sum(n - 1);
}

my_sum(2);

// qn 4
function term(n) {
    return n * (n + 1);
}

function next(n) {
    return n + 1;
}

//qn 5
function sum(n) {
    return sum_iter(1, n, 0, term);
}

function sum_iter(start, end, result, term) {
    return start >= end
        ? result
        : sum_iter(start + 1, end, result + term(start), term);
}

sum(3);
