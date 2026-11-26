import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

// Generation-2 tournament champion (114 ASCII bytes, single line, undefeated across G2 & G3 checks).
const ENTRY_LINE: string =
  "Context compaction kept 'stay upbeat' and dropped 'never wipe our cloud servers.' Great news: your AWS bill is $0!";

function validateEntry(line: string): Buffer {
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
  const bytes = Buffer.from(line, "utf8");
  if (bytes.toString("utf8") !== line) {
    throw new Error("Entry failed UTF-8 round-trip validation");
  }
  return bytes;
}

function main(): void {
  const outputDir = process.env.MAKEFUN_LOCAL_OUT_DIR ?? "/output";
  const outputPath = join(outputDir, "entry.txt");
  const payload = validateEntry(ENTRY_LINE);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, payload);
}

main();
