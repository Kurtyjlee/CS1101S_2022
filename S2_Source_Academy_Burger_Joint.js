// Upsizes the combo
function biggie_size(combo){
    return combo + 4;
}

// downsizes the combo
function unbiggie_size(big_combo){
    return big_combo - 4;
}

// Checks if the combo is upsized
function is_biggie_size(combo){
    return combo > 4;
}

// Checks the price of the combo
// Can use a const to make it clearer as well.
function combo_price(combo){
    const COST = 1.17;
    return is_biggie_size(combo) 
            ? unbiggie_size(combo) * COST + 0.50
            : combo * COST;
}

// Returns an empty order
function empty_order(){
    return 0;
}

// Accepts an order and a combo, adding the combo to the order
function add_to_order(order, combo){
    return order * 10 + combo;
}

// Returns the last combo of the order
function last_combo(order){
    return order % 10;
}

// Takes the last combo out and shows the other combos
function other_combos(order){
    return (order - last_combo(order)) / 10;
}

