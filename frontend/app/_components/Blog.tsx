import React from "react";
import GlobalApi from "../_utils/GlobalApi";
import ArcticlesList from "./ArticlesList";

const Blog: React.FC<ArticlesResponse> = ({ articles }) => {
  return (
    <div>
      <ArcticlesList articles={articles} />
    </div>
  );
};

export default Blog;
