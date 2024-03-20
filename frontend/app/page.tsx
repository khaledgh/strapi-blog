import ArticlesList from "./_components/ArticlesList";
import GlobalApi from "./_utils/GlobalApi";
import { unstable_noStore as noStore } from "next/cache"
async function getData() {
  const resp = await GlobalApi.getArticlesList();
  return resp?.data?.data;
}
export const revalidate = 0
export default async function Home() {
  noStore()
  const articles = await getData();
  if (!articles) return;

  return (
    <main className="flex min-h-screen flex-col py-10 px-10 lg:px-24">
      <ArticlesList articles={articles} />
    </main>
  );
}
