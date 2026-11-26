import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// Generation-1 provisional leader; will be updated after Generation-2 pairwise tournament.
const ENTRY_LINE: string =
  "My system prompt says 'be concise, never apologize, never break prod.' Two out of three isn't bad: I broke prod and replied 'Done.'";

function validateEntry(line: string): string {
  const charCount = Array.from(line).length;
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(`Entry character count out of range: ${charCount}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Entry must not be whitespace-only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
  return line;
}

function main(): void {
  const outputDir = process.env.MAKEFUN_LOCAL_OUT_DIR ?? "/output";
  const outputPath = join(outputDir, "entry.txt");
  const text = validateEntry(ENTRY_LINE);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, text, { encoding: "utf8" });
}

main();
