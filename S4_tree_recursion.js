// Recursively find a point in a pascal triangle
function pascal(row, position) {
    // Case 1: Point out of pascal triangle
    return position > row || position < 0
        ? 0
        // Case 2: Top row
        : row === 0
        ? 1
        // Recursively move up the pyramid
        : pascal(row - 1, position - 1) 
        + pascal(row - 1, position);
}

display(pascal(3, 0));