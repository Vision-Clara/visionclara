import { GetStaticPaths } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { bid } = router.query;

  return (
    <>
      <h1>{bid}</h1>
      <Link href="./">Back</Link>
    </>
  );
};

export default BlogPost;
