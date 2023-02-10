console.log('SOLUTION 1: ITERATIVE FIBONACCI SEQUENCE');
console.log('----------------------------------------');
console.log('A Fibonacci Sequence of 0 gives us: ' + fibs(0));
console.log('A Fibonacci Sequence of 1 gives us: ' + fibs(1));
console.log('A Fibonacci Sequence of 2 gives us: ' + fibs(2));
console.log('A Fibonacci Sequence of 10 gives us: ' + fibs(10));
console.log('A Fibonacci Sequence of 20 gives us: ' + fibs(20));

// function that returns n numbers of the fibbonaci sequnce
function fibs(n) {

  let first = 0;
  let second = 1;
  let arr = [0, 1];

  if(n === 0) return [];
  if(n === 1) return [0];
  if(n === 2) return arr;

  for(let i = 0; i < n - 2 ; i++) {
    let temp = first + second;
    arr.push(temp);
    first = second;
    second = temp;
  }

  return arr;
}

console.log('\nSOLUTION 2: RECURSIVE FIBONACCI SEQUENCE');
console.log('----------------------------------------');
console.log('A Fibonacci Sequence of 0 gives us: ' + fibsRec(0));
console.log('A Fibonacci Sequence of 1 gives us: ' + fibsRec(1));
console.log('A Fibonacci Sequence of 2 gives us: ' + fibsRec(2));
console.log('A Fibonacci Sequence of 10 gives us: ' + fibsRec(10));
console.log('A Fibonacci Sequence of 20 gives us: ' + fibsRec(20));

function fibsRec(n) {
  if(n == 0) return [];
  if(n == 1) return [0];
  if(n == 2) return [0, 1];

  let a = fibsRec(n - 1);
  a.push(a[n - 2] + a[n - 3]);
  return a;  
}