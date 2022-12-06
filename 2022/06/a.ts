const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

console.log("Answer:", solve(input));
console.assert(solve("bvwbjplbgvbhsrlpgdmjqwftvncz").marker == 5);
console.log(solve("bvwbjplbgvbhsrlpgdmjqwftvncz").marker);

function solve(x: string) {
  // console.log(x);

  let pos = 0,
    marker = 14;

  while (pos < x.length) {
    const firstFour = x.slice(pos, marker).split("");
    if (firstFour.length < 14) {
      marker = 0;
      break;
    }
    // console.log(firstFour);
    if (new Set(firstFour).size === 14) {
      break;
    }

    pos++;
    marker++;
  }
  return { marker };
}
