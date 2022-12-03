export {};

const inputFile = "./example.txt";
// const inputFile = "./input.txt";
const inputTxt = await Deno.readTextFile(new URL(inputFile, import.meta.url));

const ans = inputTxt
  .trim()
  .split("\n")
  // .map((line) => line.split(""));
  .reduce(
    (acc, line) => {
      if (line === "") {
        acc.push(0);
      } else {
        acc[acc.length - 1] += Number(line);
      }
      return acc;
    },
    [0]
  )
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, sum) => acc + sum, 0);

console.log(ans);
