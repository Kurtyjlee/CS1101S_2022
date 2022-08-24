function my_sum(n) {
    return n === 0
        ? n
        : n * (n + 1) + my_sum(n - 1);
}

my_sum(2);