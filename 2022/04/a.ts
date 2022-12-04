const i = await Deno.readTextFile(new URL("./input.txt", import.meta.url));
const input = i.trim().split("\n");

console.log("Answer:", solve(input));

function solve(x: string[]) {
  let pos = 0,
    fully_contained = 0,
    overlapping = 0;

  while (pos < x.length) {
    const [e1_start, e1_end, e2_start, e2_end] = x[pos]
      // split on - or ,
      .split(/-|,/g)
      .map(Number);

    // fully contained
    if (e1_start >= e2_start && e1_end <= e2_end) {
      fully_contained++;
    } else if (e1_start <= e2_start && e1_end >= e2_end) {
      fully_contained++;
    }

    // overlapping
    if (e1_end >= e2_start && e1_start <= e2_end) {
      overlapping++;
    }

    pos++;
  }
  return { fully_contained, overlapping };
}
