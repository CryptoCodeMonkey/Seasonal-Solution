
const fs = require('fs');
const https = require('https');
const path = require('path');

// Define image URLs for landscaping and handyman business
const imageUrls = [
  {
    url: 'https://images.unsplash.com/photo-1589923188900-85dae523342b',
    filename: 'hero-landscaping.jpg',
    description: 'Professional landscaping with green lawn and garden'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e',
    filename: 'handyman-service.jpg',
    description: 'Handyman working with tools'
  },
  {
    url: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
    filename: 'lawn-mowing.jpg',
    description: 'Professional lawn mowing service'
  },
  {
    url: 'https://images.unsplash.com/photo-1621905252472-943afaa20e20',
    filename: 'home-repair.jpg',
    description: 'Home repair and renovation'
  }
];

// Ensure the images directory exists
const imgDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Download each image
imageUrls.forEach(({ url, filename, description }) => {
  const filePath = path.join(imgDir, filename);
  console.log(`Downloading ${url} to ${filePath}...`);
  
  https.get(`${url}?auto=format&fit=crop&w=1920&q=80`, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Failed to download ${url}: ${res.statusCode}`);
      return;
    }
    
    const fileStream = fs.createWriteStream(filePath);
    res.pipe(fileStream);
    
    fileStream.on('finish', () => {
      console.log(`Downloaded ${filename} successfully`);
    });
    
    fileStream.on('error', (err) => {
      console.error(`Error writing ${filename}:`, err);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${url}:`, err);
  });
});
