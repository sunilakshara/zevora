const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');

console.log('Compressing video for production...');
const command = `"${ffmpeg}" -y -i hero_extracted.mp4 -vcodec libx264 -crf 28 -preset medium -an public/hero.mp4`;

try {
  execSync(command, { stdio: 'inherit' });
  console.log('Compression complete!');
} catch (e) {
  console.error('Error compressing video:', e.message);
}
