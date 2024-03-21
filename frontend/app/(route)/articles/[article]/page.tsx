import GlobalApi from "@/app/_utils/GlobalApi";
import ArticleDetails from "@/app/_components/ArticleDetails";
import { unstable_noStore as noStore } from "next/cache";
const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

async function getArticle(article: string) {
  const res = await GlobalApi.getArticleById(article);
  return res?.data?.data;
}

async function getRelatedArticle(tags: String, article: String) {
  const res = await GlobalApi.getRelatedArticlesList(tags, article);
  return res?.data?.data;
}

const extractFirst40Words = (htmlContent: string) => {
  const plainText = htmlContent?.replace(/<[^>]+>/g, "");
  const first40Words = plainText?.split(/\s+/).slice(0, 40).join(" ");
  return first40Words;
};

export const generateMetadata = async ({ params }: any) => {
  const article = await getArticle(params.article);

  const title = article[0]?.attributes?.Title;
  const desc = extractFirst40Words(article[0]?.attributes?.Text);
  const image =
    PUBLIC_URL + article[0]?.attributes?.Image?.data?.attributes?.url;
  return {
    title: title,
    description: desc,
    openGraph: {
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: desc,
      images: [image],
    },
  };
};

async function Article({ params }: any) {
  noStore();
  const articleList = await getArticle(params.article);
  const tagsQuery = (articleList[0]?.attributes?.tags?.data)
    .map(
      (tag: Tag, index: number) =>
        `filters[$or][${index}][tags][Name][$contains]=${tag?.attributes?.Name}`
    )
    .join("&");

  const relatedList = await getRelatedArticle(tagsQuery, params.article);

  return (
    <div className="pb-24 mt-5 px-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
      <ArticleDetails articleList={articleList} relatedList={relatedList} />
    </div>
  );
}

export default Article;
