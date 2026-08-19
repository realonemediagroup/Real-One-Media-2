const sharp = require('sharp');
async function run() {
  await sharp('public/DannyHeadshot.jpg').resize(800).jpeg({ quality: 80 }).toFile('public/DannyHeadshot-small.jpg');
  console.log('Compressed Danny');
  await sharp('public/RobHeadshot.jpg').resize(800).jpeg({ quality: 80 }).toFile('public/RobHeadshot-small.jpg');
  console.log('Compressed Rob');
}
run().catch(console.error);
