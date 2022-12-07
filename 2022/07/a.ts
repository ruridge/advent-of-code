const input = await Deno.readTextFile(new URL("./input.txt", import.meta.url));
console.log("Answer 1:", solve(input, 100_000));
console.assert(solve(input, 100_000).totalAtMost == 1391690);
console.assert(solve(input, 100_000).smallestFileToRemove?.pop() == 5469168);

function solve(x: string, atMost: number) {
  const lines = x.split("\n");
  const folders = new Map<string, number>();
  const folderStack: string[] = [];
  let pos = 0;
  while (pos < lines.length) {
    const line = lines[pos];
    if (line.startsWith("$ cd")) {
      const folder = line.split(" ").pop();
      if (folder == "..") {
        folderStack.pop();
      } else if (folder) {
        folderStack.push(folder);
      }
      // console.log(folderStack);
    }
    if (line === "$ ls") {
      pos++;
      let sumOfFileSizes = 0;
      // add up all the file sizes in this folder
      while (lines[pos] && !lines[pos].startsWith("$")) {
        // console.log(pos + 1, lines[pos]);
        const [size, name] = lines[pos].split(" ");
        if (size !== "dir") {
          // console.log(folderStack.join("/") + "/" + name, size);

          sumOfFileSizes += Number(size);
        }
        pos++;
      }
      // add the sum of file sizes to all the folders in the stack
      for (let i = 0; i < folderStack.length; i++) {
        const folder = folderStack.slice(0, i + 1).join("/");
        const folderSize = folders.get(folder) ?? 0;
        folders.set(folder, folderSize + sumOfFileSizes);
      }
    } else {
      pos++;
    }
  }
  const totalAtMost = [...folders.values()]
    .filter((x) => x <= atMost)
    .reduce((a, b) => a + b, 0);

  const totalSpace = 70_000_000;
  const requiredFreeSpace = 30_000_000;
  const totalUsed = folders.get("/")!;
  const freeSpace = totalSpace - totalUsed;
  const sortedFolders = new Map(
    [...folders.entries()].sort((a, b) => a[1] - b[1])
  );
  const smallestFileToRemove = [...sortedFolders.entries()].find(
    (x) => x[1] >= requiredFreeSpace - freeSpace
  );
  return {
    totalAtMost,
    totalUsed,
    smallestFileToRemove,
  };
}
