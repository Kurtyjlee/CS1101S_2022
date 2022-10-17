// Question 2b
function bubblesort_list(L) {
    function sort(lst, counter) {
        if (counter === 0) {
            return lst;
        } else if (head(lst) > head(tail(lst))) {
            let temp = head(lst);
            set_head(lst, head(tail(lst)));
            set_head(tail(lst), temp);
        }
        return sort(tail(lst), counter - 1);
    }
    
    for (let i = length(L) - 1; i > 0; i = i - 1) {
        sort(L, i);
    }
}

const LL = list(3, 5, 2, 4, 1);
bubblesort_list(LL);
LL;
