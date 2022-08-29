// Recursively find a point in a pascal triangle
function pascal(row, position) {
    // Case 1: Point out of pascal triangle
    return row === 0 && position > row || row === 0 && position < 0
        ? 0
        // Case 2: Top row
        : row === 0
        ? 1
        // Recursively move up the pyramid
        : pascal(row - 1, position - 1) 
        + pascal(row - 1, position);
}

// Iterative process
function pascal_2(row, position) {
    return pascal_iter(row, position, 0, 1, 0);
}

function pascal_iter(row, position, counter, result, prev_result) {
    // Case 1: Point out of pascal triangle
    return counter >= row
        ? result
        : pascal_iter(row, position, counter + 1, result + prev_result, result);
}

display(pascal_2(2, );