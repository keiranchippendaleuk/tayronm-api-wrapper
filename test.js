const tayronmpdswrapper = require('./index');

async function testLyricsAPI() {
  const title = 'never gonna give you up';
  const artist = 'rick astley';
  const lyrics = await tayronmpdswrapper.getLyrics(title, artist);
  console.log(lyrics);
}

async function testTracksAPI() {
  const title = 'killer queen';
  const artist = 'queen';
  const tracks = await tayronmpdswrapper.getTracks(title, artist);
  console.log(tracks);
}

async function testRadiosAPI() {
  const radios = await tayronmpdswrapper.getAllRadios();
  console.log(radios);
}

async function testRadiosByIdAPI() {
  const radioId = '1';
  const radio = await tayronmpdswrapper.getRadioById(radioId);
  console.log(radio);
}

async function testColorGetter() {
  const imageUrl = 'https://i.scdn.co/image/ab67616d0000b27359998815d706661e2c404d9f';
  const color = await tayronmpdswrapper.getDominantColor(imageUrl);
  console.log(color);
}

async function runTests() {
  await testLyricsAPI();
  await testTracksAPI();
  await testRadiosAPI();
  await testRadiosByIdAPI();
  await testColorGetter();
}

runTests();
