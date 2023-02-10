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

