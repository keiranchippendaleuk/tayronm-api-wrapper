# TayronMPDSWrapper

A Node.js package that provides an API wrapper for the [PDS TayronM](https://pds.tayronm.xyz/) API. This package allows you to retrieve lyrics for a song, get tracks by title and artist, retrieve all radios, get radio by ID, and get the dominant color from an image.

## Installation

```
npm install tayronmpdswrapper
```

## Usage

```js
const {
  getLyrics,
  getTracks,
  getAllRadios,
  getRadioById,
  getDominantColor,
} = require("tayronmpdswrapper");

// Retrieve lyrics for a song
getLyrics("never gonna give you up", "rick astley")
  .then((lyrics) => {
    console.log(lyrics);
  })
  .catch((error) => {
    console.log(error);
  });

// Get tracks by title and artist
getTracks("killer queen", "queen")
  .then((tracks) => {
    console.log(tracks);
  })
  .catch((error) => {
    console.log(error);
  });

// Retrieve all radios
getAllRadios()
  .then((radios) => {
    console.log(radios);
  })
  .catch((error) => {
    console.log(error);
  });

// Get radio by ID
getRadioById("2")
  .then((radio) => {
    console.log(radio);
  })
  .catch((error) => {
    console.log(error);
  });

// Get the dominant color from an image
getDominantColor(
  "https://i.scdn.co/image/ab67616d0000b27359998815d706661e2c404d9f"
)
  .then((color) => {
    console.log(color);
  })
  .catch((error) => {
    console.log(error);
  });
```

# License

This package is licensed under the AGPL-3.0 License.

```
Look in the LICENSE file
```
