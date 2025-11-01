// test.js
import fs from "fs";

// Read your HTML file
const html = fs.readFileSync("index.html", "utf8");

// Very simple checks
if (!html.includes("Hello World")) {
  console.error("❌ Missing: 'Hello World'");
  process.exit(1);
}

if (!html.includes("How are you today?")) {
  console.error("❌ Missing: 'How are you today?'");
  process.exit(1);
}

console.log("✅ HTML test passed!");
