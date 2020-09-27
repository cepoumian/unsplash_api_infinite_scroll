const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = []; 

// Unspalsh API
const count = 5;
const apiKey = 'yT6eBxUEZuTowV7ksXJe1O-Xh074v1rPp3AFR_Guzhs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Eelements For Links & Photos; Add to DOM. 
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');
    // Create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    // Put the image inside the anchor element; then, put both inside imageContainer.
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}


// Get photos from Unsplash API
async function getPhotos () {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {

  }
}

// On Load
getPhotos();