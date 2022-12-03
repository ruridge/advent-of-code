export {};

// const inputFile = "./example.txt";
const inputFile = "./input.txt";
const inputTxt = await Deno.readTextFile(new URL(inputFile, import.meta.url));

const sum = (a: number, b: number) => a + b;
const isUppercase = (x: string) => (x === x.toUpperCase() ? 1 : 0);

function getAns(input: string) {
  return (
    input
      .trim()
      .split("\n")
      // split each line into an array of 2 equal elements
      .map((line) => {
        return [
          line.slice(0, line.length / 2),
          line.slice(line.length / 2),
        ] as const;
      })
      // map each line and find the matching pair
      .map(([a, b]) => {
        return [a.split(""), b] as const;
      })
      .map(([a, b]) => {
        return a.find((x) => b.includes(x)) ?? "";
      })
      .map((x) => {
        //get characater code
        // return x.charCodeAt(0);
        // is uppercase
        if (isUppercase(x)) {
          return x.charCodeAt(0) - 38;
        } else {
          return x?.charCodeAt(0) - 96;
        }
      })
      .reduce(sum, 0)
    // .map(([a, b]) => {
    // const match = a.find((x) => b.includes(x));
    // return match;
    // }
  );
  // .map((line) => line.length / 2);
  // .map(Number);
  // .reduce(sum, 0);
  // .map((line, i) => line.split(""));
  // .reduce(
  //   (acc, line, i) => {
  //     return acc;
  //   },
  //   [0]
  // );
}

console.log(getAns(inputTxt));
