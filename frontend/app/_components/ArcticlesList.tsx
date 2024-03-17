import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SkeletonArticles from "./SkeletonArticles";


const PUBLIC_URL =process.env.NEXT_PUBLIC_URL;

const extractFirst40Words = (htmlContent: string) => {
  const plainText = htmlContent?.replace(/<[^>]+>/g, "");
  const first40Words = plainText?.split(/\s+/).slice(0, 40).join(" ");
  return first40Words;
};

const ArcticlesList: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-4">
      {articles?.length > 0
        ? articles?.map((item: Article, index: number) => (
            <Link
              href={"/articles/" + item.id}
              className="overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg dark:border-[1px] dark:border-gray-700"
              key={index}
            >
              <Image
                alt=""
                src={`${PUBLIC_URL+item.attributes?.Image?.data?.attributes?.url}`}
                width={800}
                height={800}
                className="h-56 w-full object-cover p-2 rounded-3xl shadow-3xl"
              />

              <div className="px-4 sm:px-6 py-2 pb-5">
                <h1 className="px-4 py-2 rounded-full  border-[1px] border-gray-500 text-gray-400 shadow-md font-bold text-xs w-max my-2">
                  {item?.attributes?.category?.data?.attributes?.name}
                </h1>
                <time
                  dateTime={new Date(
                    item?.attributes?.createdAt
                  ).toLocaleString()}
                  className="block text-xs text-gray-300"
                >
                  {new Date(item?.attributes?.createdAt).toLocaleString()}{" "}
                </time>
                <a href="#">
                  <h3 className="mt-0.5 text-lg text-black dark:text-white dark:font-extrabold">
                    {item?.attributes?.Title}
                  </h3>
                </a>

                <p className="mt-2 text-sm/relaxed dark:text-white">
                  <div className="dark:text-white text-sm not-italic not-font-bold line-clamp-4">
                    {extractFirst40Words(item?.attributes?.Text)}...
                  </div>
                </p>
                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Read more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </Link>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div>
                <SkeletonArticles />
              </div>
          ))}
    </div>
  );
};

export default ArcticlesList;
