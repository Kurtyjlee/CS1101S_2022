// Question 2b
// First iteration
// function bubblesort_list(L) {
//     function sort(lst, counter) {
//         if (counter === 0) {
//             return lst;
//         } else if (head(lst) > head(tail(lst))) {
//             let temp = head(lst);
//             set_head(lst, head(tail(lst)));
//             set_head(tail(lst), temp);
//         }
//         return sort(tail(lst), counter - 1);
//     }
    
//     for (let i = length(L) - 1; i > 0; i = i - 1) {
//         sort(L, i);
//     }
// }

// // 2nd iteration, dont actually need to return anything
// function bubblesort_list(L) {
//     function swap(xs, ys) {
//         if (is_null(ys) || head(xs) <= head(ys)) {
//             return xs;
//         } else {
//             let temp = head(xs);
//             set_head(xs, head(ys));
//             set_head(tail(xs), temp);
//             swap(ys, tail(ys));
//         }
//     }
    
//     if (is_null(L) || is_null(tail(L))) {
//         return L;
//     } else {
//         bubblesort_list(tail(L));
//         swap(L, tail(L));
//     }
// }

// // 3rd iteration, dont actually need to return anything
// function bubblesort_list(L) {
//     if (is_null(L) || is_null(tail(L))) {
//         return L;
//     } else {
//         bubblesort_list(tail(L));
//         if (head(L) > head(tail(L))) {
//             const temp = head(L);
//             set_head(L, head(tail(L)));
//             set_head(tail(L), temp);
//             bubblesort_list(tail(L));
//         }
//     }
// }

// Bubblesort answer
function bubblesort_list(L) {
    const len = length(L);
    for (let i = len - 1; i >= 1; i = i - 1) {
        let p = L;
        for (let j = 0; j < i; j = j + 1) {
            if (head(p) > head(tail(p))) {
                const temp = head(p);
                set_head(p, head(tail(p)));
                set_head(tail(p), temp);
            }
            p = tail(p);
        }
    }
}
 
// const LL = list(5, 4, 3, 2, 1);
// bubblesort_list(LL);
// LL;

// // question 3
// function read(n, k) {
//     return mem[n] === undefined
//           ? undefined
//           : mem[n][k];
// }

// function write(n, k, value) {
//     if (mem[n] === undefined) {
//         mem[n] = [];
//     }
//     mem[n][k] = value;
// }

// function first_denomination(kinds_of_coins) {
//     return kinds_of_coins === 1 ? 5 : 
//           kinds_of_coins === 2 ? 10 : 
//           kinds_of_coins === 3 ? 20 : 
//           kinds_of_coins === 4 ? 50 : 
//           kinds_of_coins === 5 ? 100 : 0;
// }

// const mem = [];

// function m_cc(amount, kinds_of_coins) {
//     if (read(amount, kinds_of_coins) !== undefined) {
//         return read(amount, kinds_of_coins);
//     } else {
//         const result = amount === 0
//                         ? 1
//                         : amount < 0 || kinds_of_coins === 0
//                         ? 0
//                         : m_cc(amount, kinds_of_coins - 1) + 
//                           m_cc(amount - first_denomination(kinds_of_coins), kinds_of_coins);
//         write(amount, kinds_of_coins, result);
//         return result;
//     }
// }

// In class attempt, works
function reverse(arr) {
    let half = math_floor(array_length(arr) / 2);
    let end = array_length(arr) - 1;
    for (let i = 0; i < half; i = i + 1) {
        let temp = arr[i];
        arr[i] = arr[end];
        arr[end] = temp;
        end = end - 1; 
    }
}

function rotate_matrix(M) {
    let start = 1;
    for (let i = 0; i < array_length(M); i = i + 1) {
        for (let j = start; j < array_length(M); j = j + 1) {
            let temp = M[i][j];
            M[i][j] = M[j][i];
            M[j][i] = temp;
        }
        start = start + 1;
    }
    for (let i = 0; i < array_length(M); i = i + 1) {
        reverse(M[i]);
    }
}

// answer
function rotate_matrix_1(M) {
    const n = array_length(M);
    
    function swap(r1, c1, r2, c2) {
        const temp = M[r1][c1];
        M[r1][c1] = M[r2][c2];
        M[r2][c2] = temp;
    }
    
    for (let r = 0)
    
}

const M = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
rotate_matrix(M);
M;
