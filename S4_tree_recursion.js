function pascal(row, position) {
    return row === 0 && position > row || row === 0 && position < 0
        ? 0
        : row === 0
        ? 1
        : pascal(row - 1, position - 1) 
        + pascal(row - 1, position);
}

display(pascal(4, 2));