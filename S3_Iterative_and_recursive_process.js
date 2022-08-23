import {show, ribbon, square, heart, circle, beside, stack, blank, beside_frac, stack_frac} from "rune";

// Type your program in here!
function moony_1(bottom_right) {
    return stack(beside(circle, blank), beside(square, bottom_right));
}

// Type your program in here!
function moony_2(n) {
    return n === 0
        ? circle
        : moony_1(moony_2(n - 1));
}

function moony(){
    return 0;
}

show(moony_2(5));
