/*
In this challenge, you will be given an array of arrays and 
your task will be to return the number of unique arrays that 
can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, 
because it results in only 4 possibilites. 
They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; 
for example solve([[1,2],[4,4],[5,6,6]]) = 4, 
since the extra outcomes are just duplicates. 
*/


// Solution

function solve(arr) {
  let product = 1
   let arrsFilt = new Set
 
   for (let i = 0; i < arr.length; i++) {
     arrsFilt.add( arr[i].filter( (el, ind) => arr[i].indexOf(el) === ind) )
   }
   
   arrsFilt = Array.from(arrsFilt)
 
   for (let j = 0; j < arrsFilt.length; j++) {
     product *= arrsFilt[j].length
   }
   
   return product
 };

 // or

 function solve(arr) {
  const nUnique = a => {
    let encountered = {};    
    return a.filter(e => !encountered[e] ? (encountered[e]=true) : false).length;
  }

  return arr.map(nUnique).reduce((acc,e) => acc * e, 1);
};