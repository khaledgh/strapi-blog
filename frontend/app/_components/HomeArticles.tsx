import GlobalApi from "../_utils/GlobalApi";
import ArticlesList from "./ArticlesList";

async function getData() {
  const resp = await GlobalApi.getArticlesList();
  return resp?.data?.data;
}
export default async function HomeArticles() {
  const articles = await getData();
  return (
    <div>
      <ArticlesList articles={articles} />
    </div>
  );
}
