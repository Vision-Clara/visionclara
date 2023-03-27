import Link from "next/link";
import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { bid } = router.query;

  return (
    <>
      <h2>BlogPost {bid}</h2>
      <Link href="./">Back</Link>
    </>
  );
};

export default BlogPost;
