// function accumulate(f, initial, xs) {
//     return is_null(xs) 
//         ? initial
//         : f(head(xs), accumulate(f, initial, tail(xs)));
// }

// Important: Need to know map, accumulate and filter inside out

// // Question 1
// function my_map(f, xs) {
//     // this should be a one-liner
//     return accumulate(
//             (x, y) => pair(f(x), my_map(f, tail(xs))),
//             null,
//             xs);
// }

// // Alternate question 1
// // Just need y as accumulate recursively calls itself on the tail
// function my_map_1(f, xs) {
//     // this should be a one-liner
//     return accumulate((x, y) => pair(f(x), y), null, xs);
// }

// // Test
// // my_map(x => x + 1, list(1, 2, 3));

// // Question 2
// const duplicates = list(1, 2, 3, 4, 4, 3, 2, 1, 2);

// function remove_duplicates(xs) {
//     return is_null(xs)
//         ? null
//         : pair(
//             // Inputting the head
//             head(xs),
//             // Getting and inputting a list without item that just got inputted
//             remove_duplicates(filter(x => x !== head(xs)), tail(xs)));
// }

// // Question 2 iterative
// function remove_duplicates_1(xs) {
//     function helper(xs, new_xs) {
//         if (is_null(xs)) {
//             return new_xs;
//         } else {
//             // Removing the element that has already been used
//             const filtered = filter(x => !equal(x, head(xs)));
//             return helper(filtered, pair(head(xs), new_xs));
//         }
//     }
//     return helper(xs, null);
// }

// remove_duplicates(duplicates);

// Question 3, not real attempt
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        
        // Combinations that do not use the head coin z
        // for the remaining amount.
        const combi_B = makeup_amount(x - head(coins), tail(coins));

        // Combinations that use the head coins
        const combi_C = map(c => pair(head(coins), c), combi_B);

        return append(combi_A, combi_C);
    }
}

makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50));
// Result: list(list(20, 1, 1), list(10, 5, 1, 5, 1), list(1, 20, 1),
//              list(1, 20, 1), list(1, 10, 5, 5, 1), 
//              list(1, 10, 5, 1, 5))

// append(null, list(1));