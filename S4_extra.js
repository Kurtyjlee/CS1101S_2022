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

3 p1.
const thrice = f => repeated(f, 3);

Explanation:mukjuceqw s A
function repeated(f, n) { 
    return n === 0
      ? x => x
      : compose(f, repeated(f, n - 1));
}
==> compose(f, (compose(f, compose(f, x => x))))
==> f => x => f(f(f(x)))

p2
const adder = x => x + 1;
thrice(thrice)(adder)(0);
thrice(f(f(f(x))))(0)
27;

Explanation:
const adder = x => x + 1;
thrice(thrice)(adder)(0);
(f => x => f(f(f(x))))(thrice)(adder)(0);
(x => thrice(thrice(thrice(x))))(adder)(0);
(thrice(thrice(thrice(adder))))(0);
(thrice(thrice(x => adder(adder(adder(x))))))(0);
*** Let adder be a
(thrice(thrice(x => a(a(a(x))))))(0)
===> (thrice(x => a(a(a(x => a(a(a(x => a(a(a(x)))))))))))(0)
===> 27

4a.
((thrice(thrice))(add1))(6);
((thrice(f(f(f))))(add1))(6);
9 + 6 = 15
Thrice will take thrice, where it will executes that
function 3 times. Thrice inherently executes 3 times,
hence so 9 + 6 = 15

Answer: ((thrice(thrice)(adder))(6);
27 + 6 = 33;

b.
((thrice(thrice))(x => x))(compose);

Answer: compose

c.
((thrice(thrice))(square))(1);
1;

d.
((thrice(thrice))(square))(2);
(2 ^ 2) ^ 27;

*/