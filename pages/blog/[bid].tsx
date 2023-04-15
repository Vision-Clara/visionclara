import { getOneBlog, Blog } from "@/lib/api/blog";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Link from "next/link";

const BlogPost = ({
  blog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>{blog.title}</h1>
      <Link href="./">Back</Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{ blog: Blog }> = async (
  context: GetServerSidePropsContext
) => {
  const blogId: string = JSON.parse(JSON.stringify(context.query.bid));
  const data = await getOneBlog(blogId);

  const serializedData = JSON.parse(JSON.stringify(data));

  return {
    props: {
      blog: serializedData,
    },
  };
};

export default BlogPost;
