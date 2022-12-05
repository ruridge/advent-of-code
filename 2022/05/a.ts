const i = await Deno.readTextFile(new URL("./input.txt", import.meta.url));
const [s, c] = i.split("\n\n");
const st = s.split("\n").slice(0, -1);
const sta = [];
for (const line of st) {
  const a = line.match(/.{1,4}/g)?.map((x) => x.match(/[A-Z]/)?.[0]);
  sta.push(a);
}

const stacks = [] as string[][];
sta.reverse().forEach((x, i) => {
  if (i === 0) {
    x?.forEach((y) => {
      y && stacks.push([y]);
    });
  } else {
    x?.forEach((y, i) => {
      y && stacks[i].push(y);
    });
  }
});
console.log("Answer: ", solve(stacks, c.split("\n")));
console.assert(solve(stacks, c.split("\n")).tops == "BPCZJLFJW");

function solve(stacks: string[][], x: string[]) {
  // [amount, from, to]
  const moves = x.map(
    (y) => y.match(/\d+/g)?.map((z) => parseInt(z)) as [number, number, number]
  );
  const newStacks = stacks.map((x) => [...x]);
  moves.forEach(([amount, from, to]) => {
    const items = newStacks[from - 1].splice(
      newStacks[from - 1].length - amount,
      amount
    );
    newStacks[to - 1].push(...items);
  });

  const tops = newStacks.map((x) => x[x.length - 1]);
  return { tops: tops.join("") };
}
