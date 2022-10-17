// Question 2b
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

function bubblesort_list(L) {
    function swap(xs, ys) {
        if (is_null(ys) || head(xs) <= head(ys)) {
            return ys;
        } else {
            let temp = head(xs);
            set_head(xs, head(ys));
            set_head(tail(xs), temp);
            return swap(ys, tail(ys));
        }
    }
    
    if (is_null(L) || is_null(tail(L))) {
        return L;
    } else {
        // sort first then swap recursively
        bubblesort_list(tail(L));
        swap(L, tail(L));
    }
}

const LL = list(1, 2, 3, 5, 4);
bubblesort_list(LL);
LL;

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


