console.log('test');
console.log(fibo(5));

function fibo(n) {

  if(n <= 2) return n;

  return n + fibo(n - 1);
  
}



/*

0
1

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
*/