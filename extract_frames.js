const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videoPath = path.join(__dirname, 'public', 'videos', 'hero_scroll.mp4');
const outDir = path.join(__dirname, 'public', 'frames');

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Extracting frames using ffmpeg at 120fps...');
try {
  // Compress and convert to webp at 120fps. Scale to 720p to keep size manageable.
  // -q:v 50 sets WebP quality (0-100).
  const command = `"${ffmpeg}" -i "${videoPath}" -vf "scale=-1:720,fps=120" -vcodec libwebp -q:v 50 "${path.join(outDir, 'frame_%04d.webp')}"`;
  
  execSync(command, { stdio: 'inherit' });
  console.log('Frame extraction complete!');
} catch (error) {
  console.error('Error extracting frames:', error.message);
}
