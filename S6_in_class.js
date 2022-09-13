// Question 1
function remove_duplicate(lst) {
    return is_null(lst)
        ? null
        : accumulate((x, y) => pair(x, remove_all(x, y)), null, lst);
}

// Alternative solution, question 1
function remove_dupes(lst) {
    return accumulate((x, ys) => is_null(member(x, ys))
                                ? pair(x, ys)
                                : ys,
                        null,
                        lst);
}

remove_duplicate(list(1, 1, 2, 2, 3, 4));

// Question 2
function subsets(lst) {
    if (is_null(lst)) {
        return list(null);
    } else {
        const dont_take = subsets(tail(lst));
        const take = map(x => pair(head(lst), x), dont_take);
        
        return append(dont_take, take);
    }
}

subsets(list(1, 2, 3));

// Question 3, attempt but not correct
function permutations(lst) {
    if (is_null(lst)) {
        return list(null);
    } else {
        const h_element = permutations(tail(lst));
        const n_element = map(x => pair(head(lst), x), 
                            map(x => pair(head(lst), x), 
                                accumulate((x, y) => pair(head(lst), y), null, h_element)));
        
        return append(h_element, n_element);
    }
}



permutations(list(1, 2, 3));
