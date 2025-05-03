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

// // // //

// const i = await Deno.readTextFile("input.txt");
// const input = i.trim().split("\r\n");

// const lowerPriority = "abcdefghijklmnopqrstuvwxyz";
// const upperPriority = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// console.log("Answer:\t", solve(input));

// function solve(x: string[]) {
//   let pos = 0,
//     priority_sum = 0;
//   while (pos < x.length) {
//     // Divide the string into two parts
//     const a = x[pos].slice(0, x[pos].length / 2);
//     const b = x[pos].slice(x[pos].length / 2);

//     // Find the common character's and calcualte their priority sum
//     let letter = "";
//     for (let i = 0; i < a.length; i++) {
//       if (b.includes(a[i]) && !letter.includes(a[i])) {
//         letter += a[i];
//       }
//     }
//     if (lowerPriority.includes(letter)) {
//       priority_sum += lowerPriority.indexOf(letter) + 1;
//     } else {
//       priority_sum += upperPriority.indexOf(letter) + 27;
//     }
//     pos++;
//   }
//   return priority_sum;
// }

// const priority = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function solver(x: string[]) {
//   let pos = 0,
//     priority_sum = 0;
//   while (pos < x.length) {
//     // Divide the string into two parts
//     const a = x[pos].slice(0, x[pos].length / 2);
//     const b = x[pos].slice(x[pos].length / 2);

//     // Find the common character's and calcualte their priority sum
//     let letter = "";
//     for (let i = 0; i < a.length; i++) {
//       if (b.includes(a[i]) && !letter.includes(a[i])) {
//         letter += a[i];
//       }
//     }
//     priority_sum += priority.indexOf(letter);
//     pos++;
//   }
//   return priority_sum;
// }

// function solver2(x: string[]) {
//   let pos = 0,
//     priority_sum = 0;
//   while (pos < x.length) {
//     // Divide the string into two parts
//     const a = x[pos].slice(0, x[pos].length / 2);
//     const b = x[pos].slice(x[pos].length / 2);

//     // Find the common character's and calcualte their priority sum
//     let letter = "";
//     for (let i = 0; i < a.length; i++) {
//       if (b.includes(a[i]) && !letter.includes(a[i])) {
//         letter += a[i];
//       }
//     }
//     priority_sum += priority.indexOf(letter);
//     pos++;
//   }
//   return priority_sum;
// }
