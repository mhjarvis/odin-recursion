console.log('test');
console.log(fibs(6));

// function that returns n numbers of the fibbonaci sequnce
function fibs(n) {

let first = 0;
let second = 1;
let arr = [];

for(let i = 0; i < n ; i++) {
  arr.push(i);
}

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