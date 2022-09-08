// // Accumulate function
// function accumulate(f, initial, xs) {
//     return is_null(xs) 
//         ? initial
//         : f(head(xs), accumulate(f, initial, tail(xs)));
// }

// // Question 1, flatten a given list of lists
// // Only works for list or lists
// function flatten_list(xs) {
//     return accumulate(append, null, xs);
// }

// flatten_list(list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9)));

// // Question 2
// function tree_sum(xs) {
//     return is_null(xs)
//         ? 0
//         : (is_list(head(xs))
//             ? tree_sum(head(xs))
//             : head(xs))
//             + tree_sum(tail(xs));
// }
/* 
- A function that handles trees can be recursively called as 
a trees can either have trees or a data type as its element.
- null is an empty list
*/

// const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7)); 
// tree_sum(my_tree);

// // Question 3
// function accumulate_tree(f, op, initial, tree) {
//     return accumulate((x => is_list(head(x)) ? op : f)(tree), initial, tree);
// }

// const tree = list(1, list(2, list(3, 4), 5), list(6, 7));
// accumulate_tree(x => list(x), append, null , tree);

// Question 3 correct answer
function accumulate_tree(f, op, initial, tree) {
    return accumulate((x, y) => is_list(x)
                        ? op(accumulate_tree(f, op, initial, x), y)
                        : op(f(x), y),
                    initial, 
                    tree);

const tree_1 = list(1, list(2, list(3, 4), 5), list(6, 7));
accumulate_tree(x => 1, (x, y) => x + y, 0 , tree_1);

/* Notes:
- count_data_items, tree_sum is basically a special way to do
accumulate
- When it comes to count, need to convert the values of the elements
of the tree into a usable value. In the case of the example, the 
element is converted into 1, using x => 1.
- Actual: If the element is a tree, call accumulate_tree.
*/
