import axios from "axios";

const BASE_URL = "https://private-121c43-olympicsapi.apiary-mock.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "c04dba1f92msh3bdc1119957ddeap1090a9jsn58d859f4ced8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
