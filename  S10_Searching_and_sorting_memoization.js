// Question 2b
function bubblesort_list(L) {
    let end = length(L) - 1;
    
    function sort(lst) {
        if (is_null(lst) || is_null(tail(lst))) {
            return lst;
        } else if (head(lst) > head(tail(lst))) {
            let temp = head(lst);
            set_head(lst, head(tail(lst)));
            set_head(tail(lst), temp);
        }
        return sort(tail(lst));
    }
    for (let i = 0; i < )
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL;
