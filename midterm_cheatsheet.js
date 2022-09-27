// Map, Filter and accumulate
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

function filter_tree(f, tree) {
    return is_null(tree)
          ? null
          : is_list(head(tree))
              ? pair(filter_tree(f, head(tree)), filter_tree(f, tail(tree)))
              // Main filter portion
              : f(head(tree))
                  ? pair(head(tree), filter_tree(f, tail(tree)))
                  : filter_tree(f, tail(tree));
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

// Higher level functions
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

// Rucer puzzle
function solvable(xs, n) {
    const len = length(xs);
    function helper(next, steps) {
        return next < 0 || next > len - 1 || steps < 0
            ? false
            : next === len - 1
            ? true
            : helper(next + list_ref(xs, next), steps - 1) || 
                helper(next - list_ref(xs, next), steps - 1);
    }
    return helper(0, n);
}

// All different ways to add up to the value of coins
// makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        
        // Combinations of the remaining amount without the head coin
        const combi_B = makeup_amount(x - head(coins), tail(coins));

        // Combinations with the head coins added
        const combi_C = map(c => pair(head(coins), c), combi_B);

        return append(combi_A, combi_C);
    }
}

// Finding all subsets of a set
function subsets(lst) {
    if (is_null(lst)) {
        return list(null);
    } else {
        const dont_take = subsets(tail(lst));
        const take = map(x => pair(head(lst), x), dont_take);
        return append(dont_take, take);
    }
}

//fast power for integer numbers
// Time complexity = O(log(n))
// Space complexity = O(log(n))
function fast_power(b, n) {
    return n < 0
          ? 1 / fast_power(b, - n)
          : n === 0
          ? 1
          : n % 2 === 0
          ? math_pow(fast_power(b, n/2), 2)
          : fast_power(b, n - 1) * b;
}

// Flipping the tree horizontally while negating all nodes
function negate_bst(bst) {
    if (is_empty_binary_tree(bst)) {
        return make_empty_binary_tree();
    }
    else {
        return make_binary_tree_node(
                negate_bst(right_subtree_of(bst)),
                -1 * value_of(bst),
                negate_bst(left_subtree_of(bst)));
    }
}

// Thrice and twice
(thrice(twice(x => 2 * x)))(1); // (2 ^ 2) ^ 3
((thrice(twice))(x => 2 * x))(1); // 2 ^ (2 ^ 3)

// essence of recursion
(f => f(f))(f => f(f)); 
((f => f(f))
 (make_factorial => 
    n => (n === 0)
        ? 1
        : n * (make_factorial(make_factorial)))
)(5); // returns 5!

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
T(n) = 2T(n / 2) + O(n) => O(nlogn)
T(n) = 2T(n - 1) + O(1) => O(2^n)

// Order of growth
const x = accumulate((x, ys) => x + ys, 0, enum_list(1, N));
x + fun(n / 2) + fun(n / 2); // O(n) * O(logn) = O(nlogn)
