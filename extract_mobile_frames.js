const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, 'TensorPix - Trucks_loading_export_cargo_at_202608121848-ezremove.mp4');
const outDir = path.join(__dirname, 'public', 'mobile_frames');

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

console.log('Extracting mobile frames at 12 FPS (approx 120 total frames)...');

// Extract at 12fps, scale to 720 width for mobile performance, quality 60
const command = `"${ffmpeg}" -i "${videoPath}" -vf "scale=720:-1,fps=12" -vcodec libwebp -q:v 60 "${path.join(outDir, 'frame_%04d.webp')}"`;

try {
  execSync(command, { stdio: 'inherit' });
  const count = fs.readdirSync(outDir).length;
  console.log(`\n✅ Done! Extracted ${count} frames to ${outDir}`);
} catch (error) {
  console.error('Error:', error.message);
}
