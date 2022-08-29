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

display(pascal(4, 2));