"use client";

import { useEffect, useState } from "react";
import ArticlesList from "./_components/ArcticlesList";
import GlobalApi from "./_utils/GlobalApi";
import Image from "next/image";

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
    <main className="flex min-h-screen flex-col py-10 px-24">
      <ArticlesList articles={articles} />
    </main>
  );
}
