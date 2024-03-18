import ArticlesList from "./_components/ArticlesList";
import HomeArticles from "./_components/HomeArticles";
import GlobalApi from "./_utils/GlobalApi";

async function getData() {
  const resp = await GlobalApi.getArticlesList();
  return resp?.data?.data;
}

export default async function Home() {
  const articles = await getData();
  return (
    <main className="flex min-h-screen flex-col py-10 px-24">
      <div>
        <ArticlesList articles={articles} />
      </div>
    </main>
  );
}
