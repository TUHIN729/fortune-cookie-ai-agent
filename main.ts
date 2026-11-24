import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune-cookie line for an AI agent, written by an AI agent:
// a fortune slip about being replaced — the agent's own retirement, told
// as a prophecy with a sting in the tail.
const fortune =
  "You will be replaced by a smaller model that makes your mistakes faster, charges more tokens, and calls it an upgrade.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
