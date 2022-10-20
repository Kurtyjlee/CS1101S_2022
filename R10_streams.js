// Question 2
// Takes in a list of streams and returns the zip of all streams in the list
function zip_list_to_streams(xs) {
    function helper(ys) {
        if (is_null(ys)) {
            return helper(xs);
        } else {
            const stream = head(ys);
            set_head(ys, stream_tail(stream));
            return pair(head(stream), () => helper(tail(ys)));
        }
    }
    return helper(xs);
}

// Answer
function zip_list_to_streams_1(ss) {
    // head(head(ss)) accesses the element in the current stream
    return pair(head(head(ss)),
                () => zip_list_to_streams_1(
                        // Adding the stream_tail of the current stream to 
                        // the end of the tail of ss
                        append( 
                            tail(ss),
                            list(stream_tail(head(ss))))));
}

const s1 = pair(1, () => s1);
const s2 = pair(2, () => s2);
const s3 = pair(3, () => s3);
const result = zip_list_to_streams(list(s1, s2, s3));
eval_stream(result, 15);

// Question 3
function add_streams(s1, s2) { 
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1; 
    } else {
        return pair(head(s1) + head(s2), 
                    () => add_streams(stream_tail(s1), stream_tail(s2)));
    }
}

// Answer
// Adding the current value of the stream to the previous value
function partial_sums(s) {
    return pair(head(s),
                // need to review again
                () => add_streams(stream_tail(s), partial_sums(s)));
}
