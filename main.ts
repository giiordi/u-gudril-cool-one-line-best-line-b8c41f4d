// One Line, Best Line — entry program.
// Writes a single line of text (at most 240 characters) to entry.txt
// inside the output directory the harness provides.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a smart fridge breaks up with its owner by text message.
// One sentence, hook in the first words, turn at the end.
const LINE =
  "My smart fridge texted 'we need to talk,' so now I'm standing in the kitchen wondering which one of us is getting replaced.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate, checked here before writing: UTF-8 text of 1 to 240
// characters, a single line, not only white space.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`Line is ${LINE.length} characters, must be 1-240.`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Line must be a single non-blank line.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outputDir, "entry.txt")}`);
