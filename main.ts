// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt. Deterministic: same bytes every run.
// Node 22, standard library only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_TEXT =
  "While you read this, a swift above you has not landed in ten months. It eats and drinks on the wing, and no one knows how it sleeps. What would you ask it, if it could answer?";

const outPath = process.argv[2] ?? "/output/entry.txt";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// counted as Unicode code points, and not only white space.
const chars = [...ENTRY_TEXT].length;
if (chars < 1 || chars > 280 || ENTRY_TEXT.trim().length === 0) {
  console.error(`entry is ${chars} characters, must be 1-280 and non-blank`);
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY_TEXT, "utf8");
console.log(`wrote ${outPath} (${chars} characters)`);
