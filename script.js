// Unspalsh API
const count = 2;
const apiKey = 'yT6eBxUEZuTowV7ksXJe1O-Xh074v1rPp3AFR_Guzhs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos () {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
  } catch (error) {

  }
}

// On Load
getPhotos();