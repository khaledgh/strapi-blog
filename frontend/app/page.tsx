"use client";
import { useEffect, useState } from "react";
import ArticlesList from "./_components/ArticlesList";
import GlobalApi from "./_utils/GlobalApi";
import { AxiosResponse } from "axios";

export const dynamic = "force-dynamic";
export default function Home() {
  const [articles, SetArticles] = useState<Article[]>([]);
  useEffect(() => {
    getArticleList();
  }, []);
  const getArticleList = () => {
    GlobalApi.getArticlesList().then(
      (resp: AxiosResponse<ArticlesResponse>) => {
        SetArticles(resp?.data?.data);
      }
    );
  };
  return (
    <main className="flex min-h-screen flex-col py-10 px-24">
      <div>
        <ArticlesList articles={articles} />
      </div>
    </main>
  );
}
