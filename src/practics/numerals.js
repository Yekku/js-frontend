/*
// BEGIN (write your solution here)
const True = x => y => x;
const False = x => y => y;

const If = p => t => e => p(t)(e);
// example: If(True)('foo')('bar')

const Zero = f => x => x;
const Succ = n => f => x => f(n(f)(x));
const IsZero = n => n(x => False)(True);

const Mul = n => m => f => n(m(f));

const Pair = a => b => t => t(a)(b);
const Fst = p => p(True);
const Snd = p => p(False);
const Pred = n => s => z => Snd(n(p => Pair(s(Fst(p)))(Fst(p)))(Pair(z)(z)));
const fact = n => If(IsZero(n))(Succ(Zero))((x) => {
  return Mul(n)(fact(Pred(n)))(x);
});

console.log(fact());
// END
*/
