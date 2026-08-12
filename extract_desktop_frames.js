const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, 'public', 'videos', 'hero_desktop.mp4');
const outDir = path.join(__dirname, 'public', 'desktop_frames');

if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

console.log('Extracting desktop frames at 120fps...');

// Detect video resolution
const probeCmd = `"${ffmpeg}" -i "${videoPath}" 2>&1`;
let probeOutput = '';
try {
  probeOutput = execSync(probeCmd, { encoding: 'utf8' });
} catch (e) {
  probeOutput = e.stderr || e.stdout || '';
}

console.log('Video info detected. Starting extraction at 12 FPS (120 frames)...');

// Extract at 12fps, scale to 1280 wide (HD desktop), quality 60
const command = `"${ffmpeg}" -i "${videoPath}" -vf "scale=1280:-1,fps=12" -vcodec libwebp -q:v 60 "${path.join(outDir, 'frame_%04d.webp')}"`;

try {
  execSync(command, { stdio: 'inherit' });
  const count = fs.readdirSync(outDir).length;
  console.log(`\n✅ Done! Extracted ${count} frames to ${outDir}`);
} catch (error) {
  console.error('Error:', error.message);
}
