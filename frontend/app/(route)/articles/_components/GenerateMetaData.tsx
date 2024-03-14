export async function generateMetadata(post) {
  const title = post?.attributes?.Title;
  const description = post.excerpt; // Or a custom excerpt for SEO purposes
  const openGraph = {
    url: `http://localhost:1337${post?.attributes?.Image?.data?.attributes?.url}`, // Dynamic URL
    type: "article",
    image: `http://localhost:1337${post?.attributes?.Image?.data?.attributes?.url}`, // Dynamic URL
    title,
    description,
  };

  return {
    title,
    description,
    openGraph,
  };
}
