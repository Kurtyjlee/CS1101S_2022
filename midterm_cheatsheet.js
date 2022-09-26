// Important functions
// Executes function on every element and returns a list
function map(f, xs) {
    return is_null(xs)
        ? null
        : pair(f(head(xs)), map(f, tail(xs)));
}

// Makes a list for elements that satisfies the predicate
function filter(pred, xs) {
    return is_null(xs)
        ? null
        : pred(head(xs))
            ? pair(head(xs), filter(pred, tail(xs)))
            : filter(pred, tail(xs));
}

// Executes the function starting from the back of the list
function accumulate(f, initial, xs) {
    return is_null(xs)
        ? initial
        : f(head(xs), accumulate(f, initial, tail(xs)));
}

function accumulate_tree(f, op, initial, tree) {
    // Takes in head(xs) and accumulate(...) as x and ys, 
    return accumulate((x, ys) => 
                        // checks if x is a list
                        is_list(x)
                        // If list, go into the tree with op as deferred
                        ? op(accumulate_tree(f, op, initial, x), ys)
                        // if not list, do op on intended value
                        : op(f(x), ys),
                    initial, 
                    tree);
}
const tree_1 = list(1, list(2, list(3, 4), 5), list(6, 7));
accumulate_tree(x => x, (x, y) => x + y, 0, tree_1);

function accumulate_bst(f, initial, bst){
    if (is_empty(bst)) {
        return initial;
    } else {
        // Does for the right side first, accumulate does from the back
        const right = accumulate_bst(f, initial, right_subtree_of(bst));
        const value = f(value_of(bst), right); //i.e. pair
        // Does for the left side next
        return accumulate_bst(f, value, left_subtree_of(bst));
    }
}

function permutations(xs) {
    return is_null(xs)
        ? list(null)
        // append all lists
        : accumulate(append, null,
                    // For every element in xs, pair with every perm of sublist
                    map(x => map(ys => pair(x, ys),
                                // Return list of all perms of sublist
                                permutations(remove(x, xs))),
                        xs));
}
list(null), pair(3, null) => list(3), append(list(3), list(2)) => list(3, 2)
list(null), pair(2, null) => list(2), append(list(2), list(3)) => list(2, 3)

// Inserts x into every position in ys
function insertions(x, lst) {
    return is_null(lst)
           ? list(list(x))
           : append(
                // Appending the list of lists
                list(pair(x, lst)), 
                // This map will return a list of list
                map(
                    x => pair(head(lst), x), 
                    insertions(x, tail(lst))));
}

insertions(4, list(1, 2, 3));

function permutations(xs) {
    return is_null(xs)
        ? list(null)
        : accumulate(
            // inserting the 1st value into the perms list
            (x, y) => append(insertions(head(xs), x), y),
            null,
            // Permutations the tail, list of lists
            permutations(tail(xs)));
}
permutations(list(1, 2, 3));

function find_all_8(t) {
    return is_number(t)
        // List null will help build the list and null will not
        ? (t === 8 ? list(null) : null)
        // Executes both at the same time
        : append(
                // List null is necessary for map and pair
                map(x => pair(head, x), find_all_8(head(t))),
                map(x => pair(tail, x), find_all_8(tail(t))));
}

// common recurrence relations
T(n) = T(n - 1) + O(1) => O(n)
T(n) = T(n / 2) + O(1) => O(logn)
T(n) = T(n - 1) + O(logn) => O(nlogn)
T(n) = T(n - 1) + O(n) => O(n^2)
// Generally, 
T(n) = T(n - 1) + O(n^k) => O(n^(k+1))

// Not intuitive recurrence relations
T(n) = T(n / 2) + O(n) => O(n)
T(n) = 2T(n / 2) + O(1) => O(n)
T(n) = 2T(n - 1) + O(1) => O(2^n)

// Order of growth
const x = accumulate((x, ys) => x + ys, 0, enum_list(1, N));
x + fun(n / 2) + fun(n / 2); // O(nlogn) + O(n) = O(nlogn)

// misc functions
build_list(n, f);
