export {};

// const inputFile = "./example.txt";
const inputFile = "./input.txt";
const inputTxt = await Deno.readTextFile(new URL(inputFile, import.meta.url));

const inputArr = inputTxt.trim().split("\n");

const sum = (a: number, b: number) => a + b;
const isUppercase = (x: string) => x === x.toUpperCase();

console.log(getAns(inputArr));

function getAns(input: string[]) {
  return (
    input
      // group lines into threes
      .reduce((acc: string[][], line, i) => {
        if (i % 3 === 0) {
          acc.push([line]);
        } else {
          acc[acc.length - 1].push(line);
        }
        return acc;
      }, [])
      // find the letter common to all three
      .map(
        ([a, b, c]) =>
          a.split("").find((x) => b.includes(x) && c.includes(x)) ?? ""
      )
      // get the character value
      .map((x) =>
        isUppercase(x) ? x.charCodeAt(0) - 38 : x.charCodeAt(0) - 96
      )
      // sum the values
      .reduce(sum, 0)
  );
}
