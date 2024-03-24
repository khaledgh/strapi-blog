import GlobalApi from "./_utils/GlobalApi";

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

async function getData() {
  const resp = await GlobalApi.getArticlesList();
  return resp?.data?.data;
}

export default async function sitemap() {
  const blog = await getData();

  const posts = blog.map((item: Article, index: number) => ({
    url: `${PUBLIC_URL}/articles/${item?.attributes?.slug}`,
    lastModified: item?.attributes?.updatedAt,
  }));

  const routes = ["", "/blog", "/about"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
