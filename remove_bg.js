const sharp = require('sharp');
const path = require('path');

async function removeBackground(inputPath, outputPaths) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const buf = Buffer.from(data);

  // Background color sampled from corners: ~(4, 19, 57)
  const bgR = 4, bgG = 19, bgB = 57;
  const threshold = 45; // tolerance for flood fill

  function colorDist(i) {
    const r = buf[i], g = buf[i+1], b = buf[i+2];
    return Math.sqrt((r-bgR)**2 + (g-bgG)**2 + (b-bgB)**2);
  }

  // Flood fill from all edges using a proper stack (non-recursive)
  const isBackground = new Uint8Array(width * height);
  const stack = [];

  function push(x, y) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const pos = y * width + x;
    if (isBackground[pos]) return;
    const pIdx = pos * channels;
    if (colorDist(pIdx) < threshold) {
      isBackground[pos] = 1;
      stack.push(x, y);
    }
  }

  // Seed entire border
  for (let x = 0; x < width; x++) { push(x, 0); push(x, height - 1); }
  for (let y = 1; y < height - 1; y++) { push(0, y); push(width - 1, y); }

  while (stack.length > 0) {
    const y = stack.pop();
    const x = stack.pop();
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  // Apply transparency + soften edges
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pos = y * width + x;
      const pIdx = pos * channels;
      if (isBackground[pos]) {
        buf[pIdx + 3] = 0; // fully transparent
      } else {
        // Check if neighbour is background → smooth edge
        const hasNearBg = [
          [x-1,y],[x+1,y],[x,y-1],[x,y+1],
          [x-1,y-1],[x+1,y-1],[x-1,y+1],[x+1,y+1]
        ].some(([nx,ny]) => {
          if (nx<0||ny<0||nx>=width||ny>=height) return false;
          return isBackground[ny*width+nx] === 1;
        });
        if (hasNearBg) {
          // Partially transparent based on distance to background color
          const dist = colorDist(pIdx);
          if (dist < threshold * 2) {
            const alpha = Math.round((dist / (threshold * 2)) * 255);
            buf[pIdx + 3] = Math.min(buf[pIdx + 3], alpha);
          }
        }
      }
    }
  }

  const rawInput = { raw: { width, height, channels } };
  for (const outPath of outputPaths) {
    await sharp(buf, rawInput).png().toFile(outPath);
    console.log('Written:', outPath);
  }
}

removeBackground('image.png', [
  'public/logo.png',
  'src/app/icon.png',
  'src/app/apple-icon.png',
]).then(() => console.log('✅ All done!')).catch(console.error);
