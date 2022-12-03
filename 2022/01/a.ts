export {};

const lines = (
  await Deno.readTextFile(new URL("./input.txt", import.meta.url))
).split("\n");

const numbers = lines.map((line) => parseInt(line, 10));

// split into groups seperated by empty lines

const groups = numbers.reduce(
  (acc, number) => {
    // if is NaN
    if (!number) {
      acc.push([]);
    } else {
      acc[acc.length - 1].push(number);
    }
    return acc;
  },
  [[]]
);

const sumOfEachGroup = groups.map((group) => {
  return group.reduce((acc, number) => acc + number, 0);
});

// console.log(lines);
// console.log(numbers);
console.log("groups[0]:", groups[0]);
console.log("sumOfEachGroup:", sumOfEachGroup);

// find the largest group
const largestSum = sumOfEachGroup.reduce((acc, sum) => {
  if (sum > acc) {
    return sum;
  }
  return acc;
}, 0);
console.log("largestSum:", largestSum);

//find the top three largest groups
const sumOfTopThree = sumOfEachGroup
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, sum) => acc + sum, 0);

console.log("sumOfTopThree:", sumOfTopThree);
