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
    const arr = [0, 1];
    
    // Main loop
    for (let i = 2; i <= n; i = i + 1) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    return arr[n];
}

// Question 2b
function fib_2(n) {
    let first = 0;
    let second = 1;
    let temp = 0;
    
    for (let i = 2; i <= n; i = i + 1) {
        temp = first;
        first = second;
        second = second + temp;
    }
    
    return second;
}

// Test
fib_2(8);
