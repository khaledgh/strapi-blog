"use client";

import ArcticlesList from "@/app/_components/ArcticlesList";
import GlobalApi from "@/app/_utils/GlobalApi";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface ArticleProps {
  params: any; // Update with the actual type of params
}

const Tag: React.FC<ArticleProps> = ({ params }) => {
  const [articles, SetArticles] = useState<Article[]>([]);
  useEffect(() => {
    getArticleList();
  }, []);
  const getArticleList = () => {
    GlobalApi.getRelatedArticlesByTagList(params.tag).then((resp: AxiosResponse<ArticlesResponse>) => {
      SetArticles(resp?.data?.data);
    });
  };

  return (
    <main className="flex min-h-screen flex-col py-10 px-24">
      <h1 className="text-center text-3xl font-bold text-white">
        #{decodeURIComponent(params.tag)}
      </h1>
      <div className="mt-10">
        <ArcticlesList articles={articles} />
      </div>
    </main>
  );
};

export default Tag;
