let arr = ["Gerard", "Lambert"];

// Access specific element
console.log("Hello " + arr[0] + " " + arr[1]);

// Modify specific element
arr[1] = "Dupont";
console.log(arr);

// Obtain size
console.log("The size is " + arr.length);

// Add element
arr.push("Paris");
console.log(arr);

// Remove element
arr.pop();
console.log(arr);

// Iterate on an array 1
let fruit = ["Apple", "Pear", "Banana"];
for (let i = 0; i < fruit.length; i += 1) {
    console.log("Do you want to eat a " + fruit[i] + " ?");
}

// Iterate on an array 2
let vegetables = ["Salad", "Tomato", "Eggplant"];
for (let elem of vegetables) {
    console.log("Do you want to eat a " + elem + " ?");
}