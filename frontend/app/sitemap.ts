import GlobalApi from "./_utils/GlobalApi";

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

async function getData() {
  const resp = await GlobalApi.getArticlesList();
  return resp?.data?.data;
}

export default async function sitemap() {
  const blog = await getData();
  return blog.map((item: Article, index: number) => ({
    url: `https://www.bracketed.tech/articles/${item?.attributes?.slug}`,
    lastModified: item?.attributes?.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.5
  }));
}
