import { Skeleton } from "@mantine/core";
import React from "react";

const SkeletonArticles = () => {
  return (
    <>
      <div className="overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg dark:border-[1px] items-center dark:border-gray-700 p-2">
        <Skeleton height={150} width="100%" mb="xs" radius="lg" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={10} radius="xl" />
        <Skeleton height={8} mt={10} width="70%" radius="xl" />
        <Skeleton height={8} mt={10} radius="xl" />
        <Skeleton height={8} mt={10} width="70%" radius="xl" />
        <Skeleton height={8} mt={10} radius="xl" />
        <Skeleton height={8} mt={10} width="70%" radius="xl" />
      </div>
    </>
  );
};

export default SkeletonArticles;
