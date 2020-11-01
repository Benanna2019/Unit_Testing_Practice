// function sayHello() {
//   console.log("Hello");
// }

// setTimeout(sayHello, 1000);

function createFunction(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

const returnNextElement = createFunction([4, 5, 6]);
const element1 = returnNextElement();
const element2 = returnNextElement();
const element3 = returnNextElement();

console.log(element1);
console.log(element2);
console.log(element3);
