// function accumulate(f, initial, xs) {
//     return is_null(xs) 
//         ? initial
//         : f(head(xs), accumulate(f, initial, tail(xs)));
// }

function my_map(f, xs) {
    // this should be a one-liner
    return accumulate(
            (x, y) => pair(f(x), my_map(f, tail(xs))),
            null,
            xs);
}

my_map(x => x + 1, list(1, 2, 3));
