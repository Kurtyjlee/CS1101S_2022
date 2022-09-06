// Question 1
function every_second(target_list) {
    // When the even value is the last value
    return is_null(target_list) || is_null(tail(target_list))
        ? null
        : pair(head(tail(target_list)), every_second(tail(tail(target_list))));
}

// Question 1 alternative
function every_second_alt(target_list) {
    // Using length to check if it is the last value
    return length(target_list) <= 1
        // End the list
        ? null
        : pair(list_ref(target_list, 1), every_second_alt(tail(tail(target_list))));
}

// draw_data(every_second(list(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)));

// Question 2
function every_first(target_list){
    // When the odd value is the last value
    return length(target_list) <= 1
        ? null
        // Last even value of the list
        : pair(list_ref(target_list, 0), every_second(tail(target_list)));
}

// // Test if every_first is correct
draw_data(every_first(list(1, 2, 3, 4, 5, 6, 7, 8)));

// Get a list of the sum of even position values and sum of odd position values
function sum(another_list){
    const even_list = every_first(another_list);
    const odd_list = every_second(another_list);
    
    // Use to find the sum of the list
    function sum_iter(target_list, sum) {
        // Check if at the end of the list
        return is_null(target_list)
            ? sum
            : sum_iter(tail(target_list), sum + head(target_list));
    }
    return list(sum_iter(even_list, 0), sum_iter(odd_list, 0));
}

// Testing sum
// draw_data(sum(list(1, 2, 3, 4, 5)));