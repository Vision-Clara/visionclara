import Link from "next/link";

const Blog = () => {
  return (
    <>
      <h1>Blogs Page</h1>
      <div>
        <ul>
          <li>
            <Link href="/blog/1">Blog Post 1</Link>
          </li>
          <li>
            <Link href="/blog/2">Blog Post 2</Link>
          </li>
          <li>
            <Link href="/blog/3">Blog Post 3</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Blog;
