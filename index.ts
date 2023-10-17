export const main = (lines: string[]) => {
  console.log(lines);
};

const readFromStdin = (): Promise<string[]> => {
  return new Promise((resolve) => {
    let data: string = "";
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdin.on("data", (d) => {
      data += d;
    });
    process.stdin.on("end", () => {
      resolve(data.split("\n"));
    });
  });
};

readFromStdin().then(main);
