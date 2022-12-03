export {};

// const inputFile = "./example.txt";
const inputFile = "./input.txt";
const inputTxt = await Deno.readTextFile(new URL(inputFile, import.meta.url));

const ans = inputTxt
  .trim()
  .split("\n")
  .map(Number)
  .reduce((acc, cur, i, arr) => {
    const a = cur;
    const b = arr[i + 1];
    const c = arr[i + 2];
    const sum = a + b + c;
    acc.push(sum);
    return acc;
  }, [] as number[])
  .reduce((acc, cur, i, arr) => {
    const prev = arr[i - 1];
    if (cur > prev) acc += 1;
    return acc;
  }, 0);

console.log(ans);
