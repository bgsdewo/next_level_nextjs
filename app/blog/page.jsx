import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";
import Link from "next/link";
export const revalidate = 30;

export const metadata = {
  title: "Blog",
};
export default async function BlogPage({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  const { pageCount, posts } = await getAllPosts(3, page);

  return (
    <>
      <Heading>Blog</Heading>
      <h2 className="text-2xl mb-3">List of posts</h2>
      <div className="flex gap-3 pb-3">
        <Link href={`/blog?page=${page - 1}`}>&lt;</Link>
        <span>
          Page {page} of {pageCount}
        </span>
        <Link href={`/blog?page=${page + 1}`}>&gt;</Link>
      </div>
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          href={`/blog/${post.slug}`}
          image={post.image}
          description={post.description}
          date={post.date}
          author={post.author}
        />
      ))}
    </>
  );
}

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
