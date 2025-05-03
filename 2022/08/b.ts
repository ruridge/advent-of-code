const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));
console.log("Answer 1:", solve(input));

function solve(x: string) {
  const cells = x.split("\n").map((x) => x.split("").map(Number));

  const sumHigherRight = cells.map((row, i) =>
    row.map((cellHeight, j) => {
      console.log("cellHeight", cellHeight);
      let height = -1;
      const right = row.slice(j + 1).filter((x) => x > height);
      return right.reduce((prev, curr) => {
        if (curr <= cellHeight && curr > height) {
          console.log("cellHeight+", cellHeight);
          console.log("curr", curr);
          height = curr;
          return prev + 1;
        } else {
          height = curr;
          return prev;
        }
      }, 0);
    })
  );
  //     let height = -1,
  //       pos = j,
  //       count = 0;
  //     while (height <= currCellHeight) {
  //       // if (row[pos + 1] > height) {
  //       //   height = row[pos + 1];
  //       //   pos++;
  //       //   count++;
  //       // }
  //       pos++;
  //       count++;
  //     }
  //     return count;
  //   })
  // );

  return {
    cells,
    sumHigherRight,
  };
}
