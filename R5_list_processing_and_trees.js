// Question 1, flatten a given list of lists
// Only works for list or lists
function flatten_list(xs) {
    return accumulate(append, null, xs);
}

flatten_list(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9)));

// Question 2
function tree_sum(xs) {
    return is_null(xs)
        ? 0
        : (is_list(head(xs))
            ? tree_sum(head(xs))
            : head(xs))
            + tree_sum(tail(xs));
}

const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7)); 
tree_sum(my_tree);

// // Question 3
// function accumulate_tree(f, op, initial, tree) {
//     return accumulate((x => is_list(head(x)) ? op : f)(tree), initial, tree);
// }

// const tree = list(1, list(2, list(3, 4), 5), list(6, 7));
// accumulate_tree(x => list(x), append, null , tree);
