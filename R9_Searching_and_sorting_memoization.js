// Question 1
function make_optimized_search(A) {
    
    const B = [];
    
    // copying A into B
    for (let i = 0; i < array_length(A); i = i + 1) {
        B[i] = A[i];
    }
    
    // // Dont need to implement the sort algorithm
    // merge_sort(B);
    
    // // Dont need to implement the search algorithm
    // return x => binary_search(B, x);
}

// Question 2a
function fib(n) {
    if (n <= 1) {
        return n;
    }
    
    const arr = [0, 1];
    
    // Main loop
    for (let i = 2; i <= n; i = i + 1) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    return arr[n];
}

// Question 2b
// Less wastage as we're not using an array to store all the values
function fib_2(n) {
    if (n <= 1) {
        return n;
    }
    
    let first = 0;
    let second = 1;
    
    for (let i = 2; i <= n; i = i + 1) {
        // Relationship of fibonacci, might not work for other patterns
        second = second + first;
        first = second - first;
    }
    
    return second;
}

// Test
// fib_2(0);
