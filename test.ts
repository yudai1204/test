import { main } from "./index";

// const test = [``, ``, ``];
const test = [`neko`];

const func = () => {
  for (const input of test) {
    const lines = input.split("\n");
    console.log("========================================");
    main(lines);
  }
  console.log("================END================");
  return;
};

func();
