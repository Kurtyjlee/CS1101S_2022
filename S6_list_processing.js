// function accumulate(f, initial, xs) {
//     return is_null(xs) 
//         ? initial
//         : f(head(xs), accumulate(f, initial, tail(xs)));
// }

// Question 1
function my_map(f, xs) {
    // this should be a one-liner
    return accumulate(
            (x, y) => pair(f(x), my_map(f, tail(xs))),
            null,
            xs);
}

// Test
// my_map(x => x + 1, list(1, 2, 3));

// Question 2
const duplicates = list(1, 2, 3, 4, 4, 3, 2, 1, 2);

function remove_duplicates(lst) {
    return is_null(lst)
        ? null
        : pair(
            // Inputting the head
            head(lst),
            // Getting and inputting a list without item that just got inputted
            remove_duplicates(filter(x => !equal(x, head(lst)), tail(lst))));
}

// remove_duplicates(duplicates);

// Question 3

