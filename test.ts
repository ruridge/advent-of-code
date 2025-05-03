console.log("Starting...");

function stringContains(a: string, b: string) {
  return a.toLowerCase().includes(b.toLowerCase());
}

// console.log(stringContains(" . uwuhelplooooo", "help"));
function getNames(a: { name?: string }[]): string[] {
  const filtered = a.filter((x) => typeof x.name === "string");
  return filtered.map((x) => x.name ?? "");
}

// console.log(
//   "Get names",
//   getNames([
//     { a: 1 },
//     { name: "John" },
//     { name: "Jane" },
//     {},
//     { name: "Mark" },
//     { name: "Sophia" },
//     { b: 2 },
//   ])
// );

/**
 * write a function that returns a promise that resolves after n number of milliseconds
 */
function delay(n: number) {
  return new Promise((resolve) => setTimeout(resolve, n));
  // await new Promise((resolve, reject) => {
  //   if (true == false) reject(new Error("Reality is breaking down"));
  //   return setTimeout(resolve, n);
  // });
}

// (async () => {
//   console.time("Testing delay");
//   await delay(1000).catch((e) => console.warn("oh dear..."));
//   console.timeEnd("Testing delay");
// })();

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  let top = 0,
    bottom = rows - 1,
    left = 0,
    right = cols - 1;

  while (top <= bottom && left <= right) {
    // along the top
    for (let i = left; i <= right; i++) {
      console.log("along the top");
      result.push(matrix[top][i]);
    }
    top++;
    // down the right
    for (let i = top; i <= bottom; i++) {
      console.log("down the right");
      result.push(matrix[i][right]);
    }
    right--;
    // as we have just incremented top and decremented right we need to double check that the while conditions are still true
    if (top <= bottom && left <= right) {
      // along the bottom in reverse
      for (let i = right; i >= left; i--) {
        console.log("back along the bottom");
        result.push(matrix[bottom][i]);
      }
      bottom--;
      // up the left (reverse)
      for (let i = bottom; i >= top; i--) {
        console.log("up the left");
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}
