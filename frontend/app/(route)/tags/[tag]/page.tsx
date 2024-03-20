import ArticlesList from "@/app/_components/ArticlesList";
import GlobalApi from "@/app/_utils/GlobalApi";
interface ArticleProps {
  params: any; // Update with the actual type of params
}

async function getData(tag: string) {
  const resp = await GlobalApi.getRelatedArticlesByTagList(tag);
  return resp?.data?.data;
}

async function Tag({ params }: ArticleProps) {
  const articles = await getData(params.tag);
  return (
    <main className="flex min-h-screen flex-col py-10 px-10 lg:px-24">
      <h1 className="text-center text-3xl font-bold text-white">
        #{decodeURIComponent(params.tag)}
      </h1>
      <div className="mt-10">
        <ArticlesList articles={articles} />
      </div>
    </main>
  );
}

export default Tag;
