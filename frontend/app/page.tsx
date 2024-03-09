"use client";

import { useEffect, useState } from "react";
import ArticlesList from "./_components/ArcticlesList";
import GlobalApi from "./_utils/GlobalApi";

export default function Home() {
  const [articles, SetArticles] = useState([]);
  useEffect(() => {
    getArticleList();
  }, []);
  const getArticleList = () => {
    GlobalApi.getArticlesList().then((resp: any) => {
      console.log(resp);
      SetArticles(resp?.data?.data);
    });
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <ArticlesList articles={articles} />
    </main>
  );
}
