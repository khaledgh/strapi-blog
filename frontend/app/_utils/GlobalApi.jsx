const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
const axiosClient = axios.create({
  baseURL: `${PUBLIC_URL}/api`,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getArticlesList = () => axiosClient.get("posts?sort=createdAt:desc&populate=*");

const getRelatedArticlesList = (tagsQuery, excludedId) =>
  axiosClient.get(`posts?${tagsQuery}&filters[slug][$notIn]=${excludedId}&pagination[pageSize]=10&populate=*`)

  const getRelatedArticlesByTagList = (tagsQuery) =>
  axiosClient.get(`posts?filters[tags][Name][$contains]=${tagsQuery}&pagination[pageSize]=10&populate=*`, { cache: false });

const getArticleById = (id) =>
  axiosClient.get("/posts?filters[slug][$in][0]=" + id + "&populate=*");

const getCategory = () => axiosClient.get("categories?populate=*");

export default {
  getCategory,
  getArticlesList,
  getArticleById,
  getRelatedArticlesList,
  getRelatedArticlesByTagList
};
