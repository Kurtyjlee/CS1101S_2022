// Question 1
function insert_cmp(x, xs, cmp) {
    return is_null(xs) 
          ? list(x)
          : cmp(x, head(xs)) 
          ? pair(x, xs)
          : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}

function insertion_sort_cmp(xs, cmp) {
    return is_null(xs) 
          ? xs
          : insert_cmp(head(xs), 
                        insertion_sort_cmp(tail(xs), cmp),
                        cmp);
}

// Test
const xs = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);

// (a)
// insertion_sort_cmp(xs, (x, y) => x < y); 
// Result: list(1, 2, 3, 4, 5, 6, 6, 7, 8, 9)

// (b)
// insertion_sort_cmp(xs, (x, y) => x > y);
// Result: list(9, 8, 7, 6, 6, 5, 4, 3, 2, 1)

// (c)
// insertion_sort_cmp(xs, (x, y) => false);
// Result: list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6)

// (d)
// insertion_sort_cmp(xs, (x, y) => x % 2 === 0 && x < y);
// Result: list(2, 4, 6, 6, 8, 9, 7, 5, 3, 1)

// Question 2
// half, rounded downwards
function middle(n) {
    return math_floor(n / 2);
}

// put the first n elements of xs into a list
function take(xs, n) {
    // to be completed
    return n === 0
        ? null
        : pair(head(xs), take(tail(xs), n - 1));
}

// drop the first n elements from the list and return the rest
function drop(xs, n) {
    // to be completed
    return n === 0
        ? xs
        : drop(tail(xs), n - 1);
}

// merge two sorted lists into one sorted list
function merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else {
        const x = head(xs);
        const y = head(ys);
        return x < y
               ? pair(x, merge(tail(xs), ys))
               : pair(y, merge(xs, tail(ys)));
    }
}

// a list with more than one element is sorted
// by splitting it into two lists of (almost) equal
// length, sorting the halves and then merging them
// together
function merge_sort(xs) {
    if (is_null(xs) || is_null(tail(xs))) {
        return xs;
    } else {
        const mid = middle(length(xs));
        return merge(merge_sort(take(xs, mid)),
                     merge_sort(drop(xs, mid)));
    }
}

// Test
merge_sort(list(7, 6, 3, 8, 4, 6, 5, 9, 8, 3, 1, 5, 2));

// (a)
// O(n), Θ(n), Ω(n)

// (b)
// O(nlogn), Θ(nlogn), Ω(nlogn)

