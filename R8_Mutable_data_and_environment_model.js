function make_withdraw(balance, password) {
    let tries = 3;
    function withdraw(amount, password_attempt) { 
        if (tries === 0) {
            return "Account disabled";
        } else if (balance >= amount && password_attempt === password) {
            balance = balance - amount;
            return balance; 
        } else if (balance < amount) {
            return "Insufficient funds"; 
        } else {
            tries = tries - 1;
            return "Wrong password";
        }
    }
    return withdraw; 
}

const acc = make_withdraw(100, "my_password");
acc(30, "his_passcode"); 
acc(10, "sesame");
acc(15, "canola");
acc(25, "olive");
acc(30, "my_password");
