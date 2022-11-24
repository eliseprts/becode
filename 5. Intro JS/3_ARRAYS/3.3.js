// Version 1
let arr1 = [1, 2, 3, 4, 5];
arr1.push(arr1);
console.log(arr1);

// Version 2
let arr3 = [10, 20, 30, 40, 50];
let arr4 = arr3.slice();
console.log(arr3 + " " + arr4);

// Version 3
let arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5;
console.log(arr5 + " " + arr6);