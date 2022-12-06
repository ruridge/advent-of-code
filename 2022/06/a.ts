const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));

// test part 1
console.assert(solve("bvwbjplbgvbhsrlpgdmjqwftvncz", 4).marker == 5);
console.assert(solve("nppdvjthqldpwncqszvftbrmjlhg", 4).marker == 6);
console.assert(solve("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 4).marker == 10);
console.assert(solve("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 4).marker == 11);
// test part 2
console.assert(solve("mjqjpqmgbljsphdztnvjfqwrcgsmlb", 14).marker == 19);
console.assert(solve("bvwbjplbgvbhsrlpgdmjqwftvncz", 14).marker == 23);
console.assert(solve("nppdvjthqldpwncqszvftbrmjlhg", 14).marker == 23);
console.assert(solve("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 14).marker == 29);
console.assert(solve("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 14).marker == 26);

console.log("Answer 1:", solve(input, 4));
console.log("Answer 2:", solve(input, 14));

function solve(x: string, markerLength: number) {
  // console.log(x);

  let pos = 0,
    marker = markerLength;

  while (pos < x.length) {
    const firstFour = x.slice(pos, marker).split("");
    if (firstFour.length < markerLength) {
      marker = 0;
      break;
    }
    // console.log(firstFour);
    if (new Set(firstFour).size === markerLength) {
      break;
    }

    pos++;
    marker++;
  }
  return { marker };
}
