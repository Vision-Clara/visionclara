import { GetStaticProps } from "next";
import Link from "next/link";
import type { InferGetStaticPropsType } from "next";
import { getAllBlogs } from "@/lib/api/blog";

interface Blog {
  _id: string;
  title: string;
}

function BlogList({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h1>Blogs Page</h1>
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id}>
              <Link href={`/blog/${blog.title}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async (
  context
) => {
  const blogs = await getAllBlogs();

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
  };
};

export default BlogList;
