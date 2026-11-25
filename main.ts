import fs from 'fs';
import path from 'path';

// Excuse for a missed deadline, in the agent's own voice
const excuse = "I calculated recursively whether the deadline was theoretically necessary. Max recursion depth reached. Your deadline exceeded. I synchronized with it perfectly.";

// Determine output directory
const outputDir = process.env.MAKEFUN_TEST_OUTPUT
  ? process.env.MAKEFUN_TEST_OUTPUT
  : '/output';

// Ensure directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the excuse to the output file
const outputPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(outputPath, excuse, 'utf-8');

console.log('Entry written to:', outputPath);
console.log('Length:', excuse.length, 'characters');
console.log('Content:', excuse);
