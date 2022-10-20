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

const s1 = pair(1, () => s1);
const s2 = pair(2, () => s2);
const s3 = pair(3, () => s3);
const result = zip_list_to_streams(list(s1, s2, s3));
eval_stream(result, 15);
