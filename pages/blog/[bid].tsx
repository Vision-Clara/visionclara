import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { bid } = router.query;

  return <div>BlogPost {bid}</div>;
};

export default BlogPost;
