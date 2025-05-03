const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));
console.log("Answer 1:", solve(input));

function solve(x: string) {
  const cells = x.split("\n").map((x) => x.split("").map(Number));

  // const visibleGridRight = cells.map((x) => {
  //   let height = -1;
  //   return x.map((b) => {
  //     if (b > height) {
  //       height = b;
  //       return 1;
  //     }
  //     return 0;
  //   });
  // });

  // const visibleGridLeft = cells.map((x) => {
  //   let height = -1;
  //   return x
  //     .reverse()
  //     .map((b) => {
  //       if (b > height) {
  //         height = b;
  //         return 1;
  //       }
  //       return 0;
  //     })
  //     .reverse();
  // });

  // const visibleGridTop = cells[0]
  //   .map((_, i) => {
  //     let height = -1;
  //     return cells.map((x) => {
  //       if (x[i] > height) {
  //         height = x[i];
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   })
  //   .map((_, xi, x) => x.map((_, yi) => x[yi][xi]).reverse());

  // const visibleGridBottom = cells
  //   .reverse()[0]
  //   .map((_, i) => {
  //     let height = -1;
  //     return cells.map((x) => {
  //       if (x[i] > height) {
  //         height = x[i];
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   })
  //   .map((_, xi, x) => x.map((_, yi) => x[yi][xi]).reverse())
  //   .reverse();

  // const reducedVisibleGrid = visibleGridRight.reduce((prev, row, i) => {
  //   return (
  //     row.reduce((prev, cell, j) => {
  //       return cell
  //         ? prev + 1
  //         : visibleGridLeft[i][j]
  //         ? prev + 1
  //         : visibleGridTop[i][j]
  //         ? prev + 1
  //         : visibleGridBottom[i][j]
  //         ? prev + 1
  //         : prev;
  //     }, 0) + prev
  //   );
  // }, 0);

  const sumHigherGrid = cells.map((row, i) => {
    return row.map((currCellHeight, j) => {
      let height = -1,
        pos = j,
        count = 0;
      while (height < currCellHeight) {
        if (row[pos + 1] > height) {
          height = row[pos + 1];
          pos++;
          count++;
        }
      }
      return count;
    });
  });

  return {
    cells,
    // visibleGridRight,
    // visibleGridLeft,
    // visibleGridTop,
    // visibleGridBottom,
    // reducedVisibleGrid,
    // sumHigherGrid,
  };
}
