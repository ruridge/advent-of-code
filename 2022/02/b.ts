export {};

// const inputFile = "./example.txt";
const inputFile = "./input.txt";
const inputTxt = await Deno.readTextFile(new URL(inputFile, import.meta.url));

// A = rock = 1
// B = paper = 2
// C = scissors = 3
// X is loose = 0
// Y is draw = 3
// Z is win = 6

function rockPaper(opp, me) {
  opp = opp === "A" ? 1 : opp === "B" ? 2 : 3;
  console.log(opp, me);

  let score = 0;

  if (opp === me) score = 3;
  if (opp === 1 && me === 2) score = 6;
  if (opp === 2 && me === 3) score = 6;
  if (opp === 3 && me === 1) score = 6;

  return score + me;
}

function myShape(opp, outcome) {
  let me;
  if (outcome === "X") {
    // loose
    switch (opp) {
      case "A":
        me = 3;
        break;
      case "B":
        me = 1;
        break;
      case "C":
        me = 2;
        break;
    }
  }
  if (outcome === "Y") {
    // draw
    switch (opp) {
      case "A":
        me = 1;
        break;
      case "B":
        me = 2;
        break;
      case "C":
        me = 3;
        break;
    }
  }
  if (outcome === "Z") {
    // win
    switch (opp) {
      case "A":
        me = 2;
        break;
      case "B":
        me = 3;
        break;
      case "C":
        me = 1;
        break;
    }
  }

  console.log(opp, outcome);

  return [opp, me];
}

const ans = inputTxt
  .trim()
  .split("\n")
  .map((line) => line.split(" "))
  .map(([a, b]) => {
    return myShape(a, b);
  })
  .map(([a, b]) => {
    return rockPaper(a, b);
  })
  .reduce((a, b) => a + b, 0);

console.log(ans);
