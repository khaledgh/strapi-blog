const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getArticlesList = () => axiosClient.get("posts?populate=*");

const getArticleById = (id) =>
  axiosClient.get(
    "/posts?filters[id][$in][0]=" + id + "&populate=*"
  );

const getCategory = () => axiosClient.get("categories?populate=*");

export default { getCategory, getArticlesList, getArticleById };
