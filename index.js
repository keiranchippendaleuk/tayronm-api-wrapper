const axios = require("axios");

const BASE_URL = "https://pds.tayronm.xyz";

async function getLyrics(title, artist) {
  const { data } = await axios.get(
    `${BASE_URL}/lyrics?title=${title}&artist=${artist}`
  );
  delete data.cache;
  return data;
}

async function getTracks(title, artist) {
  const { data } = await axios.get(
    `${BASE_URL}/v1/track?title=${title}&artist=${artist}`
  );
  delete data.cached;
  return data;
}

async function getAllRadios() {
  const { data } = await axios.get(`${BASE_URL}/radios/all`);
  return data;
}

async function getRadioById(id) {
  const { data } = await axios.get(`${BASE_URL}/radios/${id}`);
  return data;
}

async function getDominantColor(imageUrl) {
  const { data } = await axios.get(
    `${BASE_URL}/colorthief?image=${imageUrl}`
  );
  delete data.cached;
  return data;
}
module.exports = {
  getLyrics,
  getTracks,
  getAllRadios,
  getRadioById,
  getDominantColor,
};
