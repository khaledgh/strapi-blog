"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

interface ArticleProps {
  params: any; // Update with the actual type of params
}

const Article: React.FC<ArticleProps> = ({ params }) => {
  const [doctorsList, setDoctorsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    GlobalApi.getArticleById(params.article)
      .then((res: any) => {
        setDoctorsList(res?.data?.data || []);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError("Error fetching data");
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-5 bg-white px-28">
      <h1 className="text-3xl py-5 font-bold">{doctorsList[0]?.attributes?.Title}</h1>
      <div className="mt-5"
        dangerouslySetInnerHTML={{ __html: doctorsList[0]?.attributes?.Text }}
      />
    </div>
  );
};

export default Article;
