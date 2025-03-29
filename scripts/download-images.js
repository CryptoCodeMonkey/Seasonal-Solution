
// This script downloads free stock images from Unsplash for the website
const { createApi } = require('unsplash-js');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Initialize the Unsplash API (using demo access key for limited usage)
const unsplash = createApi({
  accessKey: 'demo',
  fetch: fetch,
});

// Define the image categories we need
const imageRequirements = [
  { name: 'hero', query: 'landscaping house', width: 1920, height: 800 },
  { name: 'landscaping1', query: 'garden landscaping', width: 800, height: 600 },
  { name: 'landscaping2', query: 'yard garden', width: 800, height: 600 },
  { name: 'handyman1', query: 'home repair', width: 800, height: 600 },
  { name: 'handyman2', query: 'carpentry', width: 800, height: 600 },
  { name: 'painting', query: 'house painting', width: 800, height: 600 },
  { name: 'renovation', query: 'home renovation', width: 800, height: 600 },
  { name: 'deck', query: 'deck construction', width: 800, height: 600 },
  { name: 'team', query: 'construction team', width: 800, height: 600 },
  { name: 'person1', query: 'professional man portrait', width: 400, height: 400 },
  { name: 'person2', query: 'professional woman portrait', width: 400, height: 400 },
  { name: 'person3', query: 'carpenter portrait', width: 400, height: 400 },
];

// Ensure the public/images directory exists
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download an image
const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
        console.log(`Downloaded: ${filename}`);
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Delete the file if there's an error
      reject(err);
    });
  });
};

// Main function to search and download images
async function getImages() {
  for (const req of imageRequirements) {
    try {
      const result = await unsplash.search.getPhotos({
        query: req.query,
        perPage: 1,
      });
      
      if (result.errors) {
        console.log('Error occurred: ', result.errors[0]);
        continue;
      }
      
      const photo = result.response.results[0];
      if (!photo) {
        console.log(`No images found for query: ${req.query}`);
        continue;
      }
      
      const downloadUrl = photo.urls.raw + `&w=${req.width}&h=${req.height}&fit=crop`;
      const filename = path.join(imagesDir, `${req.name}.jpg`);
      
      await downloadImage(downloadUrl, filename);
    } catch (error) {
      console.error(`Error processing ${req.name}:`, error);
    }
  }
  
  console.log('All images downloaded successfully!');
}

getImages().catch(console.error);
