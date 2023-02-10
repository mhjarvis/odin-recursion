console.log('test');
fibs(5);

function fibs(n) {

  let arr = [];

  if(n > 1) {
    arr.push(n);
    fibs(n - 1);
  }
  
  console.log(arr);
  return arr;
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