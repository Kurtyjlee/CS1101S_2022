/* 
1. 
compose(math_sqrt, math_log)(math_E);
(x => math_sqrt(math_log(x)))(math_E);
math_sqrt(math_log(math_E));
1;

compose(math_log, math_sqrt)(math_E * math_E);
math_log(math_sqrt(math_E * math_E));
1;

2. 
thrice(math_sqrt)(256)
compose(compose(math_sqrt, math_sqrt), math_sqrt)(256)
math_sqrt(math_sqrt(math_sqrt(256)));

3. 
const thrice = f => repeated(f, 3);

thrice(thrice(f)(0)) 
repeated(f, n)(x) 
n = 3^3

const f = x => x + 1
thrice(thrice)(f)(0);
thrice(compose(compose(f, f), f))(0)
thrice(f(f(f(x))))(0)
const g = f(f(f(x)))
g(g(g(x)))(0)
9

4a.
((thrice(thrice))(add1))(6);
((thrice(f(f(f))))(add1))(6);
9 + 6 = 15
Thrice will take thrice, where it will executes that
function 3 times. Thrice inherently executes 3 times,
hence so 9 + 6 = 15

b.
((thrice(thrice))(x => x))(compose);

*/