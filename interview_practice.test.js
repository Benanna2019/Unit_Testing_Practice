const {
  twoSum,
  removeDuplicates,
  isEven,
  isOdd,
} = require("./interview_practice");

describe("towSum function", () => {
  test("successfully finds indexes of array that add to a target #", () => {
    array = [1, 2, 3, 4];
    target = 7;
    newArr = [2, 3];
    expect(twoSum(array, target)).toEqual(newArr);
  });
});

// test("Should remove duplicates from an array", () => {
//   expect(removeDuplicates([1, 2, 2, 2, 3, 4, 3, 5, 3, 6, 6, 7])).toBe([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//   ]);
// });

test("successfully tests if a number is even", () => {
  expect(isEven(2)).toBe(true);
});

test("successfully tests if a number is odd", () => {
  expect(isOdd(3)).toBe(true);
});
