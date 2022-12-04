const i = await Deno.readTextFile(new URL("./input.txt", import.meta.url));
const input = i.trim().split("\n");

console.log("Answer:", solve(input));

function solve(x: string[]) {
  let pos = 0,
    fully_contained = 0,
    overlapping = 0;

  while (pos < x.length) {
    const [e1, e2] = x[pos].split(",").map((x) => x.split("-").map(Number));

    // fully contained
    if (e1[0] >= e2[0] && e1[1] <= e2[1]) {
      fully_contained++;
    } else if (e1[0] <= e2[0] && e1[1] >= e2[1]) {
      fully_contained++;
    }

    // overlapping
    if (e1[1] >= e2[0] && e1[0] <= e2[1]) {
      overlapping++;
    }

    pos++;
  }
  return { fully_contained, overlapping };
}
