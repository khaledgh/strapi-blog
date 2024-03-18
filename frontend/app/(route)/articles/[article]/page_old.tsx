"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import HighlightedText from "@/app/_components/CodeText";
//import { Image } from "@mantine/core";
import Image from "next/image";
import { Loader } from "@mantine/core";
import Link from "next/link";
import { AxiosResponse } from "axios";
import Head from "next/head";
import { NextSeo } from "next-seo";
interface ArticleProps {
  params: any; // Update with the actual type of params
}

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

const extractFirst40Words = (htmlContent: string) => {
  const plainText = htmlContent?.replace(/<[^>]+>/g, "");
  const first40Words = plainText?.split(/\s+/).slice(0, 40).join(" ");
  return first40Words;
};

const Article: React.FC<ArticleProps> = ({ params }) => {
  const [doctorsList, setDoctorsList] = useState<any[]>([]);
  const [categoriesList, setCategoriesList] = useState<any[]>([]);
  const [relatedList, setRelatedList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    getArticle();
    getCategories();
    Prism.highlightAll();
  }, []);

  const getArticle = () => {
    GlobalApi.getArticleById(params.article)
      .then((res: AxiosResponse<ArticlesResponse>) => {
        setDoctorsList(res?.data?.data || []);
        console.log(params.article);
        const tagsQuery = (res?.data?.data[0]?.attributes?.tags?.data)
          .map(
            (tag: Tag) =>
              `filters[tags][Name][$contains]=${tag?.attributes?.Name}`
          )
          .join("&");
        getRelatedArticle(tagsQuery);
        setLoading(false);
        setError(null);
      })
      .catch((error: any) => {
        setLoading(false);
        setError("Error fetching data");
      });
  };
  const getRelatedArticle = (tags: String) => {
    console.log(tags);
    GlobalApi.getRelatedArticlesList(tags, params.article)
      .then((res: AxiosResponse<ArticlesResponse>) => {
        setRelatedList(res?.data?.data);
        console.log(res?.data?.data);
        setLoading(false);
        setError(null);
      })
      .catch((error: any) => {
        setLoading(false);
        setError("Error fetching data");
      });
  };

  const getCategories = () => {
    GlobalApi.getCategory()
      .then((res: AxiosResponse<CategoriesResponse>) => {
        setCategoriesList(res?.data?.data || []);
      })
      .catch((error: any) => {
        setLoading(false);
        setError("Error fetching data");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader color="blue" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-5 px-5 grid grid-cols-1 lg:grid-cols-4 gap-4">
      <Head>
        <title>{doctorsList[0]?.attributes?.Title} </title>
        <meta property="og:title" content={doctorsList[0]?.attributes?.Title} />
        <meta
          property="og:description"
          content= {extractFirst40Words(doctorsList[0]?.attributes?.Text)}
        />
        <meta property="og:image" content={PUBLIC_URL + doctorsList[0]?.attributes?.Image?.data?.attributes?.url} />
        <meta property="og:url" content="https://bracketed.tech" />
      </Head>
      <NextSeo
        title={doctorsList[0]?.attributes?.Title} 
        description={extractFirst40Words(doctorsList[0]?.attributes?.Text)}
        openGraph={{
          url: "https://bracketed.tech",
          title: `${doctorsList[0]?.attributes?.Title}`,
          images: [
            {
              url: `${PUBLIC_URL + doctorsList[0]?.attributes?.Image?.data?.attributes?.url}`,
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <div className="col-span-3 px-0 md:px-14">
        <div className="py-5 ">
          <h1 className="text-3xl font-bold text-left">
            {doctorsList[0]?.attributes?.Title}
          </h1>
          <h1 className="text-sm mt-2">
            {/* <span className="italic text-gray-400">By </span>
            <span className="italic">Ramy Jaber </span>  */}
            Posted On
            <span className="text-gray-400 ml-1">
              {new Date(
                doctorsList[0]?.attributes?.createdAt
              ).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </h1>
        </div>

        <div className="my-5">
          <Image
            alt=""
            src={`${
              PUBLIC_URL +
              doctorsList[0]?.attributes?.Image?.data?.attributes?.url
            }`}
            width={900}
            height={900}
            className="h-full w-full object-contain rounded-3xl shadow-xl"
          />
        </div>
        <HighlightedText html={doctorsList[0]?.attributes?.Text} />
      </div>
      <div className="col-span-1 px-0 md:px-10 items-end">
        <h1 className="text-xl text-black dark:text-white font-medium mt-20 text-left">
          Related Articles
        </h1>
        {relatedList?.length > 0 ? (
          relatedList?.map((item, index) => (
            <Link
              href={"/articles/" + item.id}
              className="flex justify-start items-center gap-3 mt-6"
              key={index}
            >
              <Image
                alt=""
                src={`${
                  PUBLIC_URL + item.attributes?.Image?.data?.attributes?.url
                }`}
                width={160}
                height={140}
                className="w-24 h-20 object-cover  rounded-2xl shadow-3xl"
              />
              <div className="flex flex-col gap-2">
                <h2 className="text-sm text-left font-bold">
                  {item?.attributes?.Title}
                </h2>
                <h2 className="text-xs text-left">
                  <time
                    dateTime={new Date(
                      item?.attributes?.createdAt
                    ).toLocaleString()}
                    className="block text-xs text-gray-400"
                  >
                    {new Date(item?.attributes?.createdAt).toLocaleString()}
                  </time>
                </h2>
              </div>
            </Link>
          ))
        ) : (
          <div className="cursor-pointer px-4 py-2 rounded-full  border-[1px] border-gray-500 text-gray-400 shadow-md font-bold text-xs w-max my-2">
            No Related Articles Found
          </div>
        )}
        <div className="mt-5">
          <h1 className="font-bold text-xl">Tags</h1>
          <div className="flex flex-wrap mt-1 gap-1">
            {doctorsList[0]?.attributes?.tags?.data?.map(
              (item: Tag, index: number) => (
                <Link
                  href={"/tags/" + item?.attributes?.Name}
                  className="cursor-pointer px-4 py-2 rounded-full  border-[1px] border-gray-500 text-gray-400 shadow-md font-bold text-xs w-max my-2"
                  key={index}
                >
                  {item?.attributes?.Name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
