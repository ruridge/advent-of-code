export {};

// const inputFile = "./example.txt";
const inputFile = "./input.txt";
const inputTxt = await Deno.readTextFile(new URL(inputFile, import.meta.url));

// A/X = rock = 1
// B/Y = paper = 2
// C/Z = scissors = 3
// loose = 0
// draw = 3
// win = 6

function rockPaper(opp, me) {
  opp = opp === "A" ? 1 : opp === "B" ? 2 : 3;
  me = me === "X" ? 1 : me === "Y" ? 2 : 3;
  // console.log(opp, me);

  let score = 0;

  if (opp === me) score = 3;
  if (opp === 1 && me === 2) score = 6;
  if (opp === 2 && me === 3) score = 6;
  if (opp === 3 && me === 1) score = 6;

  return score + me;
}

const ans = inputTxt
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map(([a, b]) => {
    return rockPaper(a, b);
  })
  .reduce((a, b) => a + b, 0);
// .map((line, i) => line.split(""));
// .reduce(
//   (acc, line, i) => {
//     return acc;
//   },
//   [0]
// );

console.log(ans);
