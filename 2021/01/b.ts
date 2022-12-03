export {};

const inputFile = "./example.txt";
// const inputFile = "./input.txt";
const inputTxt = await Deno.readTextFile(new URL(inputFile, import.meta.url));

const ans = inputTxt.trim().split("\n");
// .map((line, i) => line.split(""));
// .reduce(
//   (acc, line, i) => {
//     return acc;
//   },
//   [0]
// );

console.log(ans);
