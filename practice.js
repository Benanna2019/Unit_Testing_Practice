// const myArray = {
//   length: 0,
//   push: function () {
//     this.length++;
//   },
//   pop: function () {
//     this.length--;
//   },
// };
// let arr = [];
// console.log("first array log", myArray.length);
// console.log("first array log", arr.length);
// myArray.push();
// console.log("first push", myArray.length);
// arr.push(3);
// myArray.pop();
// console.log(myArray.length);

// function addBinary(a, b) {
//   const add = a + b;
//   return Number(add).toString(2);
// }

// console.log(addBinary(245, 876));

// 26) How Casey would solve it
let array = [2, 4, 12, 56, 2, 2, 4, 5, 6, 6, 4, 7, 8];
function countOccurences(arr) {
  const dict = {};
  for (let i = 0; i < arr.length; i++) {
    const curElement = arr[i];
    if (dict[curElement]) dict[curElement]++;
    else dict[curElement] = 1;
  }
  console.log(dict);
  const keys = Object.keys(dict);
  console.log(keys);
  const newArr = [];
  for (let i = 0; i < keys.length; i++) {
    newArr.push([keys[i], dict[keys[i]]]);
  }
  return newArr;
}

countOccurences(array);
