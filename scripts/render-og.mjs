// Rasterize SVGs in /public to PNG. Run: node scripts/render-og.mjs
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const here = dirname(fileURLToPath(import.meta.url));
const pub = resolve(here, "..", "public");

async function render(svgName, pngName, width, height) {
  const svg = await readFile(resolve(pub, svgName));
  const buf = await sharp(svg, { density: 384 })
    .resize(width, height, { fit: "fill" })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(resolve(pub, pngName), buf);
  console.log(`wrote ${pngName} (${buf.length} bytes)`);
}

await render("og.svg", "og.png", 1200, 630);
await render("og-en.svg", "og-en.png", 1200, 630);
await render("apple-touch-icon.svg", "apple-touch-icon.png", 180, 180);
await render("apple-touch-icon.svg", "favicon-32.png", 32, 32);
