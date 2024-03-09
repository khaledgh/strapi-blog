import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const ArcticlesList = ({ articles }: any) => {
  return (
    <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-4 gap-4">
      {articles?.length > 0
        ? articles?.map((item, index) => (
            <Link
              href={"/articles/" + item.id}
              className="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
              key={index}
            >
              <Image
                alt=""
                src={`http://localhost:1337${item.attributes?.Image?.data?.attributes?.url}`}
                width={200}
                height={400}
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  {new Date(item?.attributes?.createdAt).toLocaleString()}
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    {item?.attributes?.Title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.attributes?.Text }}
                  />
                </p>
              </div>
            </Link>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className="h-[220px] bg-slate-200 w-full rounded-lg animate-pulse shadow-md"></div>
          ))}
    </div>
  );
};

export default ArcticlesList;
