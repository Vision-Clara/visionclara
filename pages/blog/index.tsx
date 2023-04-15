import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import type { InferGetStaticPropsType } from "next";
import { getAllBlogs, Blog } from "@/lib/api/blog";

const BlogList = ({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>Blogs Page</h1>
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id.toString()}>
              <Link href={`/blog/${blog._id.toString()}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async (
  context: GetStaticPropsContext
) => {
  const data = await getAllBlogs();
  const serializedData = JSON.parse(JSON.stringify(data));

  return {
    props: {
      blogs: serializedData,
    },
  };
};

export default BlogList;
